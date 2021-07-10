import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'app/header/Header';
import './Products.scss';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
      <Header />
      <div className="container">

      <Link to={AppRoute.login}> Login </Link>
      </div>
    </>
  );
};
