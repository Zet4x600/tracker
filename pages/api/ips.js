let ips = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown';
    if (!ips.includes(ip)) {
      ips.push(ip);
    }
    res.status(200).json({ message: 'IP salvato', ip });
    return;
  }
  // GET
  res.status(200).json({ ips });
}
