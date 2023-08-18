import React, { useContext } from 'react';
import CalenderIcon from '../../Assets/Food-Site-9.svg';
import DownArrow from '../../Assets/Food-Site-10.svg';
import Dollar from '../../Assets/Food-Site-11.svg';
import { Lunch, Dinner } from '../Data/Data';
import styled from 'styled-components';
import { DataContext } from '../../App';

function RightBar() {

  const { BreakFast } = useContext(DataContext);

  return (
    <Rightbar className="RightBar">

      <Heading>Your meal plan</Heading>
      <DaySelector className='daySelector'>
        <IconBox className='iconBox'>
          <IconCalender src={CalenderIcon} alt="Calender icon" />
        </IconBox>
        <Day className='day'>Today, 08 Aug 2022</Day>
        <ArrowBox className='arrowBox'>
          <ArrowIcon src={DownArrow} alt="Down arrow" />
        </ArrowBox>
      </DaySelector>

      <Meal className='meal'>
        <BreakfastMeal className='breakfast'>
          <SubHeadingBar1 className='title'>
            <SubHeading1>Breakfast</SubHeading1>
            <OrderStatus1 className='purchased'>Purchased</OrderStatus1>
          </SubHeadingBar1> 
          <OrderTime1 className='time'>06.30AM</OrderTime1>
          <FoodContainer1 className='food'>
            {BreakFast.map((item) => {
              return(
                <FoodBox1 key={item.id}>
                  <FoodImageBox1 className='foodBox'>
                    <FoodImage1 src={item.image} alt="food" />
                  </FoodImageBox1>
                  <FoodTextBox1 className='textBox'>
                    <FoodName1>Nasi Padang Patikraja</FoodName1>
                    <Price1 className='price'>
                      <CurrentPrice1 className='currentPrice'>
                        <DollarBox1 className='dollarBox'>
                          <DollarImage src={Dollar} alt="dollar icon" />
                        </DollarBox1>8,10
                      </CurrentPrice1>
                      <InitialPrice1 className='initialPrice'>$10,10</InitialPrice1>
                    </Price1>
                  </FoodTextBox1>
                </FoodBox1>
              )
            })}  
          </FoodContainer1>
        </BreakfastMeal>

        <LunchMeal className='lunch'>
          <SubHeadingBar2 className='title'>
            <SubHeading2>Lunch</SubHeading2>
            <OrderStatus2 className='ordered'>Being ordered</OrderStatus2>
          </SubHeadingBar2> 
          <OrderTime2 className='time'>01.30PM</OrderTime2>
          <FoodContainer2 className='food'>
            {Lunch.map((item) => {
              return(
                <FoodBox2 key={item.id}>
                  <FoodImageBox2 className='foodBox'>
                    <FoodImage2 src={item.image} alt="food" />
                  </FoodImageBox2>
                  <FoodTextBox2 className='textBox'>
                    <FoodName2>Nasi Padang Patikraja</FoodName2>
                    <Price2 className='price'>
                      <CurrentPrice2 className='currentPrice'>
                        <DollarBox2 className='dollarBox'>
                          <DollarImage src={Dollar} alt="dollar icon" />
                        </DollarBox2>8,10
                      </CurrentPrice2>
                      <InitialPrice2 className='initialPrice'>$10,10</InitialPrice2>
                    </Price2>
                  </FoodTextBox2>
                </FoodBox2>
              )
            })}  
          </FoodContainer2>
        </LunchMeal>

        <DinnerMeal className='dinner'>
          <SubHeadingBar3 className='title'>
            <SubHeading3>Dinner</SubHeading3>
            <OrderStatus3 className='not_ordered'>Haven't ordered yet</OrderStatus3>
          </SubHeadingBar3> 
          <OrderTime3 className='time'>08.30PM</OrderTime3>
          <FoodContainer3 className='food'>
            {Dinner.map((item) => {
              return(
                <FoodBox3 key={item.id}>
                  <FoodImageBox3 className='foodBox'>
                    <FoodImage3 src={item.image} alt="food" />
                  </FoodImageBox3>
                  <FoodTextBox3 className='textBox'>
                    <FoodName3>Nasi Padang Patikraja</FoodName3>
                    <Price3 className='price'>
                      <CurrentPrice3 className='currentPrice'>
                        <DollarBox3 className='dollarBox'>
                          <DollarImage src={Dollar} alt="dollar icon" />
                        </DollarBox3>8,10
                      </CurrentPrice3>
                      <InitialPrice3 className='initialPrice'>$10,10</InitialPrice3>
                    </Price3>
                  </FoodTextBox3>
                </FoodBox3>
              )
            })}  
          </FoodContainer3>
        </DinnerMeal>
      </Meal>
      
      <AddButton className='add'>
        <AddLink href='#'>Drop here to add</AddLink>
      </AddButton>
      
    </Rightbar>
  );
};

