import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const Products = useSelector((state) => state.allProducts.products);

  const renderList = Products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Grid key={id} item xs={12} sm={6} md={4}>
      
        <Card
          sx={{
            paddingBottom: "10px",
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            paddingTop: '25px',
            position: 'relative', // Add position relative to the Card
          }}
        >
          <CardActions style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
            {/* Shopping Cart Button */}
            <Button size="small" style={{ color: "black" }}>
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
          <Link to={`/product/${id}`}>
          <CardMedia
            sx={{
              height: "250px",
              backgroundSize: "contain", // Make the image cover the space
            }}
            image={image}
          />
          </Link>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              ${price}
            </Typography>
          </CardContent>
        </Card>
       
      </Grid>
    );
  });

  return (
    <div style={{ padding: "80px" }}>
      <Grid container spacing={2}>
        {renderList}
      </Grid>
    </div>
  );
};

export default ProductComponent;
