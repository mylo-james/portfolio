import { useContext, useState } from 'react';
import { NavBarContext } from '../NavBar';
import NavScroll from './NavScroll';

function Sidebar() {
    const { setOpen } = useContext(NavBarContext);
    const [openTimeout, setOpenTimeout] = useState(null);
    return (
        <div
            className='sidebar'
            onMouseEnter={() => clearTimeout(openTimeout)}
            onMouseLeave={() => setOpenTimeout(setTimeout(setOpen, 700, false))}
        >
            <NavScroll to='#home' label='Home' />
            <NavScroll to='#journey' label='Journey' />
            <NavScroll to='#projects' label='Projects' />
            <NavScroll to='#contact' label='Contact' />
        </div>
    );
}

export default Sidebar;
