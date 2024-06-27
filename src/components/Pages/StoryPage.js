import React, { useState } from 'react';
import '../../styles/storypage.css';
import TemplatePage from './TemplatePage.js';
import bg from '../../Assets/bg/m5.jpg';

const firstPartText = `Story started in the streets of Nagole, Hyderabad,
before life took Gopal to the shores of America.
Playing rough in the streets of my colony, running free in the wind.
That’s the Hyderabad story. One day, a thought struck as we looked at the world around us.
Everywhere we saw, we were looking at the vestiges of a foreign culture that was given to us to embrace.
And we thought, what about the rest of us who didn’t live that foreign world?
What about those of us who grew up truly Telugu, truly Bhāratiya, truly belonging to the gallies of every city,
town, and village in India? What represents those of us who are living first world lives all across the planet,
despite our humble beginnings, studying in our mother tongues, and not Angrezi?
The world needs to see our desi fashion too. So let’s go make a splash.`;

const secondPartText = `And we decided, Telugu Medium, if it were to be a success,
would be dedicated to not only a Telugu,
but to every Bhāratiyan who lives the true Bhāratiyan way of life.
It is a tribute to our parents who made it so far in this world,
despite their perceived cultural shortcomings. We are Desi,
and we’re gonna show off every bit of it. Wherever you are,
whatever corner you are in, your love of Bhāratiyan culture is what will
make this project a success.`;

const StoryPage = () => {
  const [showSecondPart, setShowSecondPart] = useState(false);

  const handleClick = () => {
    setShowSecondPart(!showSecondPart);
  };

  return (
    <>
      <TemplatePage src={bg} type='image'>
        <div className="story-content">
          <h1>Our Story</h1>
          <div className={`text-container ${showSecondPart ? 'fade-in' : ''}`}>
            <p>{showSecondPart ? secondPartText : firstPartText}</p>
          </div>
          <button className="toggle-button" onClick={handleClick}>
            {showSecondPart ? 'Read First Part' : 'Read Second Part'}
          </button>
        </div>
      </TemplatePage>
    </>
  );
}

export default StoryPage;
