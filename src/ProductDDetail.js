import React,{useEffect, useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDDetail = () => {
    let { id } = useParams()
    const [product,setProduct]=useState(null)
        const getProductDetail=async()=>{
            let url =` https://my-json-server.typicode.com/sssson0/hnm-react/products/${id}`
            let response =await fetch(url)
            let data =await response.json()
            setProduct(data)
        }
    useEffect(()=>{
        getProductDetail()
        

    },[])
  return (
    <Container>
        <Row>
        <Col className='product-img'>
            <img width={400} src={product?.img}/>
        </Col>
        <Col className='product-detail-card'>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
            <div>S M L</div>
            <div>구매하기</div>
        </Col>
        </Row>
    </Container>
  );
}

export default ProductDDetail;
