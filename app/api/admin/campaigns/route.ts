import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const jwt = authHeader.slice(7);
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        global: { headers: { Authorization: `Bearer ${jwt}` } },
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify admin status
    const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single();

    if (!profile?.is_admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    try {
        const client = supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : supabase;
        const { data, error } = await client
            .from('email_campaigns')
            .select('*')
            .order('sent_at', { ascending: false });

        if (error) throw error;
        return NextResponse.json(data);
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to fetch campaigns';
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const jwt = authHeader.slice(7);
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        global: { headers: { Authorization: `Bearer ${jwt}` } },
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify admin status
    const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single();

    if (!profile?.is_admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { subject, body: emailBody, type, targetInterests } = body as {
        subject: string;
        body: string;
        type: string;
        targetInterests?: string[];
    };

    if (!subject?.trim() || !emailBody?.trim() || !type) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
        const client = supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : supabase;

        // 1. Fetch target subscribers
        let query = client
            .from('subscribers')
            .select('id, email, name')
            .eq('status', 'active');

        if (targetInterests && targetInterests.length > 0) {
            query = query.overlaps('interests', targetInterests);
        }

        const { data: recipients, error: fetchError } = await query;
        if (fetchError) throw fetchError;

        if (!recipients || recipients.length === 0) {
            return NextResponse.json({ error: 'No active subscribers found matching the criteria.' }, { status: 404 });
        }

        // Convert body newlines to HTML paragraphs/breaks
        const formattedBodyHtml = emailBody
            .split('\n')
            .map(p => p.trim() ? `<p style="margin:0 0 16px;color:rgba(245,235,210,0.75);font-size:15px;line-height:1.7;">${p}</p>` : '')
            .join('');

        // 2. Prepare Resend Batch
        const emailMessages = recipients.map(sub => {
            const host = req.headers.get('host') || 'pivotalvoice.org';
            const protocol = req.headers.get('x-forwarded-proto') || 'https';
            const unsubscribeUrl = `${protocol}://${host}/api/crm/unsubscribe?id=${sub.id}`;

            return {
                from: 'Pivotal Voice <info@pivotalvoice.org>',
                to: [sub.email],
                subject: subject,
                html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px;border-bottom:1px solid rgba(212,175,55,0.15);">
          <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">Pivotal Voice Newsletter</p>
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">${subject}</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:40px;">
          <p style="color:#ffffff;font-size:16px;font-weight:600;margin:0 0 20px;font-family:Arial,sans-serif;">Hello ${sub.name},</p>
          ${formattedBodyHtml}
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#080d1a;padding:24px 40px;border-top:1px solid rgba(212,175,55,0.1);">
          <p style="margin:0;color:rgba(245,235,210,0.3);font-size:12px;font-family:Arial,sans-serif;line-height:1.6;">
            © ${new Date().getFullYear()} Pivotal Voice · Ellis County, Texas<br>
            You received this because you are subscribed to updates from Pivotal Voice.<br>
            <a href="${unsubscribeUrl}" style="color:rgba(212,175,55,0.5);text-decoration:none;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
            };
        });

        // 3. Dispatch batch to Resend (chunks of 100)
        for (let i = 0; i < emailMessages.length; i += 100) {
            const chunk = emailMessages.slice(i, i + 100);
            const batchResult = await resend.batch.send(chunk);
            if (batchResult.error) {
                throw new Error(batchResult.error.message || 'Resend batch delivery failed');
            }
        }

        // 4. Log the campaign to Supabase
        const { error: dbError } = await client
            .from('email_campaigns')
            .insert({
                subject,
                body: emailBody,
                type,
                target_interests: targetInterests || null,
                recipient_count: recipients.length
            });

        if (dbError) throw dbError;

        return NextResponse.json({ success: true, recipientsSent: recipients.length });
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'Campaign dispatch failed';
        console.error('[Campaign API Error]:', err);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
