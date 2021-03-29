import axios from "axios";
import React from "react";
import * as classNames from 'classnames/bind';
import { TextField, Button } from "@material-ui/core";
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const cx = classNames.bind(require("./products.module.css"));

export const Products = () => {
	const [textVal, setTextval] = React.useState(null);
    const [products, setProducts] = React.useState(null);
	const [isLoading,setLoading] = React.useState(false);
    React.useEffect(() => {
		setLoading(true);
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            setProducts(res.data);
			setLoading(false);
        }) 	
		.catch((err) => {
			return err;
		})
    }, []);

	const handleProductSearch = (textVal, products) => {
		const filteredProducts = products.filter((product) => {
			let title = product?.title?.toLowerCase() || "";
			let text = textVal?.toLowerCase() || "";
			if(title.includes(text)) {
				return product;
			}
			return null;
		});
		setProducts(filteredProducts);
	}

	const skeletonFrame = () => {
		return (
			<div className={cx('product_wrapper')}>
					<div className={cx('product_image')}>
						<Skeleton width={80} height={80} />
					</div>  
					<div className={cx('product_description')}>
					<Skeleton  width={600} />
					<Skeleton animation={false} />
					<Skeleton animation="wave" />
					</div>
			</div>
		)
	};
	const textFieldStyle = {
		width: '35%',
		margin: '0 20px 0 0'
	};

		if(products && products.length) {
			return (
				<div>
				  	<div className={cx('search_container')}>
					  <TextField  style={textFieldStyle} value={textVal} onChange={(e) => setTextval(e.target.value)} id="outlined-basic" label="search for products" variant="outlined" />
					  <Button onClick={() => handleProductSearch(textVal, products)} color={"primary"} variant={"contained"} size={"small"}>Search Orders</Button>
					</div>
					{products.map((product) => (
						<div className={cx('product_wrapper')}>
						{!isLoading ? <div className={cx('product_image')}>
							<img alt="image placeholder" src={product.image}></img>
						</div> : 
						<Skeleton width={20} height={80} />
						}
						{!isLoading ? <div className={cx('product_description')}>
							<span><b>{product.category}</b></span>
							<span>
								<Link to="/Page-2/" state={product}>{product.title}</Link>
							</span>
							<span>${product.price}</span>
						</div> : 
						<Skeleton animation={"wave"} variant={"rect"}  />
						}
						</div>)
					)}
				</div>
    	)} else if(isLoading) {
			return (
				<>
					{skeletonFrame()}
					{skeletonFrame()}
					{skeletonFrame()}
				</>
			)
			}
		return "No data";
}
