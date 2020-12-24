import { NavLink } from 'react-router-dom';
import ToggleThemeButton from '../../../../../components/ToggleThemeButton';

function Sidebar() {
    return (
        <div className='sidebar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/potato'>Potato</NavLink>
            <ToggleThemeButton />
        </div>
    );
}

export default Sidebar;
