import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useEffect, useState } from "react";
import ProductForm from './ProductForm';

export default function ProductDialog({open , handleSubmit,  handleDialogClose, data}) {
    const [product, setProduct] = useState({
        productId: "",
        productName: "",
        productType: "",
        description: "",
        unitOfMeasurement: "",
      });
    
    useEffect(() => {
        setProduct(data);
    }, [data]);



    return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleDialogClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
        <ProductForm data={product} setData={setProduct}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit(product)}>Submit</Button>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
