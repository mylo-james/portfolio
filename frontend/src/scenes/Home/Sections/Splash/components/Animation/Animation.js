import { useEffect, useState } from 'react';
import Line from '../Line/Line';
import AnimationSty from './AnimationSty';

function Animation() {
    const [lines, setLines] = useState([]);

    const randInt = () => {
        return Math.random() * (4 - 0.3) + 0.3;
    };

    useEffect(() => {
        const res = [];
        for (let i = 0; i < 199; i++) {
            res.push({
                id: i,
                delay: randInt(),
                duration: randInt(),
            });
        }
        setLines(res);
    }, []);

    return (
        <AnimationSty>
            {lines.map((line) => (
                <Line
                    key={line.id}
                    delay={line.delay}
                    duration={line.duration}
                />
            ))}
        </AnimationSty>
    );
}

export default Animation;
