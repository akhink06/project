import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../Assets/Food-Site-1.svg';
import styled from 'styled-components';

function MainBar() {

  return (
    <Mainbar className='MainBar'>

      <WelcomeDiv className='welcome'>
        <Title>Welcome, Epan Danis!</Title>
        <SubTitle>Don't forget to have breakfast today yeahhh!</SubTitle>
      </WelcomeDiv>
      
      <HeaderMenu className='menu'>
        <MenuContainer className='menuContainer'>
          <Menu1 className='menuBox' style={{ backgroundColor:'#f46801' }}>
            <NavLink to="/" style={{ color:"#fff" }}>Menu</NavLink>
          </Menu1>
          <Menu2 className='menuBox' style={{ backgroundColor:'#eeeeee' }}>
            <NavLink to="/" style={{ color:"#777" }}>Meal plans</NavLink>
          </Menu2>
          <Menu3 className='menuBox' style={{ backgroundColor:'#eeeeee' }}>
            <NavLink to="/" style={{ color:"#777" }}>Delivery</NavLink>
          </Menu3>
        </MenuContainer>
      </HeaderMenu>
     
      <SearchBar className='search'>
        <SearchText className='searchText'>Search your food...</SearchText>
        <SearchIconBox className='searchIcon'><SearchIcon /></SearchIconBox>
        </SearchBar>

    </Mainbar>
  );
};

export default MainBar;

const Mainbar = styled.div`
    height: 130px; 
    font-family: 'Inter-SemiBold';
    padding: 1.5% 0;
    display: flex;
    align-items: center;

`;
const WelcomeDiv = styled.div`
    margin-right: 6%;
   
`;
const Title = styled.h1`
    margin-bottom: 13px;
    font-size: 34px;

`;
const SubTitle = styled.span`
    color: #777;
    font-size: 16px;
    
`;
const HeaderMenu = styled.nav`
    width: 40%;
`;
const MenuContainer = styled.ul`
    display: flex;
 
`;
const Menu1 = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 3% 5%;
    margin-right: 6%;
    font-size: 18px;
    font-family: 'Inter-Regular';
  
`;
const Menu2 = styled(Menu1)``;
const Menu3 = styled(Menu1)``;
const SearchBar = styled.div`
    background-color: #eee;
    border-radius: 30px;
    padding: 1% 1.8%;
    display: flex;
    align-items: center;
    font-family: 'Inter-Regular';
   
    
`;
const SearchText = styled.span`
    color:#777;
    font-size: 18px;
    margin-right: 10px;
  
  
`;
const SearchIconBox = styled.span``;
