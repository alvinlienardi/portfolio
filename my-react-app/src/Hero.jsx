import { useState, useEffect } from 'react';
import scrollDownIcon from "./assets/scroll-down-svgrepo-com.svg";

function Hero() {
    const [showH1, setShowH1] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [showCaret, setShowCaret] = useState(false);
    const [iconState, setIconState] = useState('hidden'); // 'hidden' | 'blinking' | 'gone'

    const line1 = "Hi, I'm Alvin. I'm an undergraduate student at Kyoto Institute of Technology.";
    const line2 = "Check out my portfolio and my projects below!";
    const fullText = line1 + '\n' + line2;

    useEffect(() => {
        setTimeout(() => setShowH1(true), 300);

        const startDelay = setTimeout(() => {
            setShowCaret(true);
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setDisplayedText(fullText.slice(0, i));
                if (i >= fullText.length) {
                    clearInterval(interval);

                    // Start blinking after typewriter finishes
                    setIconState('blinking');

                    // After 5 blinks, hide the icon
                    // Each blink cycle = 0.6s, 5 blinks = 3s
                    setTimeout(() => {
                        setIconState('gone');
                    }, 10000);
                }
            }, 50);
            return () => clearInterval(interval);
        }, 1200);

        return () => clearTimeout(startDelay);
    }, []);

    const renderText = () => {
        return displayedText.split('\n').map((line, index) => (
            <span key={index}>
                {index > 0 && <br />}
                {line}
            </span>
        ));
    };

    return (
        <div className="hero" id="top">
            <h1 className={`hero-title ${showH1 ? 'visible' : ''}`}>Welcome to My Portfolio</h1>
            <h2 className={`hero-subtitle ${showCaret ? 'typing' : ''}`}>
                {renderText()}
            </h2>
            {iconState !== 'gone' && (
                <img
                    src={scrollDownIcon}
                    alt="Scroll Down Icon"
                    className={`scroll-down-icon ${iconState === 'blinking' ? 'blink' : 'hidden-icon'}`}
                />
            )}
        </div>
    );
}

export default Hero;