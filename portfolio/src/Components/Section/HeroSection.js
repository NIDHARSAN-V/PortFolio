import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../Data/constants'
import Typewriter from "typewriter-effect"
const HeroContainer = styled.div`
display: flex;
justify-content: center;
/* width: 960px; */
/* background-color: red; */
position: relative;
padding: 80px 30px;
z-index: 1;

@media (max-width:960px) {
    padding: 60px 16px;
}
@media (max-width:640px) {
    padding: 32px 16px;
}
clip-path: polygon( 0 0 ,100% 0, 100% 100% , 70% 95% , 0 100%);

`

const HeroInnerContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width:1100px;

@media (max-width:960px) {
    flex-direction: column;
    
}


`

const HeroLeft = styled.div`
width: 100%;
order: 1;
/* background-color: red; */
@media (max-width:960px) {
    order: 2;   
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

`

const HeroRight = styled.div`
width: 100%;
order:2;
background-color: blue;

@media (max-width:960px) {
    order: 1;   
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
@media (max-width:640px) {
    margin-bottom: 30px;
}
`

const Title = styled.div`
font-weight:700;
font-size: 50px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;
@media (max-width: 960px)
{
    text-align: center;


}

@media (max-width: 640px)
{
    font-size: 40px;
    line-height:48px ;
    /* background-color: pink; */
    margin-bottom: 8px;
    
}

`
const TextType = styled.div`
font-weight:600;
font-size: 32px;
display: flex;
gap: 12px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;
@media (max-width: 960px)
{
    text-align: center;


}

@media (max-width: 640px)
{
    font-size: 22px;
    line-height:48px ;
    margin-bottom: 16px;
    
}
`
const Span = styled.div`
cursor: pointer;
color: ${({theme}) => theme.primary};

`

function HeroSection() {
  return (
    <div id='about'>
      <HeroContainer>

        <HeroInnerContainer>

            <HeroLeft>
                <Title>Hi!, I am <br />{Bio.name}. . .</Title>
                <TextType>
                    Iam a 
                    <Span>
                        <Typewriter options={{
                            strings:Bio.roles,
                            autoStart:true,
                            loop:true

                        }}>
                        </Typewriter>

                    </Span>
                </TextType>
            </HeroLeft>

            <HeroRight>
                <img src="" alt="" />
            </HeroRight>

        </HeroInnerContainer>

      </HeroContainer>
    </div>
  )
}

export default HeroSection
