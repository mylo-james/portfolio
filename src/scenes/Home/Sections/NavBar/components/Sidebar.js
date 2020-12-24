import ToggleThemeButton from '../../../../../components/ToggleThemeButton';
import NavScroll from './NavScroll';

function Sidebar() {
    return (
        <div className='sidebar'>
            <NavScroll to='#home' label='Home' />
            <NavScroll to='#journey' label='Journey' />
            <NavScroll to='#projects' label='Projects' />
            <NavScroll to='#contact' label='Contact' />

            <ToggleThemeButton />
        </div>
    );
}

export default Sidebar;
