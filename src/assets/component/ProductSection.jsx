import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../component/ProductData"; // Verify the path if necessary
import { CartContext } from "./cartContext";

export default function ProductSection() {
  const { state, dispatch } = React.useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "addToCart", payload: product });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "30px",
        paddingLeft: "40px",
      }}
    >
      {products.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt={item.title}
            height="220"
            image={item.image}
            style={{ width: "260px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", marginTop: 2 }}
            >
              Price: ${item.price}
            </Typography>
          </CardContent>
          <CardActions>
            {/* Check if item is already in the cart */}
            {state.cartItems.find((cartItem) => cartItem.id === item.id) ? (
              <Button disabled size="small">
                Added to Cart
              </Button>
            ) : (
              <Button size="small" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
