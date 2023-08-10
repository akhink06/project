import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../App.css'
import styled from 'styled-components';

function Menu() {

  const navLinkStyle = ({isActive}) => {
    return {
      color: isActive ? '#e3912c' : '#777',
      textDecoration: 'none',
      fontSize: '20px', 
    }
  }
  
  return (
    <>
    <MenuBox className='Menu'>
      <MenuHeading>Find the menu you want</MenuHeading>
      <MealsNavBox className='mealsNav'>
        <MealsNavBar>
          <ListBox>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/recommended" style={navLinkStyle}>Recommended</NavLink>
              </ListItem>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/breakfast" style={navLinkStyle}>Breakfast</NavLink>
              </ListItem>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/lunch" style={navLinkStyle}>Lunch</NavLink>
              </ListItem>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/dinner" style={navLinkStyle}>Dinner</NavLink>
              </ListItem>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/iceCream" style={navLinkStyle}>Icecream</NavLink>
              </ListItem>
            <ListItem>
              <NavLink className={({isActive}) => isActive?"active":""} to="/menu/coffee" style={navLinkStyle}>Coffee</NavLink>
              </ListItem> 
          </ListBox>
        </MealsNavBar>
      </MealsNavBox>
    </MenuBox>
    <Outlet />
    </>
  );
};

export default Menu;

const MenuBox = styled.div`
    position: absolute;
    top: 17%;
    left: 9%;
    font-size: 50px;
    width: 67.5%;
    @media all and (max-width:1380px) {
      top: 15%;
    }
    @media all and (max-width:1080px) {
      width: 40%;
    }
`;
const MenuHeading = styled.h3`
    font-family: 'Inter-SemiBold';
    font-size: 32px;
    margin-bottom: 1.5%;
    @media all and (max-width:1380px) {
      font-size: 24px;
    }
    @media all and (max-width:1080px) {
      margin-bottom: 5%;
    }
`;
const MealsNavBox = styled.div`
    font-size: 0;
`;
const MealsNavBar = styled.nav`
    width: 100%;
`;
const ListBox = styled.ul`
    display: flex;
    width: 100%;
    border-bottom: 2px solid #ddd;
    @media all and (max-width:1080px) {
     border-bottom: none;
    }
    @media all and (max-width:980px) {
      width: 35%;
    }
`;
const ListItem = styled.li`
    margin-right: 5%;
    padding: 0.6% 1% 0.6%;
`;
