import NavBar from './Sections/NavBar';
import Splash from './Sections/Splash';
import HomeSty from './HomeSty';
import Journey from './Sections/Journey';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Projects from './Sections/Projects';

function Home() {
    return (
        <HomeSty>
            <Splash />
            <NavBar />
            <Journey />
            <Projects />
            <Contact />
            <Footer />
        </HomeSty>
    );
}

export default Home;
