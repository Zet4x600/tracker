import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = async () => {
    setAccepted(true);
    await fetch('/api/ips', { method: 'POST' });
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div
        style={{
          backgroundColor: 'black',
          height: '100vh',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        {!accepted ? (
          <button
            onClick={handleClick}
            style={{
              color: 'white',
              background: 'transparent',
              border: 'none',
              padding: '20px 40px',
              fontSize: '2rem',
              cursor: 'pointer',
              outline: 'none',
              borderRadius: '12px',
              transition: 'color 0.3s, text-shadow 0.3s',
            }}
            className="glow-button"
          >
            click here
          </button>
        ) : (
          <video
            src="/video.mp4"
            autoPlay
            controls
            style={{ width: '80vw', maxWidth: 800 }}
          />
        )}
      </div>
      <style jsx>{`
        .glow-button:hover {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
      `}</style>
    </>
  );
}
