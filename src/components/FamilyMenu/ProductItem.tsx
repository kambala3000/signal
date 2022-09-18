import React from 'react';
import { ProductWithQuantity } from '../../types';

interface Props {
  product: ProductWithQuantity;
}

const ProductItem: React.FC<Props> = ({ product }) => (
  <div>
    <p>
      {product.food} x{product.quantity} {product.srvg_sz}
    </p>
  </div>
);

export default ProductItem;
