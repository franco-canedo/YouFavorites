import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './CategoriesMenu.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalCategory from './ModalCategory';
import axios from 'axios';
import { API_ROOT } from '../constants';
import { selectCategory } from '../actions';
import { backToCategory } from '../actions';

const headers = {}

const CategoriesMenu = ({ user, categories, addCategoryClient }) => {
    const [minimize, setMinimize] = useState(false);
    const [sign, setSign] = useState('<');
    // const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

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

    const toggleEdit = () => {
        setEdit(prevState => !prevState);
    }

    return (
        <div className={minimize ? 'min-menu' : 'menu-categories'}>
            <div className="cat-title">
                {minimize ? null : <h3>Categories</h3>}
                {
                    minimize ? null :
                        <div className="edit-button">
                            <Button variant="info" size="sm" onClick={toggleEdit}
                            >Edit</Button>
                        </div>
                }
                <div className="minimize-button">
                    <Button variant="outline-light" type="button" size="sm"
                        value={minimize ? "<" : ">"} onClick={toggleMenu}>
                        {sign}
                    </Button>
                </div>
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
                                    <div className={edit ? "category-edit" : "category"}>
                                        {
                                            edit ? <div className="cat-delete-button">
                                                <Button variant="outline-danger" size="sm"
                                                    type="button"
                                                >-</Button>
                                            </div> : null
                                        }

                                        <li onClick={() => {
                                            dispatch(selectCategory(category));
                                            dispatch(backToCategory());
                                        }}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</li>
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
                show ? <ModalCategory show={show}
                    toggleModal={toggleModal}
                    addCategoryClient={addCategoryClient} /> : null
            }



        </div>
    );
}

export default CategoriesMenu;