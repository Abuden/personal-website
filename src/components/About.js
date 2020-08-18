import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ReactSVG } from 'react-svg';

import Me from "../assets/img/Me.jpg";

import CameraSVG from '../assets/svg/photo-camera.svg'
import Database from '../assets/svg/database.svg'
import WebDev from '../assets/svg/browser-26.svg'
import SAP from '../assets/svg/server.svg'
import Scripting from '../assets/svg/laptop-42.svg'
import Testing from '../assets/svg/browser-18.svg'

const Container = styled.div.attrs(props => ({
  className: `flex flex-column`
}))``

const AboutContainer = styled.div.attrs(props => ({
  className: `flex flex-wrap w-80-ns center mt6 mb5-ns`
}))``

const ImgDiv = styled.div.attrs(props => ({
  className: `tr-l tc pr5-l w-50-l w-100`
}))``

const Img = styled.img.attrs(props => ({
  className: `w-70 w-100-m outline`,
  src: props => props.src
}))``

const AboutDiv = styled.div.attrs(props => ({
  className: `flex flex-column w-50-l w-100 pa3`
}))``

const AboutTitle = styled.p.attrs(props => ({
  className: `f3 tl-ns tc fw3 tracked` 
}))``

const AboutSubtitle = styled.p.attrs(props => ({
  className: `f4 tj fw3 tracked pb2`
}))``

const CarouselDiv = styled.div.attrs(props => ({
  className: `bg-near-white tl-ns tc pa3 w-50-ns w-100 `
}))``

const CarouselTitle = styled.p.attrs(props => ({
  className: `f3`
}))``

const CarouselList = styled.ul.attrs(props => ({
  className: `list`
}))`
  margin: 0;
  padding: 0;
`

const CarouselListEntry = styled.li.attrs(props => ({
  className: `f4 fw3`
}))`
  margin: 0;
  padding: 0;
`

export default function About() {

  const [slideText] = useState([
    {
      svg: WebDev,
      title: 'Web Development',
      subtitle: ['MERN', 'Spring', 'Maven', 'Docker', 'MySQL', 'PosgresSQL']
    },
    {
      svg: Database,
      title: 'Big Data',
      subtitle: ['Spark', 'Hadoop']
    },
    {
      svg: SAP,
      title: 'SAP',
      subtitle: ['Certified SAP HANA Consultant', 'SAP Fiori', 'SAP Analytics Cloud']
    },
    {
      svg: CameraSVG,
      title: 'Photography',
      subtitle: ['I take pictures']
    },
    {
      svg: Scripting,
      title: 'Scripting',
      subtitle: ['BeautifulSoup', 'Bash']
    },
    {
      svg: Testing,
      title: 'Testing',
      subtitle: ['Selenium', 'Robot Framework', 'Jenkins', 'JUnit']
    }
  ])

  const [aboutSubtitle] = useState([
    {
      subtitle: 'Born in Penang, Malaysia, now currently living and studying in Ireland. I am a final year student at UCD Computer Science and I am currently a SAP SWE Intern. I got into coding from a young age after watching a video on it.'
    },
    {
      subtitle: 'I\'m currently interested in pursuing a masters and open to a full time position after graduation too.'
    },
    {
      subtitle: 'I really enjoy cooking, playing video games, photography, programming, travelling and doing volunteering work. I am also very big into personal development, and occasionally do various talks on programming.'
    },
    {
      subtitle: 'Reach out to me if you want to collaborate or discuss opportunities :)'
    }
  ])

  return (  
    <Container>
      <AboutContainer>
        <ImgDiv>
          <Img src={Me}/>
        </ImgDiv>
        <AboutDiv>
            <AboutTitle><b>Hi, I'm Braddy</b>, a computer science student interested in creating solutions that improve daily lives</AboutTitle>
            {
              aboutSubtitle.map((elem, key) => {
                return (
                  <AboutSubtitle key={key}>{elem.subtitle}</AboutSubtitle>
                )
              })
            }
        </AboutDiv>
      </AboutContainer>
      <Carousel
        className='mb3'
        dots
        clickToChange
        slidesPerPage={4}
        infinite
        autoPlay={3000}
        animationSpeed={2000}
        breakpoints={{
          640: {
            slidesPerPage: 1
          },
          900: {
            slidesPerPage: 2
          }
        }}
      >
        {
          slideText.map((elem, key) => {
            return (
              <CarouselDiv key={key}>
                <ReactSVG 
                  src={elem.svg}
                  beforeInjection={svg => {
                    svg.setAttribute('style', 'width: 40px')
                  }}
                />
                <CarouselTitle>
                  {elem.title}
                </CarouselTitle>
                <CarouselList>
                  {
                    elem.subtitle.map((entry, key) => {
                      return (
                        <CarouselListEntry key={key}>
                          {entry}
                        </CarouselListEntry>
                      )
                    })
                  }
                </CarouselList>
            </CarouselDiv>
            )
          })
        }
      </Carousel>
    </Container>
  );
}