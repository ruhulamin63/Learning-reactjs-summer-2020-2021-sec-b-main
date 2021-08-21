import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';


const Popup = (props) => {
    const {confirmDialog, setConfirmDialog}=props;
    return (
        <div className='popup'>
       <Dialog open={confirmDialog.isOpen} >
           <DialogTitle>

           </DialogTitle>
            <DialogContent>
                <Typography variant='h5' style={{color:"red"}}>
                    {confirmDialog.title}
                    </Typography>
                    <Typography variant='subtitle2'style={{color:"black"}}>
                    {confirmDialog.subTitle}
                    </Typography>

            </DialogContent>
            <DialogActions>
                <button className="btn-danger btn-primary  btn-lg btn-block mb-2"
                onClick={()=>setConfirmDialog({isOpen:false})}
                >Close</button>

            </DialogActions>
       </Dialog>
       </div>
    )
}
export default Popup;
