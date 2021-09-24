import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const ProductCard = ({product, wish}: any) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="180"
                image={product?.imageUrl}
            />
            <CardContent style={{ textAlign: 'left' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {product?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product?.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button color="inherit">{wish ? "Remove From ": "Add To "} Wishlist</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
