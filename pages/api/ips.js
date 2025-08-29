// Variabile temporanea (non persistente, solo esempio):
let ips = [];

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',') || req.connection.remoteAddress;
  if (!ips.includes(ip)) ips.push(ip);
  res.status(200).json({ ips });
}
