import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Colors } from "../../util/AppConstants";

function createData(productId, productName) {
    return { productId, productName };
}
const useStyles = makeStyles((theme) => ({
    pageContainer: {
        width: '100%',
        minHeight: '91vh',
        height:'91vh',
        overflow: 'auto',
        backgroundColor: 'white',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px'

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
        backgroundColor: 'white',
        color: theme.palette.common.black,
        height: 53

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function ProductSideList({ data, selectProduct }) {
    const classes = useStyles();
    const [state, setState] = useState("");
    const toggleActive = (product) => {
        selectProduct(product)
        setState({
            rowIsActive: product.productId,
        });
    };

    return (
        <div className={classes.pageContainer} >
            <Table className={classes.table} aria-label="simple table">
            <TableHead style={{borderBottom: '9px double #d3d3d3'}}>
                    <TableRow>
                        <StyledTableCell className={classes.tableColumn}>Product Id</StyledTableCell>
                        <StyledTableCell className={classes.tableColumn} align="right">Product Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            className={state.rowIsActive === row.productId ? classes.rowIsActive : classes.tableRow}
                            key={row.productId}
                            onClick={() => toggleActive(row)}
                        >
                            <TableCell className={classes.tableColumn} component="th" scope="row">
                                {row.productId}
                            </TableCell>
                            <TableCell className={classes.tableColumn} align="right">{row.productName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ProductSideList