import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './CategoriesMenu.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalCategory from './ModalCategory';
import axios from 'axios';
import {API_ROOT} from '../constants';
import {selectCategory} from '../actions';
import {backToCategory} from '../actions';

const headers = {}

const CategoriesMenu = ({user}) => {
    const [minimize, setMinimize] = useState(false);
    const [sign, setSign] = useState('<');
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.token;
        if (token) {
            return fetch(`${API_ROOT}/categories`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // An error will occur if the token is invalid.
                        // If this happens, you may want to remove the invalid token.
                        console.log(data.message);
                        localStorage.removeItem("token");
                    } else {
                        console.log('success categories get', data);
                       setCategories([...data]);
                    }
                })
        }
    }, [])

    const toggleMenu = () => {
        setMinimize(prevState => !prevState);
        if (sign === '<') {
            setSign('>')
        } else {
            setSign('<')
        }
    }

    const toggleModal = () => {
        setShow(prevState => !prevState);
    }

    const addCategoryClient = (name) => {
        setCategories(prevState => [...prevState, { name: name }]);
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
                                return <div className="categories-div"
                                onClick={() => {
                                    dispatch(selectCategory(category.name));
                                    dispatch(backToCategory());
                                    }}>
                                    <div className="category">
                                        <li>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</li>
                                    </div>

                                </div>
                            })

                    }

                </ul>
            </div>
            {
                minimize ? null :
                    <div className="add-button-category" onClick={toggleModal}>
                        <h3>+</h3>
                    </div>
            }
            {
                show ?  <ModalCategory show={show} 
                toggleModal={toggleModal}
                addCategoryClient={addCategoryClient}/> : null
            }
           


        </div>
    );
}

export default CategoriesMenu;