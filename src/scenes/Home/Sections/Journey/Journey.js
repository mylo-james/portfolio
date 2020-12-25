import { createContext, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import TimeNode from './components/TimeNode';
import JourneySty from './JourneySty';
export const JourneyContext = createContext();

function Journey() {
   
    const [node, setNode] = useState(1);

    return (
        <JourneySty>
            <JourneyContext.Provider value={{ node, setNode }}>
                <div className='anchor' id='journey'></div>
                <div className='title'>
                    <p>Journey</p>
                </div>
                <div className='timeline'>
                    <TimeNode num={1} />
                    <TimeNode num={2} />
                    <TimeNode num={3} />
                    <TimeNode num={4} />
                    <TimeNode num={5} />
                </div>
            </JourneyContext.Provider>
        </JourneySty>
    );
}

export default Journey;
