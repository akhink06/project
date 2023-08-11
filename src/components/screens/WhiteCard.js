import React from 'react';
import styled from 'styled-components';

function WhiteCard() {
  return (
    <WhiteCardBox className='WhiteCard'>
      <Content> Coming Soon.....! </Content>
    </WhiteCardBox>
  );
};

export default WhiteCard;

const WhiteCardBox = styled.div`
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