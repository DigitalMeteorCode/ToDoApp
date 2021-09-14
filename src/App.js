import logo from './logolist.png';
import './App.css';
import MyButton from './Components/MyButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Application de gestion de listes.</p>
        <MyButton 
          onClick={()=>{alert("Cliqué")}}
          >Ajouter une liste 
          <AddCircleIcon fontSize="small"/>
        </MyButton>
      </header>
    </div>
  );
}

export default App;
