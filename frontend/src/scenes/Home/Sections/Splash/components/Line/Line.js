import LineSty from './LineSty';

function Line({ delay, duration }) {
    return (
        <LineSty delay={delay} duration={duration}>
            <div className='dot' />
        </LineSty>
    );
}

export default Line;
