import React from "react";

import ComplexTitleWrapper from "./ComplexTitleWrapper";
import Product from "./Product";

interface ProductI {
  id: number;
  name: string;
  price: number;
}

const products: ProductI[] = [
  { id: 1, name: "chair", price: 30 },
  { id: 2, name: "bed", price: 150 },
  { id: 3, name: "couch", price: 550 },
];

const Products = (): JSX.Element => {
  return (
    <React.Fragment>
      <section>
        <ComplexTitleWrapper title="all products" />
        {products.map((product: ProductI) => {
          // return <Product name={product.name} price={product.price} key={product.id} />;
          return <Product {...product} key={product.id} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default Products;
