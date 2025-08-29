import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
    setTimeout(() => setAccepted(true), 300);
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
          background: rgba(255, 255, 255, 0.6);
          animation: ripple-effect 600ms linear;
          pointer-events: none;
          transform: scale(0);
          opacity: 1;
          z-index: 10;
        }
        @keyframes ripple-effect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
