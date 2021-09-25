import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Alert, Button, Snackbar } from "@mui/material";
import { addToWish, removeFromWish } from "../../features/wishlist/wishlistApi";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/auth/login/loginSlice";
import { Link } from "react-router-dom";
import { removeAsync } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({ product, wish }: any) => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const isLoggedIn = () => user.status === "success";

    const [open, setOpen] = useState(false);

    const handleAddToWishlist = async () => {
        if ( !isLoggedIn() ) {
            setOpen(true);
            return;
        }

        const { status } = await addToWish(product?.id);
        if (status === 409) {
            alert(`${product.name} exist is wishlist`);
        } else if (status === 201) {
            alert(`${product.name} added to wishlist`);
        } else {
            alert(`Something went wrong`);
        }
    }

    const handleRemoveFromWishlist = async () => {
        if ( !isLoggedIn() ) {
            setOpen(true);
            return;
        }
        dispatch(removeAsync(product?.wishId));
    }

    const handleWishAction = async () => {
        if (wish) await handleRemoveFromWishlist();
        else await handleAddToWishlist();
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    Please <Link to="/login">Login</Link> to add product to wishlist!
                </Alert>
            </Snackbar>
            <Card>
                <CardMedia
                    component="img"
                    height="180"
                    image={product?.imageUrl}
                />
                <CardContent style={{ textAlign: "left" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product?.name}
                    </Typography>
                    <div
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            height: 80,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            {product?.description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing>
                    <Button onClick={handleWishAction} color="inherit">
                        {wish ? "Remove From " : "Add To "} Wishlist
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ProductCard;
