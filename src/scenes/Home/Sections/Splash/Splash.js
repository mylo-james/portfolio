import SplashSty from './SplashSty';
function Splash() {
    return (
        <SplashSty id='home'>
            <div className='intro'>
                <p className='name'>Mylo James</p>
                <p>Fullstack Web Developer</p>
            </div>
            <a className='go' href='#start'>
                Let's go!
            </a>
        </SplashSty>
    );
}

export default Splash;
