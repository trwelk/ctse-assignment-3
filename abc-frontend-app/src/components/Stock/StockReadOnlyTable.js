import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/actions/ProductActions";
import { Colors } from "../../util/AppConstants";

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        width: '100%',
        height: 'auto',
        overflowX: 'auto',
        backgroundColor: '#f9f9f9'

    },
    tableColumn: {
        padding: '5px !important',
        textAlign: 'center !important'
    },
    table: {
        width: '100%'
    },
    tableRow: {
        "&:hover": {
            background: Colors.hoverColor
        },
        height: 53
    },
    rowIsActive: {
        height: 53
        ,
        background: Colors.hoverColor
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: Colors.primary,
        color: theme.palette.common.white,
        height: 53

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function StockReadOnlyTable({  orderItemDetails, selectStock }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const [state, setState] = useState("");
    const toggleActive = (stock) => {
        selectStock(stock)
        setState({
            rowIsActive: stock.stockId,
        });
    };
    var tableData = globalState.productSlice.Products
        ? globalState.productSlice.Products.find(product => product._id == orderItemDetails.product._id)?.stocks
        : [];
    tableData = tableData ? tableData.map(data => ({ ...data, availableQty: data.recievedQty - data.outGoingQty, predictedExpiryDate:new Date(data.predictedExpiryDate) })) : []
    tableData?.sort(function(a,b){return a.predictedExpiryDate.getTime() - b.predictedExpiryDate.getTime()});

    useEffect(() => {
        dispatch(fetchSingleProduct(orderItemDetails.product._id));
    }, [orderItemDetails]);
    return (
        <div className={classes.pageContainer} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.tableColumn}>stock Id</StyledTableCell>
                        <StyledTableCell className={classes.tableColumn} align="right">Available Qty</StyledTableCell>
                        <StyledTableCell className={classes.tableColumn} align="right">purchase Price</StyledTableCell>
                        <StyledTableCell className={classes.tableColumn} align="right">predictedExpiryDate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            className={state.rowIsActive === row.stockId ? classes.rowIsActive : classes.tableRow}
                            key={row.stockId}
                            onClick={() => toggleActive(row)}

                        >
                            <TableCell className={classes.tableColumn} component="th" scope="row">
                                {row.stockId}
                            </TableCell>
                            <TableCell className={classes.tableColumn} align="right">{row.availableQty}</TableCell>
                            <TableCell className={classes.tableColumn} align="right">{row.purchasePrice}</TableCell>
                            <TableCell className={classes.tableColumn} align="right">{row.predictedExpiryDate.toISOString().split('T')[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default StockReadOnlyTable