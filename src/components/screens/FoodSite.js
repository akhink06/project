import React from 'react';
import styled from 'styled-components';

function FoodSite() {
  return (
    <FoodSiteBox className='FoodSite'>
      <Content> Coming Soon.....! </Content>
    </FoodSiteBox>
  );
};

export default FoodSite;

const FoodSiteBox = styled.div`
    width: 67.5%;
    height: 65%;
    position:absolute;
    top: 20%;
    left: 9%;
    color: #f46801;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.h3`
    font-size: 35px;
    
`;