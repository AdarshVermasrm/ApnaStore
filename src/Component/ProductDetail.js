import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeselectedProduct } from "../redux/actions/productActions";
import { Typography, Paper, Container, Grid, Button,Rating } from "@mui/material";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { category, description, image, price, rating, title } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }

    // Cleanup when the component is unmounted or the product ID changes
    return () => {
      dispatch(removeselectedProduct());
    };
  }, [productId]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={image} alt={title} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Category: {category}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${price}
            </Typography>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>
            
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              
            </Typography>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetail;
