import TimeNodeSty from './TimeNodeSty';
import { Waypoint } from 'react-waypoint';
import { useContext, useEffect, useState } from 'react';
import { JourneyContext } from '../../Journey';
import { GiNestedHexagons } from 'react-icons/gi';
import NodeInfo from '../NodeInfo';
import { CSSTransition } from 'react-transition-group';

function TimeNode({ num }) {
    const { node, setNode } = useContext(JourneyContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (num === node) setIsVisible(true);
        else setIsVisible(false);
    }, [node, num]);

    const handleEnter = () => {
        setNode(num);
    };

    return (
        <TimeNodeSty>
            <Waypoint
                topOffset={'150px'}
                bottomOffset={'500px'}
                onEnter={handleEnter}
            />
            <div className='icon'>
                <GiNestedHexagons />
                <NodeInfo />
                <CSSTransition in={isVisible} timeout={100} classNames='sample'>
                    <div className='blocker' />
                </CSSTransition>
            </div>
        </TimeNodeSty>
    );
}

export default TimeNode;
