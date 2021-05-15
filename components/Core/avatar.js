import React from 'react';
import { Avatar } from '@material-ui/core';

export const avatarStyle = (index) => {
  if (index % 5 === 0) {
    return {
      backgroundColor: '#FCF0EF',
      width: '25px',
      fontSize:"15px",
      textTransform:"capitalize",
      height: '25px',
      margin:"0px 3px 0px 3px",
      color: '#E66E68',
      borderRadius: '8px',
    };
  } else if (index % 3 === 0) {
    return {
      backgroundColor: '#FFFABB',
      width: '25px',
      fontSize:"15px",
      textTransform:"capitalize",
      height: '25px',
      margin:"0px 3px 0px 3px",
      color: '#FFD502',
      borderRadius: '8px',
    };
  } else if (index % 2 === 0) {
    return {
      backgroundColor: '#CAFFE6',
      width: '25px',
      fontSize:"15px",
      textTransform:"capitalize",
      height: '25px',
      margin:"0px 3px 0px 3px",
      color: '#34F89C',
      borderRadius: '8px',
    };
  } else if (index % 1 === 0) {
    return {
      backgroundColor: '#CAF0FF',
      width: '25px',
      fontSize:"15px",
      margin:"0px 3px 0px 3px",
      textTransform:"capitalize",
      height: '25px',
      color: '#3BC8FF',
      borderRadius: '8px',
    };
  }
};



const AvatarContainer = ({ name }) => {
  if(name){
    return <>
            <Avatar style={avatarStyle(name.length)} variant="square">
              {name.slice(0,2)}
            </Avatar>
           </>
  }else{
    return <>
          </>
  }

}

export default AvatarContainer;
