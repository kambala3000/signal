import React from 'react';

import { ProductWithQuantity } from '../../types';
import styles from './FamilyMenu.module.css';

interface Props {
  product: ProductWithQuantity;
}

const ProductItem: React.FC<Props> = ({ product }) => (
  <p className={styles.memberInfoRow}>
    x{product.quantity} {product.food} {product.srvg_sz}
  </p>
);

export default ProductItem;
