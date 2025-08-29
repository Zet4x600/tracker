import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = () => {
    setAccepted(true);
  };

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
            className="rainbow-button"
            style={{
              background: 'transparent',
              border: '2px solid transparent',
              padding: '20px 40px',
              fontSize: '2rem',
              cursor: 'pointer',
              outline: 'none',
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

      <style jsx>{`
        .rainbow-button {
          position: relative;
          color: white;
          font-weight: bold;
          background-image: linear-gradient(
            90deg,
            red,
            orange,
            yellow,
            green,
            blue,
            indigo,
            violet
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow-animation 3s linear infinite;
          border-radius: 10px;
          transition: box-shadow 0.3s ease;
        }
        .rainbow-button:hover {
          box-shadow:
            0 0 10px red,
            0 0 20px orange,
            0 0 30px yellow,
            0 0 40px green,
            0 0 50px blue,
            0 0 60px indigo,
            0 0 70px violet;
        }
        @keyframes rainbow-animation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 360% 50%;
          }
        }
      `}</style>
    </>
  );
}
