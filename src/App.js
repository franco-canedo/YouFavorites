
import './App.css';
import FormComp from './components/FormComp';

import { toggle } from './actions';



function App() {

  return (
    <div>
      <div className="app-title-container">
        <div className="app-title-div">
        <h1>YouTube Favorites</h1>
        </div>
        
      </div>
      <div className="login-form-container">
        <div className="login-form-div">
        <FormComp/>
        </div>

      </div>
    </div>
  )
}

export default App;
