import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CategoriesMenu from '../components/CategoriesMenu';
import Header from '../components/Header';
import VideoContainer from '../components/VideoContainer';
import './Favorites.css';
import { API_ROOT, HEADERS } from '../constants';
import { getProfileFetch } from '../actions';



function Favorites() {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProfileFetch());
    getProfile();
    getCategories();
  }, []);

  const getProfile = () => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${API_ROOT}/auth/profile`, {
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
            localStorage.removeItem("token");
          } else {
            setUser({ ...data });
          }
        })
    }
  };

  const addCategoryClient = (category) => {
    category.videos = [];
    setCategories(prevState => [...prevState, category]);
  }

  const getCategories = () => {
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
            localStorage.removeItem("token");
          } else {
            let allVideos = [];
            data.map(category => {
              allVideos = [...allVideos, ...category.videos]
            });
            setCategories([{name: 'all', videos: allVideos}, ...data]);
          }
        })
    }
  }

  return (
    <>
      <Header user={user} />
      <div className="favs-page-container">
        <div>
          <CategoriesMenu user={user} categories={categories}
            addCategoryClient={addCategoryClient} />
        </div>
        <div>
          <VideoContainer categories={categories}/>
        </div>


      </div>
    </>
  );
}

export default Favorites;