import React from 'react';
import styled from 'styled-components';

import Me from '../assets/img/me.jpg';

const AboutContainer = styled.div.attrs({
  className: `dt mw10 center pv4 pv5-m pv6-ns`
})``

const Section = styled.div.attrs({
  className: `dtc v-mid pl3`
})``

const Paragraph = styled.p.attrs({
  className: `lh-copy f3 dark-gray avenir`
})``

/* Need to fix media queries here */

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <AboutContainer>
              <div class="dtc v-mid">
                <img src={Me} alt="A bright blue sky" class="mw6" />
              </div>
              <Section>
                <Paragraph>
                  Hello! I'm Braddy, a computer science student based in Dublin, Ireland. 
                  I enjoy problem solving and tackling complex challenges. 
                </Paragraph>
                <Paragraph>
                  I was born in Penang, Malaysia, but am currently living in Ireland.
                </Paragraph>
                <Paragraph>
                  I love cooking and eating food. I will consume anything and always willing to try new food!
                </Paragraph>
                <Paragraph>
                  In addition to cooking, I love taking photos, especially of food. A really good picture
                  is mesmerizing.
                </Paragraph>
              </Section>
            </AboutContainer>
        )
    }
}