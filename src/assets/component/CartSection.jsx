import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CartContext } from "./cartContext";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function CartSection() {
  const { state, dispatch } = React.useContext(CartContext);

  const navigate = useNavigate();
  const handleRemoveFromCart = (product) => {
    dispatch({ type: "removeFromCart", payload: product });
  };

  const handleIncreaseQuantity = (product) => {
    dispatch({ type: "increaseQuantity", payload: product });
  };

  const handleDecreaseQuantity = (product) => {
    dispatch({ type: "decreaseQuantity", payload: product });
  };

  const totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "GrayText",
        }}
      >
        Your Cart
      </Typography>
      {state.cartItems.length === 0 ? (
        <Typography
          variant="h5"
          sx={{ textAlign: "center", lineHeight: "100px", color: "red" }}
        >
          Your Cart is Empty
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            {state.cartItems.map((item, index) => (
              <Card
                key={index}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="100"
                  image={item.image}
                  style={{ width: "100px", objectFit: "contain" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
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
                    Price: ${item.price * item.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">${totalPrice}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Typography variant="body1">Discount</Typography>
                <Typography variant="body1">$0.00</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Total
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  ${totalPrice}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "10px" }}
                onClick={() =>
                  alert(
                    "This section is not Intregeted till now. Sorry for your inconvinence!!!"
                  )
                }
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
      <Button
        sx={{ marginTop: "10px", p: 1, width: "200px" }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        Continue Shoping
      </Button>
    </div>
  );
}
