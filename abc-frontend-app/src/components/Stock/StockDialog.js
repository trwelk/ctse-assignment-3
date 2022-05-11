import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useEffect, useState } from "react";
import StockForm from './StockForm';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from '@mui/material/LinearProgress';

function LinearIndeterminate() {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress style={{height:'10px'}} />
      </Box>
    );
  }
export default function StockDialog({open , handleSubmit,  handleDialogClose, data}) {
    const [stock, setStock] = useState();
    const globalState = useSelector((state) => state);
    var isLoading = globalState.productSlice.isLoading;
    console.log(globalState.productSlice)
    useEffect(() => {
        setStock(data);
    }, [data]);



    return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleDialogClose}
      >
        <DialogTitle>Stock Details</DialogTitle>
        <DialogContent>
        <StockForm data={stock} setData={setStock}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit(stock)}>Submit</Button>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
        {isLoading == "LOADING" ? <LinearIndeterminate/> : null}

      </Dialog>
    </React.Fragment>
  );
}
