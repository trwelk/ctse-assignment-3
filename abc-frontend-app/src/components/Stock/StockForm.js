import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';

export default function StockForm({setData ,  data}) {
    const handleChange = (e) => {
        setData({...data,[e.target.id]:e.target.value})
    }
    const handleDateChange = (value) => {
      setData({...data,recievedDate:value})
    }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stockId"
            name="stockId"
            label="Stock Id"
            fullWidth
            onChange={handleChange}
            value={data.stockId}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="supplierId"
            name="supplierId"
            label="Supplier"
            value={data.supplierId}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stockLocation"
            name="stockLocation"
            label="Location"
            value={data.stockLocation}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="recievedQty"
            name="recievedQty"
            label="Quantity"
            fullWidth
            onChange={handleChange}
            value={data.recievedQty}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="purchasePrice"
            name="purchasePrice"
            label="Purchase Price"
            value={data.purchasePrice}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

        <DesktopDatePicker
          label="Recieved Date"
          id="recievedDate"
          name="recievedDate"
          inputFormat="MM/dd/yyyy"
          value={data.recievedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </Grid>
        <div style={{paddingTop:'60px',height:'50px'}}>
        </div>
        <Divider  />
        <Divider  />
        <Divider  />
        <Divider  />
      </Grid>
    </React.Fragment>
  );
}