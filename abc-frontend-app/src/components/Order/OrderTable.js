import MaterialTable from "@material-table/core";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder, deleteOrder, updateOrder } from "../../redux/actions/OrderHandlingAction";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#1976d2',
        },
    },

});

function OrderTable({ data }) {
    const classes = useStyles();
    const dispatch = useDispatch();


    const [columns, setColumns] = useState([
        { field: "orderId", title: "orderId" },
        { field: "customerId", title: "customerId", type: "numeric" },
        { field: "total", title: "total", type: "numeric" },
    ]);

    var retObject = (
        <ThemeProvider theme={theme}>

            <MaterialTable
                title="Storage Orders"
                columns={columns}
                data={data ? data : []}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                dispatch(createOrder(newData));
                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {

                                dispatch(updateOrder(newData));
                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                dispatch(deleteOrder(oldData));

                                resolve();
                            }, 1000);
                        }),
                }}
            />
        </ThemeProvider>
    );

    return <Paper className={classes.pageContainer}>{retObject}</Paper>;
}

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        margin: "10px",
    },
}));

export default OrderTable;
