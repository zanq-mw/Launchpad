import React, { useState } from 'react';
import Button from '@mui/material/Button';

export function EditButton (){

  const [isClicked, setisClicked] = useState(false);

    return (

        <div >
          <Button>
          <img
            src={require("../images/accountEdit.png")}
            height={"35px"}
            alt="edit"
          ></img>
          </Button>
          
        </div>
      );
}