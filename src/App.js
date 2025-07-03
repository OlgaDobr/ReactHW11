import logo from './logo.svg';
import './App.css';
import PersonalPage from './Components/PersonalPage';
import Form from './Components/RegistrationForm';
import PhotoUploadForm from './Components/PhotoUploadForm';
import RegistrationForm from './Components/RegistrationForm';
import Cities from './Components/Cities';
import Bands from './Components/Bands';


function App() {
  return (
    <div className="App">
      
      <PersonalPage/>
      <RegistrationForm/>
      <PhotoUploadForm/>
      <Cities/>
      <Bands/>
    </div>
  );
}

export default App;
