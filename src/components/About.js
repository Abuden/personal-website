import React from 'react';
import styled from 'styled-components';

import Topic from './Topic';

import Me from '../assets/img/me.jpg';
import { checkPropTypes } from 'prop-types';
import { throwStatement } from '@babel/types';

const AboutContainer = styled.div.attrs({
  className: `flex flex-column avenir`
})``

const AboutSection = styled.div.attrs({
  className: `flex flex-column`
})``

const AboutParagraphs = styled.div.attrs({
  className: `center mw9`
})``

const TechSelection = styled.div.attrs({
  className: `flex bb b--light-silver pt4`
})``

const TechNav = styled.div.attrs({
  className: `w-100 tc center f5 fw4 dark-gray pointer dim db bg-animate hover-bg-moon-gray`
})``

const TechNavText = styled.p.attrs({
  className: ``
})``

const TechSection = styled.div.attrs({
  className: ``
})``

const TechList = styled.ul.attrs({
  className: `flex flex-column pt4`
})``

const TechListItem = styled.li.attrs({
  className: `list w-100 fw4 f5 gray pr4 tc`
})``

const Section = styled.div.attrs({
  className: `dtc v-mid pl3`
})``

const Subtitle = styled.div.attrs({
  className: `avenir tc fw2 f1 pt5 pb3 bb w-100 mb5 f2 tracked`
})``

const Paragraph = styled.p.attrs({
  className: `pt4 lh-copy fw4 dark-gray avenir tc f5`
})``

const TechParagraph = styled.p.attrs({
  className: `tc center lh-copy fw4 f4 dark-gray avenir tracked pt2`
})``

const AvatarContainer = styled.div.attrs({
  className: `center tc cover`,
  backgroundImage: props => props.url
})``

const Avatar = styled.img.attrs ({
  className: `ba bw1 b--gray shadow-5 br2 w-50 dib cover`,
  src: props => props.img
})``

const TopicSelected = `pt4 pr3 center f3 fw4 blue pointer dim .bg-light-silver`

/* Need to fix media queries here */

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          topics: [
            "Web",
            "Unix",
            "ML",
            "Game"
          ],
          web: [
            "React/Redux",
            "Express.js",
            "RESTful APIs",
            "Node.js",
            "PostgresSQL",
            "SAPUI5",
          ],
          unix: [
            "BASH",
            "Python",
            "C"
          ],
          ML: [
            "TensorFlow"
          ],
          game: [
            "JavaFX"
          ],
          currentTech: [ 
            "React/Redux",
            "Express.js",
            "RESTful APIs",
            "Node.js",
            "PostgresSQL",
            "Session Management",
            "SAPUI5"
          ],
          route: 0,
          activeClass: "pt4 pr3 center f1 pointer dim .bg-light-silver bb b-3",
          inactiveClass: "pt4 pr3 center f3 fw4 dark-gray pointer dim .bg-light-silver",
        }
    }

    onNavClick = (event) => {
      console.log(typeof Number(event.target.id)) 
      const route = Number(event.target.id)
      let currentTech = []

      switch(route) {
        case 0:
          currentTech = this.state.web
          break;
        case 1:
          currentTech = this.state.unix
          break
        case 2:
          currentTech = this.state.ML
          break;
        case 3:
          currentTech = this.state.game
          break;
        default:
          console.log("id didn't match cases")
          break;

      }

      currentTech.map((item, i) => {
        console.log(typeof i)
      })

      this.setState({
        currentTech: currentTech,
        route: route
      })
    }

    render() {
      const route = this.state.route
      const activeClass = this.state.currentActive
      const inactiveClass = this.state.inactiveClass
        return (
            <AboutContainer>

              <Subtitle> 
                About me 
              </Subtitle>

              <AvatarContainer>
                <Avatar img={Me}/>
              </AvatarContainer>

              <AboutSection>
                <AboutParagraphs>
                  <Paragraph>
                    I'm a UCD Computer Science student. Currently in my penultimate year, expecting to graduate in September 2021.
                  </Paragraph>

                  <Paragraph>
                    Goal is to continually improve as a software engineer and change people's life
                  </Paragraph>

                  <Paragraph>
                    > Love learning
                    <br/>
                    > Enthusiastic to solve complex challenges.
                    <br/>
                    > Passion for eating and cooking.
                    <br/>
                    > Self-taught photographer
                    <br/>
                    > Enjoy playing basketball and table tennis
                  </Paragraph>
                </AboutParagraphs>

                <TechParagraph>
                  <br/>
                  Technologies I've been working on recently
                </TechParagraph>

                <TechSelection>
                  {
                    this.state.topics.map((topic, i) => {
                      return (
                        <TechNav
                          key={i}
                          id={i}
                          className={i === route ? "bg-light-gray bb" : " "}
                          onClick={this.onNavClick}
                        >
                          <TechNavText>
                            {topic}
                          </TechNavText>
                        </TechNav>
                      )
                    })
                  }
                </TechSelection>

                <TechSection>
                  <TechList>
                    {
                      this.state.currentTech.map((tech, i) => {
                        return (
                          <TechListItem
                            key={i}
                          >
                            {tech}
                          </TechListItem>
                        )
                      })
                    }
                  </TechList>
                </TechSection>
              </AboutSection>

              <Section>
                
                {/*<Paragraph>
                  <b>Hello!</b> I'm Braddy, an UCD computer science student based in Dublin, Ireland. 
                  I was born in Penang, Malaysia. 
                </Paragraph>
                <Paragraph>
                  I enjoy problem solving and tackling complex challenges. The learning process of understanding the problem, and breaking it down into solvable chunks is the reason to my enjoyment. 
                  I enjoy learning in general, and in addition, enjoy teaching people what I learned and understood. 
                </Paragraph>
                <Paragraph>
                  I love cooking and eating food. I will eat and try anything. My favorite food is definitely fried chicken. Growing up, I was exposed to cooking a lot, and it's great to come from a family who are mostly chefs.
                  Super appreciative of friends and family who shared their cooking knowledge with me. If you also like cooking, lets cook together!
                </Paragraph>
                <Paragraph>
                  In addition to cooking, I love taking photos. I was always mesmerized by the talented photographers on social media. The beauty of capturing a moment while incorporating artistic and creative aspects is truly wonderful.
                </Paragraph>
                <Paragraph>
                  Sports. I play basketball, table tennis and badminton. I started learning table tennis recently. Super fun and fast paced sport. Would totally recommend.
                </Paragraph>
                <Paragraph>
                  My goal right now is to become a successful computer scientist. I would like to work on technologies that improve human life, be it optimizing algorithms, developing new products or ensuring nothing goes down.
                  I'm interested in AI, algorithms, automation and web development.
                </Paragraph>*/}
              </Section>
            </AboutContainer>
        )
    }
}