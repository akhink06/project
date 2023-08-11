import React from 'react';
import styled, { keyframes } from 'styled-components';

function Settings() {
  return (
    <SettingsBox className='Settings'>
      <Content> Coming Soon.....! </Content>
    </SettingsBox>
  );
};

export default Settings;

const scaleFade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const SettingsBox = styled.div`
    width: 67.5%;
    height: 65%;
    position: absolute;
    top: 20%;
    left: 9%;
    color: #f46801;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${scaleFade} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const Content = styled.h3`
    font-size: 35px;
`;
