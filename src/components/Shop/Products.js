import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Mobile",
    price: 10,
    description: "This is the best mobile product",
  },
  {
    id: 2,
    title: "TV",
    price: 6,
    description: "Entertainment is about it",
  },
  {
    id: 3,
    title: "Book",
    price: 8,
    description: "Best book for refershing the mind",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
