import React, { useState } from 'react';
import bg from '../../Assets/bg/read_bg.jpg';
import bg1 from '../../Assets/bg/bg2.png';
import TemplatePage from './TemplatePage';
import '../../styles/readpage.css';
import Simba from '../../Assets/now.png';
import Mufasa from '../../Assets/then.png';

const ReadPage = () => {
    const [flag, setFlag] = useState(true);
    const [currBg, setCurrBg] = useState(bg);
    const [currImg, setCurrImg] = useState(Simba);
    const [buttonText, setButtonText] = useState("Father");
    const [title, setTitle] = useState("Simba");
    const changeLayout = () => {
        if (flag) {
            setCurrBg(bg1);
            setCurrImg(Mufasa)
            setTitle("Mufasa");
            setButtonText("Son");
            setFlag(!flag);
        }
        else {
            setCurrBg(bg);
            setCurrImg(Simba);
            setTitle("Simba");
            setButtonText("Father")
            setFlag(!flag);
        }
    }
    return (
        <TemplatePage src={currBg} type='image'>
            <div className="read-bg">
                {/* <Background src={bg} type='image' > */}
                <div className="read-content">
                    <h4 className='main-title'>
                        {title}
                    </h4>
                    <p className='read-p'>You have forgotten who you are. Look inside yourself, Simba. You are more than what you have become. You must take your place in the circle of life. Remember who you are</p>
                    <button className='read-button' onClick={changeLayout}>{buttonText}</button>
                </div>
                <div className="read-image">
                    <img src={currImg} alt="currentStage" />
                </div>
                {/* </Background> */}
            </div>
        </TemplatePage>
    )
}

export default ReadPage;