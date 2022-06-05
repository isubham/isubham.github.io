import './App.css';
import profilepic from './profilepic.jpg'
import { Menubar } from './menu-bar/menu-bar';
import { Desktop } from './desktop/desktop';
import { AppArea } from './app-area/app-area';
import baesuzy from './baesuzy.jpg';

function App() {
  return (
    <div className="App">
      <Desktop wallpaper={baesuzy}>
        <Menubar brandImagePath={profilepic} />
        <AppArea /> 
      </Desktop>
    </div>
  );
}

export default App;
