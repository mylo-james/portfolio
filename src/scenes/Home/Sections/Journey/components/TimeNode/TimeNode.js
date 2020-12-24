import TimeNodeSty from './TimeNodeSty';
import { Waypoint } from 'react-waypoint';
import { useContext } from 'react';
import { JourneyContext } from '../../Journey';

function TimeNode({ num }) {
    const { node, setNode } = useContext(JourneyContext);

    const handleEnter = () => {
        console.log(`${num} enter`);
        setNode(num);
    };

    const handleLeave = () => {
        console.log(`${num} leave`);
    };
    return (
        <TimeNodeSty>
            <Waypoint
                debug={true}
                topOffset={'200px'}
                bottomOffset={'400px'}
                onEnter={handleEnter}
                onLeave={handleLeave}
            />
            <div>TimeNode</div>
            {num === node && <div>HELLO</div>}
        </TimeNodeSty>
    );
}

export default TimeNode;
