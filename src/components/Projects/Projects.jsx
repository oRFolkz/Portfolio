import React from 'react'
import { Background, CardContain, CardSubContainer, Icons, ImgProject} from './styles.ts'
import react from '../imgs/react.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import ts from '../imgs/ts.png'
import abf from '../imgs/abf.png'

function Projects() {
  return (
    <Background>
      <p>Check out my projects :</p>
      <CardContain>
        <CardSubContainer>
          <div>
            <p>ABF - Advocacia</p>
            <p>Tools used in this project:</p>
            <Icons>
            <img src={react} alt="React Logo" />
            <img src={html} alt="React Logo" />
            <img src={css} alt="React Logo" />
            <img className='js' src={js} alt="React Logo" />
            <img className='ts' src={ts} alt="React Logo" />
            </Icons>  
          </div>
          <div>
            <ImgProject>
                <img src={abf} alt="" />
                <img src={abf} alt="" />
            </ImgProject>
          </div>
        </CardSubContainer>
      </CardContain>
    </Background>
  )
}

export default Projects