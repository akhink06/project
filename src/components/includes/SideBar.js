import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Logo-Food-Site.svg';
import { ReactComponent as Menu } from '../../Assets/Menu-White.svg';
import { ReactComponent as FoodSite } from '../../Assets/Food-Site-8-white.svg';
import { ReactComponent as Favourites } from '../../Assets/Love-white.svg';
import { ReactComponent as WhiteCard } from '../../Assets/White-Card.svg';
import { ReactComponent as Cart } from '../../Assets/Cart-white.svg';
import { ReactComponent as Settings } from '../../Assets/Settings-white.svg';
import { ReactComponent as Profile } from '../../Assets/Profile-white.svg';
import { ReactComponent as Support } from '../../Assets/exclamation-white.svg';
import ProfilePhoto from '../../Assets/Rectangle 20691.jpg';

function SideBar() {

  const navLinkStyle = ({isActive}) => {
    return {
      backgroundColor: isActive ? '#e3912c' : '#f46801',
      padding: '50%',
      borderRadius: '50%',
    }
  }

  return (
    <Sidebar className='SideBar'>

      <Top className='top'>
        <LogoImage src={Logo} alt="Logo" />
      </Top>
      
      <Middle className='middle'>
        <MidItem1><NavLink to="/menu" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Menu /></NavLink></MidItem1>
        <MidItem2><NavLink to="/foodSite" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><FoodSite /></NavLink></MidItem2>
        <MidItem3><NavLink to="/favourites" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Favourites /></NavLink></MidItem3>
        <MidItem4><NavLink to="/whiteCard" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><WhiteCard /></NavLink></MidItem4>
        <MidItem5><NavLink to="/cart" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Cart /></NavLink></MidItem5>
        <MidItem6><NavLink to="/settings" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Settings /></NavLink></MidItem6>
        <MidItem7><NavLink to="/profile" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Profile /></NavLink></MidItem7>
        <MidItem8><NavLink to="/Details" className={({isActive}) => isActive?"active":""} style={navLinkStyle}><Support /></NavLink></MidItem8>
      </Middle>

      <Bottom className='bottom'>
        <PersonImage src={ProfilePhoto} alt="Profile photo" />
      </Bottom>

    </Sidebar>
  );
};

export default SideBar;

const Sidebar = styled.div`
    height:100vh;
    padding: 20% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:1380px) {
       padding: 25% 0;
    }
`;
const Top = styled.div`
    width: 52%;
`;
const LogoImage = styled.img`
    width: 100%;
`;
const Middle = styled.ul`
    background-color: #F46801;
    width: 60%;
    padding: 13%;
    margin: auto;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media all and (max-width:1140px) {
       padding: 13% 40%;
    }
    @media all and (max-width:980px) {
       padding: 13% 46%;
    }
`;
const MidItem1 = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MidItem2 = styled(MidItem1)``;
const MidItem3 = styled(MidItem1)``;
const MidItem4 = styled(MidItem1)``;
const MidItem5 = styled(MidItem1)``;
const MidItem6 = styled(MidItem1)``;
const MidItem7 = styled(MidItem1)``;
const MidItem8 = styled(MidItem1)``;
const Bottom = styled.div`
    width: 52%;
    margin: 0 auto;
    @media all and (max-width:980px) {
      width: 70%;
    }
`;
const PersonImage = styled.img`
    width: 100%;
    border-radius: 50%;
`;