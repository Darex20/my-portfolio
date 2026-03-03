import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let typingInterval;
    if (isDeleting) {
      typingInterval = setInterval(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      typingInterval = setInterval(() => {
        setText((prev) => texts[loopNum].substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === texts[loopNum]) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      clearInterval(typingInterval);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => (prev + 1) % texts.length);
      clearInterval(typingInterval);
    }

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, texts, typingSpeed, deletingSpeed, loopNum, pauseTime]);

  return <span>{text}</span>;
};

export default TypingEffect;
