import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = (e) => {
    const button = e.currentTarget;

    // Rimuove eventuale ripple precedente
    const rippleOld = button.querySelector('.ripple');
    if (rippleOld) {
      rippleOld.remove();
    }

    // Crea l'elemento ripple
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = `${diameter}px`;

    // Posiziona il ripple al punto del click
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    ripple.classList.add('ripple');
    button.appendChild(ripple);

    // Dopo animazione, parte il video
    setTimeout(() => setAccepted(true), 500);
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
      }}>
        {!accepted && (
          <button
            onClick={handleClick}
            style={{
              position: 'relative',
              overflow: 'hidden',
              color: 'white',
              background: 'transparent',
              border: '2px solid white',
              padding: '20px 40px',
              fontSize: '2rem',
              cursor: 'pointer',
              outline: 'none',
              borderRadius: '8px',
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
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transform: scale(0);
          animation: ripple-animation 600ms linear;
          pointer-events: none;
          z-index: 10;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
