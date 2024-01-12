import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions"
const Product = () => {
  const Products = useSelector((state) => state);
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
      dispatch(setProducts(response.data));

  };
  useEffect(() => {
    fetchProducts();

  },[]);


  return (
    <div style={{ padding: "20px" }}>
    <h1 style={{ textAlign: 'center' }}>Product List</h1>
      <ProductComponent />
    </div>
  );
};

export default Product;
