import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='card-area' onClick={showDetail}>
      <img className='card-img' width={300} height={400} src={item?.img}/>
      <div>{item?.choice ==true?"CHOICE!":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ==true?"NEW!":""}</div>
    </div>
  );
}

export default ProductCard;
