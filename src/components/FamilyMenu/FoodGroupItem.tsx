import React from 'react';

import { FoodGroup, ProductWithQuantity } from '../../types';
import { FOOD_GROUP_TITLES } from '../../utils/constants';
import ProductItem from './ProductItem';
import styles from './FamilyMenu.module.css';

interface Props {
  foodGroup: FoodGroup;
  products: ProductWithQuantity[];
}

const FoodGroupItem: React.FC<Props> = ({ foodGroup, products }) => (
  <div className={styles.foodGroup}>
    <h4 className={styles.foodGroupTitle}>{FOOD_GROUP_TITLES[foodGroup]}</h4>
    {products.map(product => (
      <ProductItem key={product.food} product={product} />
    ))}
  </div>
);

export default FoodGroupItem;
