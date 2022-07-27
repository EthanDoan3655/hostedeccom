import styled from 'styled-components'
import React from 'react'
import Navbar from '../Components/Navbar'
import Validation from '../Components/Validation';
import Footer from '../Components/Footer';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
     url("https://nonstoptuning.files.wordpress.com/2010/05/001-1001.jpg") 
     center;

     display:flex;
     align-items:center;
     justify-content:center;
`;
const Wrapper = styled.div`
    
    padding:20px;
    background-color:white;
    

`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;
const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding:10px;
   
`;
const Agreement = styled.span`
    color:black;
    font-size:12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%
    border:none;
    padding:15px 20px;
    background-color: teal;
    color: white;
    cursor:pointer;
`;


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Wrapper>
    <Title>CONTACT US</Title>
   <Validation/>  
    </Wrapper>        
    </Container>
    <Footer/>
</>  )
}

export default Contact
