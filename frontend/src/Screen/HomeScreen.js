import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
// import products from '../components/util/products';
import Products from '../components/Products/Products';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const uri = '/api/products';
    const fetchProducts = async () => {
      const { data } = await axios.get(uri);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Lates products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