export default RightBar;

const Rightbar = styled.div`
    height: 100vh;
    padding: 7% 9%;
    background-color: #f7f4fa;
    font-family: 'Inter-SemiBold';
    @media all and (max-width:980px) {
      padding: 15% 9%;
    }
`;
const Heading = styled.h4`
    font-size: 26px;
    text-align: left;
    margin-bottom: 6%;
    @media all and (max-width:1380px) {
      font-size: 23px;
    }
    @media all and (max-width:1080px){
      font-size: 21px;
    }
    @media all and (max-width:980px) {
      font-size: 18.5px;
    }
`;
const DaySelector = styled.h4`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 4%;
`;
const IconBox = styled.div`
    width: 8%;
    display: flex;
    align-items: center;
    @media all and (max-width:980px) {
      width: 11%;
    }
`;
const IconCalender = styled.img`
    width: 100%;`;
const Day = styled.span`
    font-family: 'Inter-Regular';
    font-size: 20px;
    color: #777;
    @media all and (max-width:1380px){
      font-size: 16px;
    }
    @media all and (max-width:1280px){
      font-size: 15px;
    }
    @media all and (max-width:1080px){
      font-size: 13px;
    }
    @media all and (max-width:980px) {
      font-size: 10px;
    }
`;
const ArrowBox = styled.div`
    width: 8%;
    display: flex;
    align-items: center;
`;
const ArrowIcon = styled.img`
    width: 100%;`;
const Meal = styled.div`
    margin: 8% 0;
    @media all and (max-width:980px) {
      margin-top: 20%;
    }
`;
const BreakfastMeal = styled.div`
    margin-bottom: 6%;
    @media all and (max-width:980px) {
      margin-bottom: 20%;
    }
`;
const LunchMeal = styled(BreakfastMeal)``;
const DinnerMeal = styled(BreakfastMeal)``;
const SubHeadingBar1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;
`;
const SubHeadingBar2 = styled(SubHeadingBar1)``;
const SubHeadingBar3 = styled(SubHeadingBar1)``;
const SubHeading1 = styled.h5`
    font-size: 20px;
    @media all and (max-width:1080px){
      font-size: 16px;
    }
    @media all and (max-width:980px) {
      font-size: 14px;
    }
`;
const SubHeading2 = styled(SubHeading1)``;
const SubHeading3 = styled(SubHeading1)``;
const OrderStatus1 = styled.span`
    font-size: 13px;
    color: #36de98;
    background-color:#c7ffe5 ;
    padding: 5px 8px;
    border-radius: 50px;
    @media all and (max-width:1080px){
      font-size: 10px;
    }
    @media all and (max-width:980px) {
      font-size: 9px;
      padding: 2px 4px;
    }
`;
const OrderStatus2 = styled(OrderStatus1)`
    color: #e9be87;
    background-color:#fff3e1 ;
