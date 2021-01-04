import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { toggle } from './actions';

const API = 'http://localhost:3000';

function App() {

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

  return (
    <>

      <form>
        <label>
          Name:
      <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Username:
      <input type="text" name="username" value={form.username} onChange={handleChange} />
        </label>
        <label>
          Email:
      <input type="text" name="email" value={form.email} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={createNewUser} />
      </form>
      {users.map(user => {
        return <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      })}
      {/* {renderUsers()} */}
    </>

  );
}

export default App;
