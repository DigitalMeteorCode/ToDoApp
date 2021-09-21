import React, { useState } from "react";
import { Button, Modal } from 'antd';
import ListForm from "./ListForm";

export default function ListModal(props) {
    const [name,setName] = useState("");
    const [color, setColor] = useState("#3B97FF");

    function handleSubmit() {
        const list = {
            "name": name,
            "color": color,
            "tasks": []
        }
        console.log(list);
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
        <ListForm name={name} color={color} setName={setName} setColor={setColor} />
      </Modal>
    );
}