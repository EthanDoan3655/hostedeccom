import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components'
import { mobile } from '../pages/responsive';
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ProductList from '../pages/ProductList';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

const navigateHome = () => {
  Navigate('/');
};

const navigateToContacts = ()=>{
  Navigate('/Contact')
}


const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
  
`;
const Wrapper = styled.div`
    padding: 10px 20px; 
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}

    `;
const Left =styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding: 5px;

`;

const Input= styled.input`
border:none;
${mobile({width:"50px"})}
`;

const Center = styled.div`
    flex:1;
    border:none;
    text-align:center;
`;


const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`;
const Right =styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search'/>
                <Search style ={{color:"gray", fontSize:16}}/> 
            </SearchContainer>
          </Left>
          <Center>
              <Logo>
                  ETD EURO
            </Logo>
        </Center>
          <Right>
            <ul style={{display: "flex"}}>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", marginRight: "20px"}} to="/">Home</Link>
                </li>
                <li style={{ display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", marginRight: "20px"}} to="/productlist">Products</Link>
                </li>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", paddingRight: "100px"}} to="/contact">Contact</Link>
                </li>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'underline', color: "black", fontSize: "20px", paddingLeft: "5%" }} to="/cart">Cart</Link>
                  <Badge badgeContent={4} color='primary' size="15px">
      <ShoppingCartOutlinedIcon />
             </Badge>
             </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
