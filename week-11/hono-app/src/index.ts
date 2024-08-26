import { Hono } from 'hono'
import generateQR from './components/QRgen'

const app = new Hono()

app.get('/generate-qr', async (c) => {
  return c.html(landing);
})

app.post('/generate-qr', async (c) => {
  try {
    return await generateQR(c);
  } catch {
    return c.json({ error: 'Failed to generate QR' }, 500);
  }
})

export default app


const landing = `
<h1>QR Generator</h1>
<p>Click the below button to generate a new QR code. This will make a request to your Worker.</p>
<input type="text" id="text" value="https://github.com/CaptainSkyFish"></input>
<button onclick="generate()">Generate QR Code</button>
<p>Generated QR Code Image</p>
<img id="qr" src="#" />
<script>
  function generate() {
    fetch(window.location.pathname, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: document.querySelector("#text").value })
    })
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = function () {
        document.querySelector("#qr").src = reader.result; // Update the image source with the newly generated QR code
      }
      reader.readAsDataURL(blob);
    })
  }
</script>
`;