import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'noreply@whitcodes.dev',
            to: 'whit@whitcodes.dev',
            replyTo: email,
            subject: `[whitcodes.dev] Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
