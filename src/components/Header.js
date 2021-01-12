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
                   
                    <i class="fas fa-cubes"></i>
                    <i class="fas fa-cubes"></i>
                    <i class="fas fa-cubes"></i>
                    <i class="fas fa-cubes"></i>
                </div>
                <div className="header-item form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search YouTube"
                                name="search"
                                value={videoSearch.value} onChange={handleChange} />

                        </Form.Group>
                        <div className="button-div">
                        <Button variant="outline-light" type="button"
                            value="Search" onClick={search}>
                            Search
                </Button>
                        </div>
                        
                    </Form>

                </div>
                <div className="header-item profile">
                <i class="far fa-id-card"></i>
                </div>
               
            </div>

        </header>
    )
}

export default Header;