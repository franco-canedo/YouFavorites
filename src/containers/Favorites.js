import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import CategoriesMenu from '../components/CategoriesMenu';
import Header from '../components/Header';
import VideoContainer from '../components/VideoContainer';
import './Favorites.css';
import { getProfileFetch } from '../actions';


function Favorites() {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProfileFetch());
  }, []);

  return (
    <>
      <Header />
      <div className="favs-page-container">
        <div>
        <CategoriesMenu />
        </div>
        <div>
        <VideoContainer />
        </div>
        
        
      </div>
    </>
  );
}

export default Favorites;