import { useState } from 'react';
import logo from './logolist.png';
import './App.css';
import MyButton from './components/MyButton';
import { PlusCircleOutlined } from '@ant-design/icons';
import ListModal from './components/ListModal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(isModalVisible);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon application de gestion de listes
        </p>
        <MyButton
          icon={<PlusCircleOutlined />}
          onClick={() => setIsModalVisible(true)}
          >
          Ajouter une liste
          </MyButton>
          <ListModal modalTitle="Ajout de liste" isVisible={isModalVisible} handleCancel={() => setIsModalVisible(false)} />
      </header>
    </div>
  );
}