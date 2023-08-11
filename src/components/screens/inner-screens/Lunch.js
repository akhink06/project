import React from 'react';
import styled from 'styled-components';
import { LunchData } from '../../Data/Data';
import Dollar from '../../../Assets/Food-Site-11.svg';

function Lunch() {
  return (
    <SectionContainer className='Lunch'>
        {LunchData.map((item) => {
            return(
                <FoodItem className='foodItem' key={item.id}>
                    <FoodImageBox className='foodImage'>
                        <FoodImage src={item.image} alt="Food image" />
                    </FoodImageBox>
                    <FoodName>Nasi Goreng Pak Parjo</FoodName>
                    <FoodBottomBox className='foodBoxBottom'>
                        <PriceBox className='price'>
                            <CurrentPrice className='currentPrice'><DollarImage src={Dollar} alt="dollar icon" />{item.value1}</CurrentPrice>
                            <InitialPrice className='initialPrice'>${item.value2}</InitialPrice>
                        </PriceBox>
                        <OrderButton type="button" className='order'>Order</OrderButton>
                    </FoodBottomBox>
                </FoodItem>
            )
        })}
    </SectionContainer>
  );
};

export default Lunch;

const SectionContainer = styled.div`
    width: 67.5%;
    height: 65%;
    position:absolute;
    top: 31%;
    left: 9%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media all and (max-width:1380px) {
        top: 28%;
    }
`;
const FoodItem = styled.div`
    background-color: #f7f4fa;
    border-radius: 15px; 
    display: inline-block;  
    margin-bottom: 1.5%;
    width: 31%;
    height: 50%;
    @media all and (max-width:1080px) {
        margin-bottom: 3%;
    }
`;
const FoodImageBox = styled.div`
    width: 100%;
    height: 73%;
    margin-bottom: 3%;
    @media all and (max-width: 1280px) {
        height: 60%;
        margin-bottom: 10%;
    }
    @media all and (max-width:1080px) {
        height: 65%;
    }
`;
const FoodImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;
const FoodName = styled.h4`
    padding: 0 5%;
    font-family: 'Inter-Light';
    @media all and (max-width:980px) {
        font-size: 13.5px;
    }
`;
const FoodBottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0% 5%;
    margin-top: 1%;
    @media all and (max-width: 1280px) {
        margin-top: 8%;
    }
    @media all and (max-width: 980px) {
        margin-top: 15%;
    }
`;
const PriceBox = styled.div`
    display: flex;
`;
const CurrentPrice = styled.span`
    display: flex;
    align-items: center;
    margin-right: 10%;
    font-size: 26px;
    font-family:'Inter-Medium';
    @media all and (max-width:1280px) {
        font-size: 24px;
    }
    @media all and (max-width:1080px) {
        font-size: 20px;
    }
    @media all and (max-width:980px) {
        font-size: 18px;
    }
`;
const InitialPrice = styled.span`
    display: inline;
    color: #777;
    font-size: 19px;
    text-decoration: line-through;
    margin-left: 7px;
    @media all and (max-width:1080px) {
        font-size: 16px;
        margin-left: 3px;
    }
    @media all and (max-width:980px) {
        font-size: 12px;
    }
`;
const DollarImage = styled.img`
    display: block;
    width: 100%;
`;
const OrderButton = styled.button`
    border: none;
    background-color: #F46801;
    color: #fff;
    padding: 2.5% 5%;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    @media all and (max-width:1080px) {
        font-size: 13px;
    }
    @media all and (max-width:980px) {
        font-size: 11px;
        padding: 2% 3%;
    }
`;