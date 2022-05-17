import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderTable from "../components/Order/OrderTable";
import {
    fetchOrders
} from "../redux/actions/OrderHandlingAction";
import "../util/splitter.css";

function OrderHandling() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const globalState = useSelector((state) => state);
    useEffect(() => {
        dispatch(fetchOrders());
    }, []);
    console.log(globalState)
    var orders = globalState.OrderSlice.orders
        ? globalState.OrderSlice.orders
        : null;
    return (
        <div className={classes.pageContainer}>

            <OrderTable data={orders} />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        width: "100%",
    },

}));

export default OrderHandling;
