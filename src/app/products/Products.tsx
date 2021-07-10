import React from 'react';
import Header from 'app/header/Header';
import Product from './product/Product';
import Pagination from 'app/pagination/Pagination';
import './Products.scss';


export const Products = () => {
  return (
    <>
      <Header />
      <div className="container products__container">
        <Product id={1} name="White Watch" description="lorem ipsum dolor sit amet" rating={3} image="https://picsum.photos/id/6/300" promo={true} active={false} />
        <Product id={2} name="White Watch" description="lorem ipsum dolor sit amet" rating={5} image="https://picsum.photos/id/33/300" promo={false} active={true} />
        <Product id={3} name="White Watch" description="lorem ipsum dolor sit amet" rating={0} image="https://picsum.photos/id/4/300" promo={false} active={true} />
        <Product id={4} name="White Watch" description="lorem ipsum dolor sit amet" rating={1} image="https://picsum.photos/id/91/300" promo={true} active={true} />
        <Product id={5} name="White Watch" description="lorem ipsum dolor sit amet" rating={1} image="https://picsum.photos/id/53/300" promo={false} active={false} />
        <Product id={6} name="White Watch" description="lorem ipsum dolor sit amet" rating={2} image="https://picsum.photos/id/32/300" promo={false} active={false} />
        <Product id={7} name="White Watch" description="lorem ipsum dolor sit amet" rating={4} image="https://picsum.photos/id/11/300" promo={false} active={true} />
        <Product id={8} name="White Watch" description="lorem ipsum dolor sit amet" rating={1} image="https://picsum.photos/id/99/300" promo={true} active={true} />
      </div>
      <Pagination page={1} totalPages={55} />
    </>
  );
};
