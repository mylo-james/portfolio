import NavBar from './Sections/NavBar';
import Splash from './Sections/Splash';
import HomeSty from './HomeSty';

function Home() {
    return (
        <HomeSty>
            <Splash />
            <NavBar />
        </HomeSty>
    );
}

export default Home;
