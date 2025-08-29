import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = () => setAccepted(true);

  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div style={{
        backgroundColor: 'black',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}>
        {!accepted && (
          <button
            onClick={handleClick}
            className="glow-button"
            style={{
              color: 'white',
              background: 'transparent',
              border: 'none',
              padding: '20px 40px',
              fontSize: '2rem',
              cursor: 'pointer',
              outline: 'none',
              borderRadius: '12px',
            }}
          >
            click here
          </button>
        )}

        {accepted && (
          <video
            src="/video.mp4"
            autoPlay
            controls
            style={{
              width: '80vw',
              maxWidth: 800,
              outline: 'none',
              border: 'none',
              boxShadow: 'none',
            }}
          />
        )}
      </div>

      <style jsx>{`
        .glow-button {
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .glow-button:hover {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 30px #0ff;
        }
      `}</style>
    </>
  );
}
