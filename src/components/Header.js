import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import youtube from '../apis/youtube';
import {submitSearch} from '../actions';

const KEY = 'AIzaSyCfStKLs4sb-QHNsMhhI33Q-MLNrYC3b6Q';

const Header = () => {
    const [videoSearch, setVideoSearch] = useState('');
    const [videos, setVideos] =useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setVideoSearch(e.target.value)
    }


    const search = async (termSearch) => {
        console.log('search');
        const response = await youtube.get('/search', {
            params: {
                q: termSearch
            }
        })
        console.log(response);
        dispatch(submitSearch());
        setVideos(response.data.items);
    }
    return (
       
        <header>
            <div className="header">
               
                <div className="header-item logo">
                    <div>
                        <i class="fas fa-cubes"></i>
                    </div>
                    <div>
                        <h4>YouFavs</h4>
                    </div>


                </div>
                <div className="header-item form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search YouTube"
                                name="search"
                                value={videoSearch} onChange={handleChange} />

                        </Form.Group>
                        <div className="button-div">
                            <Button variant="outline-light" type="button"
                                value="Search" onClick={() => search(videoSearch)}>
                                Search
                </Button>
                        </div>

                    </Form>

                </div>
                <div className="header-item profile">
                    <NavDropdown title="Franco" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Image height={30} src={process.env.PUBLIC_URL + '/logo192.png'} roundedCircle />
                    {/* <i class="far fa-id-card"></i> */}
                </div>
               
            </div>

        </header>
        
    )
}

export default Header;