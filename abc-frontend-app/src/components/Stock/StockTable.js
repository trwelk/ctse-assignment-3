import MaterialTable from "@material-table/core";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStock, deleteStock, updateStock } from "../../redux/actions/ProductActions";
import StockDialog from "./StockDialog";


function StockTable({ data }) {
    const classes = useStyles();
    const stockJson = {
        stockId: " ",
        product: " ",
        supplierId: " ",
        outGoingQty: " ",
        stockLocation: " ",
        recievedQty: " ",
        purchasePrice: " ",
        deflectionFromIdealHarvest: " ",
        bestBeforeDate: " ",
        daysSinceHarvested: " ",
        recievedDate: new Date()
    }
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState({ stockJson });

    const [dialogMode, setDialogMode] = useState(false);
    const handleDialogOpen = (mode) => {
        setOpen(true);
        setDialogMode(mode);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleInsertUpdate = (stock) => {
        dialogMode == "NEW"
            ? dispatch(createStock({ ...stock, product: data._id, recievedDate: new Date(stock.recievedDate)})).unwrap()
                .then((originalPromiseResult) => {
                    handleDialogClose()

                    // handle result here
                })
                .catch((rejectedValueOrSerializedError) => {
                    // handle error here
                })
            : dispatch(updateStock({...stock, recievedDate: new Date(stock.recievedDate)})).unwrap()
                .then((originalPromiseResult) => {
                    handleDialogClose()
                    // handle result here
                })
                .catch((rejectedValueOrSerializedError) => {
                    // handle error here
                });
    };

    const [columns, setColumns] = useState([
        { field: "stockId", title: "id" },
        { field: "supplierId", title: "Supplier" },
        { field: "recievedQty", title: "Recieved Qty", type: "numeric" },
        { field: "outGoingQty", title: "Taken Out", type: "numeric" },
        { field: "stockLocation", title: "location" },
        { field: "purchasePrice", title: "Purchase Price", type: "numeric" }
    ]);
    var retObject = data ? (
        <MaterialTable
            title="Stocks"
            columns={columns}
            data={data.stocks ? data.stocks : []}
            editable={{
                onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            dispatch(deleteStock(oldData));

                            resolve();
                        }, 1000);
                    }),
            }}
            actions={[
                {
                    icon: 'add',
                    tooltip: 'Add Stock',
                    isFreeAction: true,
                    onClick: (event) => {
                        setRowData(stockJson);
                        handleDialogOpen("NEW");
                    }
                },
                {
                    icon: 'edit',
                    tooltip: 'edit Stock',
                    onClick: (event, rowData) => {
                        console.log(rowData)
                        setRowData({ ...rowData, recievedDate: new Date(rowData.recievedDate) });
                        handleDialogOpen("MODIFY");
                    }
                }
            ]}
        />
    ) : null;

    return (
        <Paper className={classes.pageContainer}>
            {retObject}
            <StockDialog
                open={open}
                handleSubmit={handleInsertUpdate}
                handleDialogClose={handleDialogClose}
                data={rowData} />
        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        marginTop: "10px",
    },
}));

export default StockTable;