import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setAccepted(true);
    setClicked(true);
  };

  // Reset dell'effetto glow dopo mezzo secondo
  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => setClicked(false), 500);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

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
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}>
        {!accepted && (
          <button
            onClick={handleClick}
            style={{
              color: 'white',
              background: 'transparent',
              border: '2px solid transparent',
              padding: '20px 40px',
              fontSize: '2rem',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: clicked
                ? '0 0 12px 4px rgba(255, 255, 255, 0.8), 0 0 20px 8px rgba(255, 255, 255, 0.5)'
                : 'none',
              transition: 'box-shadow 0.3s ease-in-out',
              borderRadius: '8px',
            }}
            onFocus={e => e.target.style.outline = 'none'}
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
    </>
  );
}
