import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './CategoriesMenu.css';

const CategoriesMenu = () => {
    const [minimize, setMinimize] = useState(false);

    const toggleMenu = () => {
        setMinimize(prevState => !prevState);
    }
    return (
        <div className={minimize ? 'min-menu' : 'menu-categories'}>
            <div className="cat-title">
                {minimize ? null :  <h3>Categories</h3> }
           
            <button onClick={toggleMenu}>^</button>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
           
        </div>
    );
}

export default CategoriesMenu;