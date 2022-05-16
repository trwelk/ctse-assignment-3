import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import div from "react-splitter-layout";
import ProductDialog from "../components/Product/ProductDialog";
import ProductHeader from "../components/Product/ProductHeader";
import ProductSideList from "../components/Product/ProductSideList";
import StockTable from "../components/Stock/StockTable";
import {
  createProduct, deleteProduct,
  fetchProducts,


  onProductSelect, updateProduct
} from "../redux/actions/ProductActions";

function StockHandling() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const globalState = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    productType: "",
    description: "",
    stockLocation: "",
  });
  var Products = globalState.productSlice.Products
    ? globalState.productSlice.Products
    : null;
  console.log(Products)
  var selectedProduct = Products ? Products.find(product => product.selected == true) : product

  const [open, setOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState(false);

  const handleDialogOpen = (mode) => {
    setDialogMode(mode);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const selectProduct = (product) => {
    dispatch(onProductSelect(product._id));
  };

  const handleInsertUpdate = (product) => {
    dialogMode == "NEW"
      ? dispatch(createProduct(product)).unwrap()
      .then((originalPromiseResult) => {
        handleDialogClose()
        // handle result here
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
      })
      : dispatch(updateProduct(product)).unwrap()
      .then((originalPromiseResult) => {
        handleDialogClose()
        // handle result here
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
      });
  };

  const handleDelete = () => {
    dispatch(deleteProduct(selectedProduct));
  };
  console.log('121212',product)
  return (
    <div className={classes.pageContainer} >
            <div className={classes.masterContainer}> 

      <ProductSideList data={Products} selectProduct={selectProduct} />
      </div>
      <div className={classes.divider} ></div>

      <div className={classes.detailContainer}>
        <ProductHeader
          data={Products.find(prod => prod.selected) ? Products.find(prod => prod.selected) : null }
          handleDelete={handleDelete}
          handleDialogOpen={handleDialogOpen}
        />
        <StockTable data={selectedProduct ? selectedProduct : null} />
        <ProductDialog
          open={open}
          handleSubmit={handleInsertUpdate}
          handleDialogClose={handleDialogClose}
          data={dialogMode == "NEW" ? product : selectedProduct }
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height:'91vh',
    background:'#7080902b'
  },
  masterContainer: {
    width: "20%",
  },
  detailContainer: {
    width: "80%",
    padding: "10px",
    overflowY:'auto'
  },
  divider: {
    height:'100%',
    width: '10px'
  }
}));

export default StockHandling;
