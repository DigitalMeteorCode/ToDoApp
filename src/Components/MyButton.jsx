import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function MyButton(props) {
    return (
        <Button 
            variant="outlined" 
            color="secondary" 
            size="large" 
            onClick={props.onClick}
            >
              {props.children}
            
        </Button>
    );
}

export default MyButton;