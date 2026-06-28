import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { email, resourceTitle, resourceCategory, resourceType } = await req.json();

    if (!email || !resourceTitle) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isVideo = resourceType === 'Video';

    const { error } = await resend.emails.send({
        from: 'Pivotal Voice <resources@pivotalvoice.com>',
        to: [email],
        subject: `Your Resource: ${resourceTitle}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px 40px 32px;border-bottom:1px solid rgba(212,175,55,0.15);">
          <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">Pivotal Voice</p>
          <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">Your Resource is Ready</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <div style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.2);border-radius:8px;padding:20px 24px;margin-bottom:28px;">
            <p style="margin:0 0 4px;color:rgba(212,175,55,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">${resourceCategory}</p>
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">${resourceTitle}</p>
          </div>

          <p style="color:rgba(245,235,210,0.75);font-size:15px;line-height:1.7;margin:0 0 24px;">
            Thank you for accessing the Pivotal Voice Resource Library. ${isVideo ? 'Your video resource is linked below.' : 'Your resource is attached to this email.'} We hope it helps you ${resourceCategory.includes('Candidate') || resourceCategory.includes('Campaign') ? 'on the campaign trail' : 'engage with your community'}.
          </p>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:#d4af37;border-radius:8px;padding:14px 28px;">
              <a href="https://pivotalvoice.com/resources" style="color:#0a0f1e;font-size:14px;font-weight:700;text-decoration:none;font-family:Arial,sans-serif;">
                ${isVideo ? '▶ Watch Resource' : '⬇ Download Resource'}
              </a>
            </td></tr>
          </table>

          <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:0 0 28px;">

          <p style="color:rgba(245,235,210,0.5);font-size:13px;line-height:1.6;margin:0 0 8px;">
            <strong style="color:rgba(245,235,210,0.8);">Need personalized help?</strong> Pivotal Voice works directly with candidates and civic leaders across Ellis County — from campaign messaging to media relations and crisis communications.
          </p>
          <p style="margin:0;">
            <a href="https://pivotalvoice.com/services" style="color:#d4af37;font-size:13px;text-decoration:none;">Explore our services →</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#080d1a;padding:24px 40px;border-top:1px solid rgba(212,175,55,0.1);">
          <p style="margin:0;color:rgba(245,235,210,0.3);font-size:12px;font-family:Arial,sans-serif;line-height:1.6;">
            © ${new Date().getFullYear()} Pivotal Voice · Ellis County, Texas<br>
            You received this because you requested a resource from our library.<br>
            <a href="#" style="color:rgba(212,175,55,0.5);text-decoration:none;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    if (error) {
        console.error('Resend error:', JSON.stringify(error));
        return NextResponse.json({ error: 'Failed to send email', detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
