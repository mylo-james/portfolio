import Animation from './components/Animation/Animation';
import SplashSty from './SplashSty';
function Splash() {
    return (
        <SplashSty id='home'>
            <Animation/>
            <div className='intro'>
                <p className='name'>Mylo James</p>
                <p>Fullstack Web Developer</p>
            </div>
            <a className='go' href='#journey'>
                Let's go!
            </a>
        </SplashSty>
    );
}

export default Splash;
 