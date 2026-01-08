import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed = 50, className }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <p className={className}>
            {displayedText}
            <span className="animate-blink ">▌</span>
        </p>
    );
};

export default TypewriterEffect;
