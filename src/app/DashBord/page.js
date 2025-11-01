"use client";
import {
  Autocomplete,
  Button,
  IconButton,
  Switch,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../componets/Header";
import { useContext, useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ProductAdd from "../componets/ProductAdd";
import { AppContext } from "@/context/app.context";
import React from "react";

export default function page() {
  const { ProductsList, setProductsList, CategoryList, setCategoryList } =
    useContext(AppContext);

  console.log(ProductsList, "ProductsList");
  const [openModal, setOpenModal] = useState(false);
  const [Instock, SetInstock] = useState(false);
  const [CategorySelected, setCategorySelected] = useState(null);
  const [ProductListPage, setProductsListPage] = useState(
    ProductsList.length ? ProductsList : []
  );
  const [sortOption, setSortOptions] = useState(false);
  console.log("dh");
  const filterFunction = () => {
    let filtered = ProductsList;
    if (CategorySelected) {
      filtered = filtered.filter(
        (item) => item.category === CategorySelected.category
      );
    }
    if (Instock) {
      filtered = filtered.filter((item) => item.availableUnits > 0);
    }
    filtered = filtered.sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return !sortOption ? priceA - priceB : priceB - priceA;
    });
    setProductsListPage(filtered.length ? [...filtered] : ProductsList);
  };

  useEffect(() => {
    filterFunction();
  }, [CategorySelected, Instock, sortOption, ProductsList]);
  return (
    <div className="h-full bg-white">
      <div>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12">
            <Header Name="Products " />
          </div>
        </div>
        <div className="px-4 ">
          <div className="grid grid-cols-12 gap-4 items-center mt-2 ">
            <div className="col-span-12 md:col-span-6 ">
              <Autocomplete
                disablePortal
                fullWidth
                options={CategoryList}
                value={CategorySelected}
                onChange={(e, newValue) => setCategorySelected(newValue)}
                getOptionLabel={(e) => e.category}
                getOptionKey={(e) => e.id}
                sx={{ width: 250 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Category" />
                )}
                size="small"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex md:justify-end justify-center items-center gap-2">
              <Tooltip title={Instock ? "All" : "In Stock"} color="primary">
                <Switch
                  size="medium"
                  fontSize="medium"
                  color="primary"
                  checked={Instock}
                  onChange={(e) => SetInstock(e.target.checked)}
                />
              </Tooltip>
              <Tooltip title={sortOption ? "high to Low" : "Low To High"}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => setSortOptions(!sortOption)}
                >
                  <FilterListIcon color="primary" />
                </IconButton>
              </Tooltip>

              <Button
                size="small"
                startIcon={<AddIcon />}
                onClick={() => setOpenModal(true)}
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[82vh] p-4 mt-1 overflow-y-auto">
          <div className="grid grid-cols-12 gap-3">
            {ProductListPage.map((product) => (
              <div
                key={product?.id}
                className="col-span-12 md:col-span-3 bg-white rounded-xl shadow-2xl p-3 "
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={product?.imageUrl}
                    alt={product?.productName}
                    className="w-full h-48 object-cover rounded-t-md"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuYqXFIPj9pzDHrN9Q9OiPZxieJvhNWYaQw&s";
                    }}
                  />
                </div>

                <div className="flex justify-between px-3 items-center mt-3">
                  <div className="font-bold text-lg truncate">
                    {product?.productName}
                  </div>
                  <div className="text-xs border border-gray-100 px-2 py-1 rounded-xl">
                    {product?.category}
                  </div>
                </div>

                <div className="flex justify-between px-3 items-center mt-1">
                  <div className="font-bold text-lg text-green-600">
                    {product?.price}
                  </div>
                  <div
                    className={`text-xs text-white px-3 py-1 rounded-2xl ${
                      product?.availableUnits != 0
                        ? "bg-[#1e3a8a]"
                        : "bg-red-500"
                    }`}
                  >
                    {product?.availableUnits != 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                <div className="px-3 py-2 text-sm text-gray-600">
                  {product?.availableUnits} units available
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openModal && (
        <ProductAdd openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}
