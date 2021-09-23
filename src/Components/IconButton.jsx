import { Button, Tooltip } from 'antd';
import React from 'react';


export default function IconButton(props) {
    return (
        <>
            <Tooltip title={props.tooltip}>
                <Button type={props.type} onClick={props.onClick}>
                    {props.icon}
                </Button>
            </Tooltip>
        </>
    )
}