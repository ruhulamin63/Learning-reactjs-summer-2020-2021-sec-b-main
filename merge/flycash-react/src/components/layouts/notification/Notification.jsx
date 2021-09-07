import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';


const Notification = (props) =>{

    const {notify,setNotify}=props;
    const handleClose =(event,reason)=>{
        setNotify({
            ...notify,
            isOpen:false
        })
        
    }
    //const classes = Styles()
    return (
       <Snackbar
       className= "notify"
       open={notify.isOpen}
       autoHideDuration={3000}
       onClose={handleClose}
       anchorOrigin={{vertical:'top', horizontal:'right'}}
       >
           <Alert className={notify.type}>
            {notify.messages}
           </Alert>
       </Snackbar>
    )
}
export default Notification;