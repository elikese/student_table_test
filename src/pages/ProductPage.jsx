import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  // useParams => /url:지정한key값으로 url:value로 get요청하면 value를 전달.
  const params = useParams();
  const productId = parseInt(params.productId);

  const products = useMemo(() => [
    {
      productId: 1,
      productName: "상품1"
    },
    {
      productId: 2,
      productName: "상품2"
    },
    {
      productId: 3,
      productName: "상품3"
    }
  ], []);

  const product = useMemo(() => products.filter(product => product.productId === productId)[0], [productId]);

  return (
    <div>
      <h1>상품ID : {product?.productId}</h1>
      <h1>상품명 : {product?.productName}</h1>
    </div>
  );
}

export default ProductPage;