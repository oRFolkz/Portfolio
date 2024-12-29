import React from 'react'
import { Background, FirstContainer, SecondContainer, InfoCard, MainTextBlock, MainImgBlock, SecondTextBlock, Icons, TabletView, SecondTextBlockTablet, MainImgBlockTablet } from './styles.ts'
import Projects from '../Projects/Projects.jsx'

import blob from '../imgs/blob.png'
import react from '../imgs/react.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import ts from '../imgs/ts.png'
import ruby from '../imgs/ruby.png'
import python from '../imgs/python.png'
import sql from '../imgs/sql.png'
import github from '../imgs/github.png'



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
            <img src={html} alt="HTML Logo" />
            <img src={css} alt="CSS Logo" />
            <img className='js' src={js} alt="JavaScript Logo" />
            <img className='ts' src={ts} alt="TypeScript Logo" />
            <img src={github} alt="GitHub Logo" />
            <img src={ruby} alt="Ruby Logo" />
            <img src={python} alt="Python Logo" />
            <img src={sql} alt="SQL Logo" />
          </Icons>
        </SecondContainer>
      </InfoCard>
      <Projects />
    </Background>

  )
}

export default Home