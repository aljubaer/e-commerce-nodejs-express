import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const ProductCard = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="180"
                image="https://via.placeholder.com/180"
            />
            <CardContent style={{ textAlign: 'left' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
