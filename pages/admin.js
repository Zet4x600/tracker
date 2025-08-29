import { useEffect, useState } from 'react';

export default function Admin() {
  const [ips, setIps] = useState([]);

  useEffect(() => {
    fetch('/api/ips')
      .then((res) => res.json())
      .then((data) => setIps(data.ips));
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>IP visitatori</h1>
      <ul>
        {ips && ips.map((ip) => (
          <li key={ip}>{ip}</li>
        ))}
      </ul>
    </div>
  );
}
