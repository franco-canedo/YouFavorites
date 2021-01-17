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

const CategoriesMenu = () => {
    const [minimize, setMinimize] = useState(false);
    const [sign, setSign] = useState('<');
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fd = new FormData();
        fd.append('google_token', localStorage.google_token);
        fd.append('uid', localStorage.uid);
        axios.get(`${API_ROOT}/user/categories`, fd)
        .then(res => {
            console.log(res, 'categorioes');
            setCategories([...res.data]);
        }).catch(error => console.log(error))
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
                                    dispatch(selectCategory(category));
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