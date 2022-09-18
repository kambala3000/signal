import React from 'react';

import { FoodGroup, ProductWithQuantity } from '../../types';
import { FOOD_GROUP_TITLES } from '../../utils/constants';
import ProductItem from './ProductItem';

interface Props {
  foodGroup: FoodGroup;
  products: ProductWithQuantity[];
}

const FoodGroupItem: React.FC<Props> = ({ foodGroup, products }) => (
  <div>
    <h4>{FOOD_GROUP_TITLES[foodGroup]}</h4>
    {products.map(product => (
      <ProductItem key={product.food} product={product} />
    ))}
  </div>
);

export default FoodGroupItem;
