import qr from 'qr-image'
import { Context } from 'hono';

export default async function generateQrCode(c: Context) {
    const { text } = await c.req.json();
    const qr_svg = qr.imageSync(text || "https://github.com/CaptainSkyFish", { type: 'svg' });

    return c.body(qr_svg, 200, {
        'Content-Type': 'image/svg+xml',
        'Content-Disposition': `inline; filename="qr-code.svg"`
    })
}