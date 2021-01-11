import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API = 'http://localhost:3000';

const FormComp = () => {
    const [form, setForm] = useState({
        name: 'franco',
        username: '',
        email: '',
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API}/users`)
            .then(resp => {
                console.log(resp.data);
                setUsers(resp.data);
            }).catch(error => console.log(error));
    }, []);



    const dispatch = useDispatch();

    const handleChange = (event) => {
        setForm({
            ...form, [event.target.name]: [event.target.value],
        });
    }


    const createNewUser = async e => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', form.name);
        fd.append('username', form.username);
        fd.append('email', form.email);

        axios.post(`${API}/new`, fd)
            .then(res => {
                console.log(res);

            }).catch(error => console.log(error));
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" 
                    name="name"
                    value={form.value} onChange={handleChange}/>
                   
                </Form.Group>
                <Button variant="primary" type="submit" 
                value="submit" onSubmit={createNewUser}>
                    Submit
  </Button>
            </Form>
            <div className="google-button">
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
           
        </>

    );
}

export default FormComp;