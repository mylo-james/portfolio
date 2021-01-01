import { createContext, useState } from 'react';
import Hamburger from './components/Hamburger';
import Sidebar from './components/Sidebar';
import NavBarSty from './NavBarSty';
export const NavBarContext = createContext();

function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <NavBarContext.Provider value={{ open, setOpen }}>
            <NavBarSty>
                <Hamburger />
                {open && <Sidebar />}
            </NavBarSty>
        </NavBarContext.Provider>
    );
}

export default NavBar;
