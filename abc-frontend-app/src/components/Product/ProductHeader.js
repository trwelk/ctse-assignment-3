import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,


  Paper,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

function ProductHeader({ data, handleDelete, handleDialogOpen }) {
  const classes = useStyles();
  var productSelected = useSelector((state) => state).productSlice.productSelected;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h4"
          gutterBottom
          component="div"
        >
          Product Handling
        </Typography>
        <div className={classes.toolBar}>
          {productSelected ? (
            <Button
              className={classes.iconButton}
              style={{
                color: "#0087c1",
                marginBottom: "17px",
                marginRight: "7px",
              }}
              variant="outlined"
              onClick={handleDelete}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          ) : null}
          {productSelected ? (
            <Button
              className={classes.iconButton}
              onClick={() => handleDialogOpen("MODIFY")}
              style={{
                color: "#0087c1",
                marginBottom: "17px",
                marginRight: "7px",
              }}
              variant="outlined"
              startIcon={<BorderColorIcon />}
            >
              Update
            </Button>
          ) : null}
          <Button
            className={classes.iconButton}
            onClick={() => handleDialogOpen("NEW")}
            style={{ color: "#0087c1", marginBottom: "17px" }}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            New
          </Button>
        </div>
      </div>
      <div className={classes.headerDetailContainer}>
        <Paper className={classes.headerPaper} elevation={3}>
          <div className={classes.headerRow}>
            <TextField
              className={classes.headerTextField}
              id="standard-read-only-input"
              label="Product Id"
              value={data? data.productId : ""}
              variant="standard"
              InputProps={{ readOnly: true, disableUnderline: true }}
            />
            <TextField
              className={classes.headerTextField}
              id="standard-read-only-input"
              label="Product Name"
              value={data? data.productName : ""}
              variant="standard"
              InputProps={{ readOnly: true, disableUnderline: true }}
            />
            <TextField
              className={classes.headerTextField}
              id="standard-read-only-input"
              label="Product Type"
              value={data? data.productType : ""}
              variant="standard"
              InputProps={{ readOnly: true, disableUnderline: true }}
            />
          </div>
          <div className={classes.headerRow}>
            <TextField
              className={classes.headerTextField}
              id="standard-read-only-input"
              label="Description"
              value={data? data.description : ""}
              variant="standard"
              InputProps={{ readOnly: true, disableUnderline: true }}
            />
            <div className={classes.headerTextField}></div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    width: "100%",
    height: "auto",
    overflowX: "auto",
  },
  headerTextField: {
    width: "30%",
  },
  headerRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerPaper: {
    width: "100%",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  titleContainer: {
    width: "100%",
    height: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toolBar: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "end",
  },
  iconButton: {
    height: "60%",
  },
  title: {
    marginLeft: "0px",
    textAlign: "left",
  },
  headerDetailContainer: {
    width: "100%",
  },
}));

export default ProductHeader;
