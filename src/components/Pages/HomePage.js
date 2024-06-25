import React, { useState, useEffect } from 'react';
import '../../styles/Homepage.css';
import bg from '../../Assets/bg/home.jpg';
import TemplatePage from './TemplatePage.js';

const texts = [
  "Swagatham.   ",
  "స్వాగతం.   "
];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && forward) {
      setForward(false);
      setTimeout(() => {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setSubIndex(0);
      }, 1000);
      return;
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 100 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  useEffect(() => {
    setDisplayText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <TemplatePage src={bg} type='image'>
        <div className="content">
          <div className="typewriter-container">
            <div className="typewriter">
              <p>{displayText}<span className={blink ? 'blink' : ''}>|</span></p>
            </div>
          </div>
        </div>
      </TemplatePage>
    </>
  );
};

export default HomePage;
