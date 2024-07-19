import './App.css';
import CreativeEditorSDKComponent from './CreativeEditorSDK';
import SideBar from './Component/Navigation/SideBar';
import NavBar from './Component/Navigation/NavBar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <CreativeEditorSDKComponent/> */}
    </div>
  );
}

export default App;
