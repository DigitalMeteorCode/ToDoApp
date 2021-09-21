import React from "react";
import { Button, Tooltip } from 'antd';

export default function MyButton(props) {
  return (
    <Button
        shape="round"
        type="primary"
        size="large"
        onClick={props.onClick}
        icon={props.icon}
      >
        {props.children}
    </Button>
  );
}