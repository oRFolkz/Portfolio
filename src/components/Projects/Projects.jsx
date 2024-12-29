import React from 'react'
import { CardContain, CardSubContainer, ProjectInfo, ImgProject} from './styles.ts'
import react from '../imgs/react.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import ts from '../imgs/ts.png'
import abf from '../imgs/abf.png'
import efood from '../imgs/efood.png'
import prime from '../imgs/prime.png'

function Projects() {
  return (
      <CardContain>
        <a rel="noreferrer" target="_blank" href="https://abf-react.vercel.app/">
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
        </a>
        <a rel="noreferrer" target="_blank" href="https://e-food-v1.vercel.app/">
          <CardSubContainer>
              <ImgProject>
                  <img src={efood} alt="" />
              </ImgProject>
              <ProjectInfo className='hoverEffect'>
                <p>eFood - EBAC</p>
                <div>
                  <p><img src={react} alt="React" /></p>
                  <p><img src={html} alt="HTML" /></p>
                  <p><img src={css} alt="CSS" /></p>
                  <p><img src={js} alt="JavaScript" /></p>
                  <p><img src={ts} alt="TypeScript" /></p>
                </div>
              </ProjectInfo>
          </CardSubContainer>
        </a>
        <a rel="noreferrer" target="_blank" href="https://prime-react-chi.vercel.app/">
          <CardSubContainer>
              <ImgProject>
                  <img src={prime} alt="" />
              </ImgProject>
              <ProjectInfo className='hoverEffect'>
                <p>Prime Burger</p>
                <div>
                  <p><img src={react} alt="React" /></p>
                  <p><img src={html} alt="HTML" /></p>
                  <p><img src={css} alt="CSS" /></p>
                  <p><img src={js} alt="JavaScript" /></p>
                  <p><img src={ts} alt="TypeScript" /></p>
                </div>
              </ProjectInfo>
          </CardSubContainer>
        </a>
      </CardContain>
  )
}

export default Projects