`;
const OrderStatus3 = styled(OrderStatus1)`
    color: #e65e6a;
    background-color:#ffe7e9;
    @media all and (max-width:980px) {
      font-size: 8px;
    }
`;

const OrderTime1 = styled.span`
    display: block;
    margin-bottom: 4%;
    @media all and (max-width:980px) {
      font-size: 13px;
    }
`;
const OrderTime2 = styled(OrderTime1)``;
const OrderTime3 = styled(OrderTime1)``;
const FoodContainer1 = styled.ul``;
const FoodContainer2 = styled(FoodContainer1)``;
const FoodContainer3 = styled(FoodContainer1)``;
const FoodBox1 = styled.li`
    background-color: #fff;
    padding: 5px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 4%;
    @media all and (max-width:980px) {
      margin-bottom: 8%;
    }
`;
const FoodBox2 = styled(FoodBox1)``;
const FoodBox3 = styled(FoodBox1)``;
const FoodImageBox1 = styled.div`
    width: 20%;
    margin-right: 5%;
    @media all and (max-width:1280px) {
      width: 25%;
    }
    @media all and (max-width:980px){
      width: 50%;
    }
`;
const FoodImageBox2 = styled(FoodImageBox1)``;
const FoodImageBox3 = styled(FoodImageBox1)``;
const FoodImage1 = styled.img`
    display: block;
    width: 100%;
    border-radius: 6px;
`;
const FoodImage2 = styled(FoodImage1)``;
const FoodImage3 = styled(FoodImage1)``;
const FoodTextBox1 = styled.div``;
const FoodTextBox2 = styled(FoodTextBox1)``;
const FoodTextBox3 = styled(FoodTextBox1)``;
const FoodName1 = styled.h6`
    font-size: 15px;
    margin-bottom: 10px;
    @media all and (max-width:1280px) {
      font-size: 13px;
      margin-bottom: 7px;
    }
    @media all and (max-width:1080px){
      font-size: 10px;
    }
`;
const FoodName2 = styled(FoodName1)``;
const FoodName3 = styled(FoodName1)``;
const Price1 = styled.div`
    display: flex;
`;
const Price2 = styled(Price1)``;
const Price3 = styled(Price1)``;
const CurrentPrice1 = styled.span`
    display: flex;
    align-items: center;
    margin-right: 10%;
    @media all and (max-width:1280px) {
      font-size: 15px;
    }
    @media all and (max-width:1080px){
      font-size: 13px;
    }
    @media all and (max-width:980px) {
      font-size: 12px;
    }
    @media all and (max-width:980px) {
      margin-right: 5%;
    }
`;
const CurrentPrice2 = styled(CurrentPrice1)``;
const CurrentPrice3 = styled(CurrentPrice1)``;
const DollarBox1 = styled.span`
    display: inline-block;
    width: 30%;
`;
const DollarBox2 = styled(DollarBox1)``;
const DollarBox3 = styled(DollarBox1)``;
const DollarImage =styled.img`
    display: block;
    width: 100%;
`;
const InitialPrice1 = styled.span`
    display: inline;
    color: #777;
    text-decoration: line-through;
    @media all and (max-width:1280px) {
      font-size: 15px;
    }
    @media all and (max-width:1080px){
      font-size: 13px;
    }
    @media all and (max-width:980px) {
      font-size: 12px;
    }
`;
const InitialPrice2 = styled(InitialPrice1)``;
const InitialPrice3 = styled(InitialPrice1)``;
const AddButton = styled.div`
    background-color: #ffebde;
    border: 1px dashed #ec6925;
    border-radius: 8px;
    padding: 6%;
    text-align: center;
`;
const AddLink = styled.a`
    color:#ee793b;
    text-decoration: none;
    font-size: 18px;
    @media all and (max-width: 1380px) {
      font-size: 17px;
    }
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
    @media all and (max-width:1080px){
      font-size: 14px;
    }
    @media all and (max-width:980px) {
      font-size: 12px;
    }
`;