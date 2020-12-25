import { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import { NavBarContext } from '../NavBar';

function Hamburger() {
    const { setOpen } = useContext(NavBarContext);
    const toggleSideBar = () => {
        setOpen((open) => !open);
    };
    return (
        <div className='hamburger'>
            <IoMenu onClick={toggleSideBar} />
        </div>
    );
}

export default Hamburger;
