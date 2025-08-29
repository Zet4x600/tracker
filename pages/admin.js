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
      backgroundColor: 'black',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    }}>
      <h2 style={{outline: 'none'}}>IP visitatori:</h2>
      <ul>
        {ips.map((ip, idx) => <li key={idx} style={{outline: 'none'}}>{ip}</li>)}
      </ul>
    </div>
  );
}
