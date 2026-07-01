import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { email, name, subscriberId } = await req.json();

    if (!email || !name || !subscriberId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const unsubscribeUrl = `https://pivotalvoice.org/api/crm/unsubscribe?id=${subscriberId}`;
    const firstName = name.split(' ')[0];

    const { data, error } = await resend.emails.send({
        from: 'Pivotal Voice <newsletter@pivotalvoice.org>',
        to: [email],
        subject: 'Welcome to Pivotal Voice — You\'re In!',
        headers: {
            'List-Unsubscribe': `<${unsubscribeUrl}>`,
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
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
          <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">Welcome to the Community, ${firstName}!</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:rgba(245,235,210,0.85);font-size:16px;line-height:1.7;margin:0 0 20px;">
            You're now subscribed to Pivotal Voice — Ellis County's independent source for local news, civic updates, and community conversation.
          </p>

          <p style="color:rgba(245,235,210,0.75);font-size:15px;line-height:1.7;margin:0 0 28px;">
            Here's what you can expect in your inbox:
          </p>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;width:100%;">
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;margin-bottom:8px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">📰 Local News &amp; Updates</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Coverage of Ellis County government, elections, and community issues that affect your daily life.</p>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">🗳️ Civic Engagement</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Candidate information, voter resources, and tools to help you participate in local democracy.</p>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">🤝 Community Forum</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Discussions with your neighbors on topics that matter — from growth and development to schools and safety.</p>
              </td>
            </tr>
          </table>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:#d4af37;border-radius:8px;padding:14px 28px;">
              <a href="https://pivotalvoice.org" style="color:#0a0f1e;font-size:14px;font-weight:700;text-decoration:none;font-family:Arial,sans-serif;">
                Visit Pivotal Voice →
              </a>
            </td></tr>
          </table>

          <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:0 0 24px;">

          <p style="color:rgba(245,235,210,0.55);font-size:13px;line-height:1.6;margin:0;">
            Have a story tip or community event to share? Reply to this email — we read everything.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#080d1a;padding:24px 40px;border-top:1px solid rgba(212,175,55,0.1);">
          <p style="margin:0;color:rgba(245,235,210,0.3);font-size:12px;font-family:Arial,sans-serif;line-height:1.7;">
            © ${new Date().getFullYear()} Pivotal Voice · Ellis County, Texas<br>
            You're receiving this because you subscribed at pivotalvoice.org.<br>
            <a href="${unsubscribeUrl}" style="color:rgba(212,175,55,0.5);text-decoration:none;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    if (error) {
        console.error('Welcome email send error:', error);
        return NextResponse.json({ error: 'Failed to send email', detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
}
