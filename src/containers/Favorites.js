import { useSelector, useDispatch } from 'react-redux';
import CategoriesMenu from '../components/CategoriesMenu';
import Header from '../components/Header';
import VideoContainer from '../components/VideoContainer';
import './Favorites.css';


function Favorites() {

  const dispatch = useDispatch();

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