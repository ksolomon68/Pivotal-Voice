import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message, nomineeName, nomineeBio, nomineeContact } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const isNomination = subject === 'Nominate someone to be on the show';

        // Nominee validation if applicable
        if (isNomination) {
            if (!nomineeName || !nomineeBio) {
                return NextResponse.json({ error: 'Missing required nominee fields' }, { status: 400 });
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        const resend = new Resend(apiKey);

        // Build HTML template
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${subject}</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0f1e;font-family:'Inter',Arial,sans-serif;color:#ffffff;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px;border-bottom:1px solid rgba(212,175,55,0.15);">
                      <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Pivotal Voice Contact Form</p>
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;font-family:'Montserrat',Georgia,serif;">New Message Received</h1>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;color:rgba(245,235,210,0.85);font-size:15px;line-height:1.6;">
                      <p style="margin:0 0 24px;font-size:16px;">You have received a new submission from the website contact page.</p>
                      
                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:0 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">Sender Details</h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;width:120px;vertical-align:top;">Name:</td>
                          <td style="padding:6px 0;color:#ffffff;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Email:</td>
                          <td style="padding:6px 0;color:#ffffff;"><a href="mailto:${email}" style="color:#d4af37;text-decoration:none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Phone:</td>
                          <td style="padding:6px 0;color:#ffffff;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Subject:</td>
                          <td style="padding:6px 0;color:#ffffff;font-weight:600;">${subject}</td>
                        </tr>
                      </table>

                      ${isNomination ? `
                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:28px 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">Show Nomination Details</h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;width:120px;vertical-align:top;">Nominee Name:</td>
                          <td style="padding:6px 0;color:#ffffff;font-weight:600;">${nomineeName}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Bio & Context:</td>
                          <td style="padding:6px 0;color:#ffffff;white-space:pre-wrap;">${nomineeBio}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Nominee Contact:</td>
                          <td style="padding:6px 0;color:#ffffff;">${nomineeContact || 'Not provided'}</td>
                        </tr>
                      </table>
                      ` : ''}

                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:28px 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">
                        ${isNomination ? 'Nomination Notes / Message' : 'Message Body'}
                      </h2>
                      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:16px;color:#ffffff;white-space:pre-wrap;margin-bottom:24px;">${message}</div>
            
                      <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:30px 0 20px 0;">
                      <p style="margin:0;font-size:12px;color:rgba(245,235,210,0.4);text-align:center;">This is an automated notification from the Pivotal Voice website contact form.</p>
                    </td>
                  </tr>
            
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `;

        const { error } = await resend.emails.send({
            from: 'Pivotal Voice Website <contact@pivotalvoice.org>',
            to: ['info@pivotalvoice.org'],
            subject: `[Contact Form] ${subject} - ${name}`,
            html,
            replyTo: email,
        });

        if (error) {
            console.error('Failed to send contact email via Resend:', error);
            return NextResponse.json({ error: 'Failed to send message', detail: error }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('Error handling contact submission:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
