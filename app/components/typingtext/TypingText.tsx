'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './TypingText.module.css';

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = (props) => {
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < props.text.length) {
        textRef.current += props.text.charAt(index);
        setDisplayedText(textRef.current);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the speed by changing the interval time

    return () => clearInterval(interval);
  }, [props.text]);

  return <div className={styles.typingText}>{displayedText}</div>;
};

export default TypingText;
