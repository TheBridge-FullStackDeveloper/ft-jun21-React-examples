import React, { Component } from 'react'
import './Product.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            empresa: this.props.info.empresa || "Vendehumo S.A"
        }
    }

    render() {
        const { name, price, url } = this.props.info
        const empresa = this.state.empresa
        return (
            <section className="product">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Empresa: {empresa}
                        Precio:{price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.props.remove}>Borrar</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </section>
        )
    }
}

export default Product
