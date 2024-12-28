import React from 'react'
import { Background, FirstContainer, SecondContainer, InfoCard, MainTextBlock, MainImgBlock, SecondTextBlock, Icons, TabletView, SecondTextBlockTablet, MainImgBlockTablet } from './styles.ts'
import blob from '../imgs/blob.png'
import react from '../imgs/react.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import ts from '../imgs/ts.png'
import python from '../imgs/python.png'
import ruby from '../imgs/ruby.png'



function Home() {
  return (
    <Background>
      <InfoCard>
        <FirstContainer>
          <MainTextBlock>
            <h2>welcome to my</h2>
            <h1><span>PORTFOLIO</span></h1>
          </MainTextBlock>
          <TabletView>
            <SecondTextBlockTablet>
              <p>you can call me <span>Folkz :)</span></p>
              <p>i love <br></br><span>CODING</span> | <span>GAMES</span> <span><br></br>GYM</span> and <span>COFFEE</span></p>
            </SecondTextBlockTablet>
            <MainImgBlockTablet>
            <img src={blob} alt="" />
          </MainImgBlockTablet>
          </TabletView>
          <MainImgBlock>
            <img src={blob} alt="" />
          </MainImgBlock>
        </FirstContainer>
        <SecondContainer>
           <SecondTextBlock>
            <p>you can call me <span>Folkz :)</span></p>
            <p>i love <span>CODING</span> | <span>GAMES</span> | <span>GYM</span> and <span>COFFEE</span></p>
          </SecondTextBlock>
          <Icons>
            <img src={react} alt="React Logo" />
            <img src={html} alt="React Logo" />
            <img src={css} alt="React Logo" />
            <img className='js' src={js} alt="React Logo" />
            <img className='ts' src={ts} alt="React Logo" />
            <img src={python} alt="React Logo" />
            <img src={ruby} alt="React Logo" />
          </Icons>
        </SecondContainer>
      </InfoCard>
    </Background>

  )
}

export default Home