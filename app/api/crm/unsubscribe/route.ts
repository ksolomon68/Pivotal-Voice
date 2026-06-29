import { NextRequest, NextResponse } from 'next/server';
import { unsubscribeById } from '@/lib/crm/newsletter-service';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return new NextResponse(
            `<html>
                <head>
                    <title>Invalid Request</title>
                    <style>
                        body { background: #0a0f1e; color: #ffffff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                        .card { background: #0d1526; border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; padding: 40px; text-align: center; max-width: 400px; }
                        h1 { color: #d4af37; font-size: 22px; margin-top: 0; }
                        p { color: rgba(245,235,210,0.7); font-size: 14px; line-height: 1.5; }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <h1>Invalid Unsubscribe Link</h1>
                        <p>The unsubscribe link is invalid or expired. Please check your email or contact support if you continue to receive unwanted emails.</p>
                    </div>
                </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
        );
    }

    try {
        const success = await unsubscribeById(id);

        if (!success) {
            throw new Error('Subscriber not found or database update failed');
        }

        return new NextResponse(
            `<html>
                <head>
                    <title>Unsubscribed Successfully</title>
                    <style>
                        body { background: #0a0f1e; color: #ffffff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                        .card { background: #0d1526; border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; padding: 40px; text-align: center; max-width: 450px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                        .icon { width: 48px; height: 48px; background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 24px; color: #d4af37; }
                        h1 { color: #ffffff; font-size: 22px; margin: 0 0 10px; font-weight: bold; }
                        p { color: rgba(245,235,210,0.7); font-size: 14px; line-height: 1.6; margin: 0 0 24px; }
                        .btn { display: inline-block; background: #d4af37; color: #0a0f1e; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: bold; text-decoration: none; transition: background 0.2s; }
                        .btn:hover { background: #f3ca40; }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <div class="icon">✓</div>
                        <h1>Unsubscribed Successfully</h1>
                        <p>You have been unsubscribed from the Pivotal Voice mailing list. You will no longer receive campaigns or digest emails from us.</p>
                        <a href="https://pivotalvoice.org" class="btn">Go to Pivotal Voice</a>
                    </div>
                </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
        );
    } catch (err) {
        console.error('[Unsubscribe Error]:', err);
        return new NextResponse(
            `<html>
                <head>
                    <title>Error Unsubscribing</title>
                    <style>
                        body { background: #0a0f1e; color: #ffffff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                        .card { background: #0d1526; border: 1px solid rgba(255,100,100,0.2); border-radius: 12px; padding: 40px; text-align: center; max-width: 400px; }
                        h1 { color: #f87171; font-size: 22px; margin-top: 0; }
                        p { color: rgba(245,235,210,0.7); font-size: 14px; line-height: 1.5; }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <h1>Something Went Wrong</h1>
                        <p>We encountered an error trying to process your unsubscribe request. Please try again or contact info@pivotalvoice.org for assistance.</p>
                    </div>
                </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
        );
    }
}
