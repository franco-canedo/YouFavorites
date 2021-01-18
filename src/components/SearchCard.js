import './SearchCard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { backToCategory } from '../actions';
import ModalCategory from './ModalCategory';
import {API_ROOT} from '../constants';

const SearchCard = ({ video }) => {
    const [categories, setCategories] = useState([]);

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
    }, []);


    const addVideoToCategory = (categoryId, name) => {
        const token = localStorage.token;
        if (token) {
            return fetch(`${API_ROOT}/videos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
                body: JSON.stringify({
                    title: video.snippet.title,
                    source: video.id.videoId,
                    category_id: categoryId,
                }),
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // An error will occur if the token is invalid.
                        // If this happens, you may want to remove the invalid token.
                        console.log(data.message);
                    } else {
                        console.log('added video', data);
                        alert(`video added to ${name}`);
                    }
                }).catch(error => console.log(error));
        }
    }
    return (
        <>
            <div className="search-card">

                <div className="iframe-container-search">
                    <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"></iframe>
                </div>
                <div className='title-video'>
                    <h5>{video.snippet.title}</h5>
                    <h6>Channel: {video.snippet.channelTitle}</h6>
                    <p>{video.snippet.description}</p>

                   
                </div>
                <DropdownButton id="dropdown-button-drop-up" 
                    title="Add" drop="up">
                        {
                            categories.map(category => {
                                return  <Dropdown.Item onClick={() => addVideoToCategory(category.id, category.name)}
                                href="#/action-1">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</Dropdown.Item>
                            })
                        }
                    </DropdownButton>
            </div>

        </>
    )
}

export default SearchCard;