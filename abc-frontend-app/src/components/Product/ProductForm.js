import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ProductForm({setData ,  data}) {
    console.log(data,'twewewe')

    const handleChange = (e) => {
        setData({...data,[e.target.id]:e.target.value})
    }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="productId"
            name="productId"
            label="Product Id"
            value={data.productId}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="productName"
            name="productName"
            label="Product Name"
            fullWidth
            onChange={handleChange}
            value={data.productName}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            onChange={handleChange}
            value={data.description}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="productType"
            name="productType"
            label="Product Type"
            fullWidth
            onChange={handleChange}
            value={data.productType}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stockLocation"
            name="stockLocation"
            label="Storage location"
            fullWidth
            onChange={handleChange}
            value={data.unitOfMeasurement}
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <div style={{paddingTop:'60px',height:'50px'}}>

        </div>
      </Grid>
    </React.Fragment>
  );
}