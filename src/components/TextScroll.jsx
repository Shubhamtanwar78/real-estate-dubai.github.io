import React, { useState, useEffect } from 'react';

const TextScroll = () => {
    const text = 'NO Red Tape - NO Hidden Fees - NO Catch - ';
    const [transformX, setTransformX] = useState(0);

    useEffect(() => {
        const animate = () => {
            setTransformX((prevTransformX) => {
                return prevTransformX <= -10000 ? 0 : prevTransformX - 1;
            });
        };

        const interval = setInterval(animate, 16);

        return () => clearInterval(interval);
    }, []);

    const matrix3d = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${transformX}, 0, 0, 1)`;

    const tickerStyle = {
        transform: matrix3d,
    };

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div className='rulesDiv1Text1' style={tickerStyle}>{text.repeat(100)}</div>
        </div>
    );
};

export default TextScroll;
