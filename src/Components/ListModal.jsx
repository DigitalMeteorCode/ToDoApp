import React, { useState } from "react";
import { Button, Modal } from 'antd';
import ListForm from "./ListForm";
import Fire from "../Fire";

export default function ListModal(props) {
    const [name,setName] = useState("");
    const [color, setColor] = useState("#3B97FF");
    const [error, setError] = useState(null);

    function handleSubmit() {
        const firebase = new Fire((error) => {
            if (error) {
                setError(error);
            } else {
                const list = {
                    "name": name,
                    "color": color,
                    "tasks": []
                }
                firebase.addList(list);
            }
        });
        props.handleCancel();
    }

    return (
        <Modal 
            title={props.modalTitle} 
            visible={props.isVisible} 
            onCancel={props.handleCancel}
            footer={[
                <Button type="primary" shape="round" onClick={handleSubmit}>
                    Créer la liste
                </Button>
            ]}
        >
            {error && <p>Une erreur est survenue</p> }
            <ListForm name={name} color={color} setName={setName} setColor={setColor} />
      </Modal>
    );
}