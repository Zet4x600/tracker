import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  const handleClick = () => {
    setAccepted(true);
  };

  return (
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
          }}
          onFocus={(e) => e.target.style.outline = 'none'}
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
  );
}
