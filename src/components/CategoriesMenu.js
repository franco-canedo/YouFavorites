import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './CategoriesMenu.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const CategoriesMenu = () => {
    const [minimize, setMinimize] = useState(false);
    const [sign, setSign] = useState('<');
    const [categories, setCategories] = useState([
        'fitness',
        'cats',
        'video games',
        'cars',
        'movies',

    ])

    const toggleMenu = () => {
        setMinimize(prevState => !prevState);
        if (sign === '<') {
            setSign('>')
        } else {
            setSign('<')
        }
    }
    return (
        <div className={minimize ? 'min-menu' : 'menu-categories'}>
            <div className="cat-title">
                {minimize ? null : <h3>Categories</h3>}
                <div className="minimize-button">
                    <Button variant="outline-light" type="button"
                        value={minimize ? "<" : ">"} onClick={toggleMenu}>
                        {sign}
                    </Button>
                </div>

                {/* <button onClick={toggleMenu}>^</button> */}
            </div>
            <div>
                <ul>
                    {
                        minimize ?
                            categories.map(category => {
                                return <div className="categories-div">
                                    <div className="category-min">
                                        <li></li>
                                    </div>

                                </div>
                            }) :
                            categories.map(category => {
                                return <div className="categories-div">
                                    <div className="category">
                                        <li>{category}</li>
                                    </div>

                                </div>
                            })

                    }

                </ul>
            </div>
            {
                minimize ? null :
                    <div className="add-button-category">
                        <h3>+</h3>
                    </div>
            }


        </div>
    );
}

export default CategoriesMenu;