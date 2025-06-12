export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nama } = req.body;

    const sheetURL = 'https://sheet.best/api/sheets/YOUR_SHEET_ID'; // ganti dengan endpoint Sheet.best kamu

    const response = await fetch(sheetURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama })
    });

    if (response.ok) {
      res.status(200).send('Data berhasil dikirim ke Google Sheets');
    } else {
      res.status(500).send('Gagal mengirim data');
    }
  } else {
    res.status(405).send('Metode tidak diizinkan');
  }
}
