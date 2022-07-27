import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
// import  Icon  from "@mui/material"
import styled from "styled-components"
import "./Products.css"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Info=styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor:pointer;

`;

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:250px;
    align-items:center;
    display:flex;
    justify-content:center;
    background-color: #ffff;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }

`;

const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;

`;
const Image=styled.img`
    height:75%;
    width:75%;
    z-index:2;
`;

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`;

const Product = () => {
    const[products, setProducts]= useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:5001/api/product").then((response)=>{
      setProducts(response.data)
      // console.log("raw data")
      // console.log(response.data)
      // console.log("pickle")
      // console.log(products)
    }).catch((error)=>{
      throw error
    });
  },[]);
  return (
      <>
            
             {products.map((item)=>(
                <div class= "product-styling" key ={item.id}>
                    <img src={item.img}/> 
                    <h1 class="heading">{item.ProductName}</h1>
                    <p class="description">{item.Description}</p>
                </div>
               ))}; 
               
               {/* {console.log("in product")}
               {console.log(products)} */}
     <Container>
          {/* <Circle/>
       
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info> */}
    </Container>
    </>
  )
}

export default Product
