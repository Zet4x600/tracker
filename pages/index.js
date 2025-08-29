import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [ips, setIps] = useState([]);
  const [showIps, setShowIps] = useState(false);

  const handleClick = async () => {
    setAccepted(true);
    const res = await fetch('/api/ips');
    const data = await res.json();
    setIps(data.ips);
    setShowIps(true);
  };

  return (
    <div style={{
      background: 'black',
      height: '100vh',
      width: '100vw',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {!accepted && (
        <button
          style={{
            color: 'white',
            background: 'transparent',
            border: '2px solid white',
            padding: '20px 40px',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
          onClick={handleClick}
        >
          click here
        </button>
      )}
      {accepted && (
        <>
          <video
            src="/video.mp4"
            autoPlay
            controls
            style={{ width: "80vw", maxWidth: 800 }}
          />
          {showIps && (
            <div style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
              <strong>IP dei visitatori:</strong>
              <ul>
                {ips.map((ip, idx) => (
                  <li key={idx}>{ip}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
