
import './App.css';
import FormComp from './components/FormComp';

import { toggle } from './actions';



function App() {

  return (
    <div>
      <div className="app-title-container">
        <div className="app-title-div">
          <div>
            <i class="fas fa-cubes"></i>
            <i class="fas fa-cubes"></i>
            <i class="fas fa-cubes"></i>
            <i class="fas fa-cubes"></i>
          </div>
          <div>
            <h1>YouFavs</h1>
          </div>

        </div>

      </div>
      <div className="login-form-container">
        <div className="login-form-div">
          <h3>Signin with Google</h3>
          <FormComp />
        </div>

      </div>
    </div>
  )
}

export default App;
