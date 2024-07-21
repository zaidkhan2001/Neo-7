import React, { useEffect, useRef } from 'react';

const styles = {
  container: {
    textAlign: 'center',
    position: 'relative',
    width: '100%',
  },
  text1: {
    color: 'black',
    fontSize: '40px',
    fontWeight: '500',
    letterSpacing: '4px',
    marginBottom: '20px',
    background: 'white',
    position: 'relative',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
};

const TextContainer = ({ text1 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Text is in view');
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'text 3s 1';
        } else {
          console.log('Text is not in view');
        }
      },
      { threshold: 0.5 }
    );

    const currentTextRef = textRef.current;
    if (currentTextRef) {
      observer.observe(currentTextRef);
    }

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <span ref={textRef} style={styles.text1}>{text1}</span>
    </div>
  );
};

const keyframes = `
  @keyframes text {
    0% {
      color: black;
      margin-bottom: -40px;
    }
    30% {
      letter-spacing: 25px;
      margin-bottom: -40px;
    }
    85% {
      letter-spacing: 8px;
      margin-bottom: -40px;
    }
  }
`;

// Inject keyframes into the document head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default TextContainer;