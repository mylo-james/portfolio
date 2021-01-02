import TimeNodeSty from './TimeNodeSty';
import { useContext, useEffect, useState } from 'react';
import { JourneyContext } from '../../Journey';
import { GiNestedHexagons } from 'react-icons/gi';
import NodeInfo from '../NodeInfo';
import { CSSTransition } from 'react-transition-group';

function TimeNode({ data }) {
    const id = Number.parseInt(data.id);
    const { node } = useContext(JourneyContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (id === node) setIsVisible(true);
        else setIsVisible(false);
    }, [node, id]);

    return (
        <TimeNodeSty isVisible={isVisible}>
            <div className='icon'>
                <GiNestedHexagons />
            </div>
            <NodeInfo data={data} />
            <CSSTransition in={isVisible} timeout={100} classNames='slide'>
                <div className='blocker' />
            </CSSTransition>
        </TimeNodeSty>
    );
}

export default TimeNode;
