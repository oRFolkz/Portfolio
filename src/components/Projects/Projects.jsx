import React from 'react'
import { CardContain, CardSubContainer, ProjectInfo, ImgProject} from './styles.ts'
import react from '../imgs/react.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import ts from '../imgs/ts.png'
import abf from '../imgs/abf.png'

function Projects() {
  return (
      <CardContain>
        <CardSubContainer>
            <ImgProject>
                <img src={abf} alt="" />
            </ImgProject>
            <ProjectInfo className='hoverEffect'>
              <p>ABF - ADVOCACIA</p>
              <div>
                <p><img src={react} alt="React" /></p>
                <p><img src={html} alt="HTML" /></p>
                <p><img src={css} alt="CSS" /></p>
                <p><img src={js} alt="JavaScript" /></p>
                <p><img src={ts} alt="TypeScript" /></p>
              </div>

            </ProjectInfo>
        </CardSubContainer>
        <CardSubContainer>
            <ImgProject>
                <img src={abf} alt="" />
            </ImgProject>
            <ProjectInfo className='hoverEffect'>
              <p>ABF - ADVOCACIA</p>
              <div>
                <p><img src={react} alt="React" /></p>
                <p><img src={html} alt="HTML" /></p>
                <p><img src={css} alt="CSS" /></p>
                <p><img src={js} alt="JavaScript" /></p>
                <p><img src={ts} alt="TypeScript" /></p>
              </div>
            </ProjectInfo>
        </CardSubContainer>
        <CardSubContainer>
            <ImgProject>
                <img src={abf} alt="" />
            </ImgProject>
            <ProjectInfo className='hoverEffect'>
              <p>ABF - ADVOCACIA</p>
              <div>
                <p><img src={react} alt="React" /></p>
                <p><img src={html} alt="HTML" /></p>
                <p><img src={css} alt="CSS" /></p>
                <p><img src={js} alt="JavaScript" /></p>
                <p><img src={ts} alt="TypeScript" /></p>
              </div>
            </ProjectInfo>
        </CardSubContainer>
        <CardSubContainer>
            <ImgProject>
                <img src={abf} alt="" />
            </ImgProject>
            <ProjectInfo className='hoverEffect'>
              <p>ABF - ADVOCACIA</p>
              <div>
                <p><img src={react} alt="React" /></p>
                <p><img src={html} alt="HTML" /></p>
                <p><img src={css} alt="CSS" /></p>
                <p><img src={js} alt="JavaScript" /></p>
                <p><img src={ts} alt="TypeScript" /></p>
              </div>
            </ProjectInfo>
        </CardSubContainer>
      </CardContain>
  )
}

export default Projects