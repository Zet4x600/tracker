import { useState, useEffect } from 'react';

export default function Admin() {
  const [ips, setIps] = useState([]);
  
  useEffect(() => {
    fetch('/api/ips')
      .then((res) => res.json())
      .then((data) => setIps(data.ips));
  }, []);

  return (
    <div style={{
      background: 'black',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2>IP visitatori:</h2>
      <ul>
        {ips.map((ip, idx) => <li key={idx}>{ip}</li>)}
      </ul>
    </div>
  );
}
