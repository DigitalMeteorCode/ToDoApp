import React from'react';
import { Card, Checkbox } from 'antd';
import IconButton from './IconButton';
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';


export default function ListCard(props) {
    return (
        <Card 
        title={
            <p style={{color: props.list.color}}>{props.list.name}</p>
        } 
            bordered={false} 
            style={{ width: 300}}
            className="m-3"
        >
            {props.list.tasks.length <= 0 && (
                <p>Aucune tâche pour cette liste</p>
            )}
            {props.list.tasks.map(task =>(
                <div>
                    <Checkbox>
                        <p>{task.title}</p>
                    </Checkbox>
                </div>
            ))}
            <IconButton
                tooltip= "Ajouter une tâche"
                type="link"
                icon={<PlusCircleOutlined className="text-success fs-5" />}
                onClick={() => console.log("Ajout d'une tâche")}
            />
            <div className="d-flex justify-content-between">
                <IconButton
                    tooltip= "Modifier la liste"
                    type="primary"
                    icon={<EditOutlined className="text-success fs-5" />}
                    onClick={() => {
                        props.setIsModalVisivle(true);
                        props.setSelectedList(props.list);
                    }}
                />
                    <IconButton
                    tooltip= "Supprimer la liste"
                    type="danger"
                    icon={<DeleteOutlined className="text-success fs-5" />}
                    onClick={() => console.log("Supprimer la liste")}
                />
            </div>
        </Card>
    );
}