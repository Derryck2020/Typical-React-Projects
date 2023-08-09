import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'id1',
		price: 26,
		title: 'Friends with Benefits 2011',
		description: 'Mutual Friends feel in love',
	},
	{
		id: 'id2',
		price: 39,
		title: 'Who killed Columbus',
		description: 'The Biography of Great Columbus',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
