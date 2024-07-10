'use client';

import React, { useEffect, useState } from 'react';
import styles from './TypingText.module.css';

interface TypingTextProps {
  text: string;
}

const TypingText = (props) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < props.text.length) {
        setDisplayedText((prev) => prev + props.text.charAt(index));
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
