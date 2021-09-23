import { useEffect, useState } from 'react';
import logo from './logolist.png';
import './App.css';
import MyButton from './components/MyButton';
import { PlusCircleOutlined } from '@ant-design/icons';
import ListModal from './components/ListModal';
import Fire from './Fire';
import { Spin } from 'antd';
import ListCard from './components/ListCard'


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const firebase = new Fire ((error) => {
      if (error) {
        setError(error);
      } else {
        firebase.getLists(lists => {
          setLists(lists);
          setLoading(false);
        });
      }
      return function unsubscribe() {
        firebase.detach();
      }
    });
  }, []);

  console.log(lists, loading);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon application de gestion de listes
        </p>
        {error && (<p>Erreur : {error.message}</p>)}
        {loading ? <Spin /> : (
          <div className="d-flex flex-wrap">
            {lists.map(list => (
              <>
              <p key={list.id} style={{color: list.color}}>{list.name}</p>
              <ListCard list={list} setIsModalVisible={setIsModalVisible} setSelectedList={setSelectedList} />
              </>
            ))}
          </div>
        )}
        <MyButton
          icon={<PlusCircleOutlined />}
          onClick={() => setIsModalVisible(true)}
          >
          Ajouter une liste
          </MyButton>
          <ListModal list={selectedList} modalTitle={selectedList ? "Modifier la liste" : "Ajout de liste"} isVisible={isModalVisible} handleCancel={() => setIsModalVisible(false)} />
      </header>
    </div>
  );
}