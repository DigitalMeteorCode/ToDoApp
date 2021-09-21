import logo from './logolist.png';
import './App.css';
import MyButton from './Components/MyButton';
import { PlusOutlined } from '@ant-design/icons';


export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon application de gestion de listes
        </p>
        <MyButton
          tooltip="Ajouter une liste"
          onClick={() => console.log("Cliqué")}
          icon={<PlusOutlined />}
        >
          Ajouter une liste
        </MyButton>
      </header>
    </div>
  );
}