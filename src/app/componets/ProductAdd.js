import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  InputAdornment,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { AppContext } from "@/context/app.context";

export default function ProductAdd({ openModal, setOpenModal }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { ProductsList, setProductsList, CategoryList, setCategoryList } =
    useContext(AppContext);
  const [ProductName, setProductName] = useState("");
  const [ProductUrl, setProductUrl] = useState("");
  const [CategorySelected, setCategorySelected] = useState(null);
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductCount, setProductCount] = useState("");
  const [Stock, setStock] = useState(false);
  const [Open, setOpen] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");

  const SubmitAPI = async () => {
    const validations = [
      {
        condition: !ProductName.trim(),
        message: "Please fill the Product Name",
      },
      {
        condition: CategorySelected == null,
        message: "Please select the Product Category",
      },
      {
        condition: ProductPrice == "",
        message: "Please fill the Product Price",
      },
      {
        condition: ProductCount == "",
        message: "Please fill the stock Details",
      },
    ];
    const invalid = validations.find(({ condition }) => condition);
    if (invalid) {
      setAlertMessage(invalid.message);
      setOpen(true);
      return;
    }
    const withoutDupes = ProductsList.filter(
      (item) => item.productName == ProductName
    );
    if (withoutDupes.length) {
      setAlertMessage("Product with same name exists");
      setOpen(true);
      return;
    }
    let value = {
      id: Math.random(),
      imageUrl: ProductUrl != "" ? ProductUrl : null,
      productName: ProductName ?? "",
      category: CategorySelected.category,
      price: "$" + ProductPrice,
      availableUnits: Stock ? ProductCount : 0,
    };

    setProductsList((prev) => {
      const base = Array.isArray(prev) ? prev : [];
      const withoutDupes = base.filter(
        (item) => item.productName !== value.productName
      );
      return [value, ...withoutDupes];
    });
    setAlertMessage("Product Added Successfully");
    setOpen(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{ p: 2 }}
      >
        <DialogTitle
          className="flex justify-between text-sm border-b border-gray-200  p-1 m-0 items-center"
          sx={{ px: 2, py: 1, m: 0 }}
        >
          Add Product
          <CancelIcon
            color="primary"
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </DialogTitle>
        <DialogContent sx={{ m: 0, px: 3, py: 1 }}>
          <div className="grid grid-cols-12 mt-1 ">
            <div className="col-span-12  md:col-span-6 p-2 ">
              <TextField
                size="small"
                label="Product Image Url"
                variant="outlined"
                className="w-full"
                value={ProductUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />
            </div>
            <div className="col-span-12 md:col-span-6 p-2 ">
              <TextField
                size="small"
                label="Product Name"
                variant="outlined"
                className="w-full"
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="col-span-12 md:col-span-6 p-2">
              <Autocomplete
                fullWidth
                options={CategoryList}
                value={CategorySelected}
                onChange={(e, newValue) => setCategorySelected(newValue)}
                getOptionLabel={(e) => e.category}
                getOptionKey={(e) => e.id}
                renderInput={(params) => (
                  <TextField {...params} label="Select Category" />
                )}
                size="small"
              />
            </div>
            <div className="col-span-12 md:col-span-6 p-2">
              <TextField
                size="small"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  },
                }}
                label="Enter the Price"
                variant="outlined"
                className="w-full"
                value={ProductPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="col-span-12 md:col-span-6 p-2">
              <TextField
                size="small"
                type="number"
                label="Enter the Stock count"
                variant="outlined"
                className="w-full"
                value={ProductCount}
                onChange={(e) => setProductCount(e.target.value)}
              />
            </div>
            <div className="col-span-12 md:col-span-6 px-2 ">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Stock}
                    onChange={(e) => setStock(e.target.checked)}
                  />
                }
                label="In Stock"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            px: 0,
          }}
          className="border-t border-gray-200"
        >
          <Button
            onClick={() => SubmitAPI()}
            color="primary"
            variant="contained"
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={Open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={AlertMessage}
      />
      ;
    </>
  );
}
