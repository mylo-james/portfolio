import { useState } from 'react';
import Hamburger from './components/Hamburger';
import Sidebar from './components/Sidebar';
import NavBarSty from './NavBarSty';
function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <NavBarSty>
            <Hamburger open={open} setOpen={setOpen} />
            {open && <Sidebar />}
        </NavBarSty>
    );
}

export default NavBar;
