import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const [videoSearch, setVideoSearch] = useState('');

    const handleChange = (e) => {
        setVideoSearch(e.target.value)
    }


    const search = () => {
        console.log('search');
    }
    return (
        <header>
            <div className="header">
                <div className="header-item logo">
                    <h2>YouFavs</h2>
                </div>
                <div className="header-item form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search a video"
                                name="search"
                                value={videoSearch.value} onChange={handleChange} />

                        </Form.Group>
                        <div className="button-div">
                        <Button variant="dark" type="button"
                            value="Search" onClick={search}>
                            Submit
                </Button>
                        </div>
                        
                    </Form>

                </div>
                <div className="header-item profile">
                    <h2>franco</h2>
                </div>
               
            </div>

        </header>
    )
}

export default Header;