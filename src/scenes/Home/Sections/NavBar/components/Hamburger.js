import { IoMenu } from 'react-icons/io5';

function Hamburger({ setOpen }) {
    const toggleSideBar = () => {
        setOpen((open) => !open);
    };
    return (
        <>
            <IoMenu onClick={toggleSideBar} />
        </>
    );
}

export default Hamburger;
