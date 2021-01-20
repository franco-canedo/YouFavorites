import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import youtube from '../apis/youtube';
import { submitSearch } from '../actions';
import { videoResults } from '../actions';
import { logout } from '../actions';
import { setRedirectLogout } from '../actions';
import { Redirect } from "react-router-dom";


const Header = ({ user }) => {
    const [videoSearch, setVideoSearch] = useState('');
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();
    // const logout = useSelector(state => state.logout);
    const [logout, setLogout] = useState(false);

    const handleChange = (e) => {
        setVideoSearch(e.target.value)
    }

    const search = async (termSearch) => {
        const response = await youtube.get('/search', {
            params: {
                q: termSearch
            }
        });
        console.log(response.data.items);
        dispatch(submitSearch());
        dispatch(videoResults(response.data.items));
        setVideos(response.data.items);
    }

    const logoutAction = (e) => {
        e.preventDefault();
        // dispatch(logout());
        console.log('logout')
        setLogout(true);
        dispatch(setRedirectLogout());
    }

    const logoutFunc = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("google_token");
        localStorage.removeItem("uid");
        console.log('return redirect?')
        return <Redirect to="/"/>   
      }

    return (

        <header>
            {
                logout ? [logoutFunc()] : null
            }
            {

            }
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
                    <NavDropdown title={user.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Image height={30} src={user.image_url} roundedCircle />
                    {/* <i class="far fa-id-card"></i> */}
                    <Button variant="dark" size="sm" type="button"
                        onClick={logoutAction}>Logout</Button>
                </div>

            </div>

        </header>

    )
}

export default Header;