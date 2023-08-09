import React from 'react'
import { styled } from 'styled-components'

export default function FoodSite() {
  return (
    <MainContainer>
        
        <Header>Coming Soon...!</Header>
        
    </MainContainer>
    
  )
}

const MainContainer = styled.div`
    height:100vh;
    display:flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #f46801;
    
`
const Header = styled.h1`
margin: auto 0 ;

`