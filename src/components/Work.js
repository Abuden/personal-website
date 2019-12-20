import React from 'react';
import styled from 'styled-components';
import PDF from './PDF';

const OuterFlexColumn = styled.div.attrs({
    className: `avenir flex flex-column pt7 pb5`
})``

const Subtitle = styled.div.attrs({
    className: `tc fw2 f1 pb3 bb w-100 mb5 f2 tracked`  
})``

const InnerFlexColumn = styled.div.attrs({
    className: `flex flex-column`
})``

const InnerFlexDiv = styled.div.attrs({
    className: `pb5`
})``

const InnerTitle = styled.div.attrs({
    className: `bg-moon-gray`
})``

const InnerTitleP = styled.p.attrs({
    className: `f3 f2-ns fw4 tracked v-mid tc`
})``

const InnerPlace = styled.a.attrs({
    className: `link pointer dim pt2 pb1 f3 f2-ns fw3 dark-gray`,
    textDecoration: `none`,
    href: props => props.url,
    target: "_blank"
})``

const InnerDuration = styled.div.attrs({
    className: `pb3 f4 f3-ns fw3 gray`
})``

const InnerList = styled.ul.attrs({
    className: `list center`
})``

const InnerListItem = styled.li.attrs({
    className: `f4 f3-ns fw3 pb4`
})``


export default class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 0,
            work: [
                {
                    role: "SAP STAR Intern",
                    place: "SAP Ireland",
                    location: "Citywest",
                    duration: "May 2019 - Current",
                    link: "https://www.sap.com/index.html",
                    details: [
                        "SAP HANA Product Support",
                        "SAP Fiori Product Support",
                        "Software Engineer on Augmented Analytics Team"
                    ]
                },
                {
                    role: "Assistant Manager",
                    place: "Apache Pizza and Lam's Cuisine",
                    location: "Dun Laoghaire",
                    duration: "Jun 2018 - Sep 2018",
                    link: "https://www.lamschinesedelivery.com",
                    details: [
                        "Do Profit & Loss account for end of each week using Excel",
                        "Assist manager by managing a team of 6 people to ensure highest of service",
                        "Ensure report is updated",
                        "Deal with any customer complaints and ensure problem is resolved peacefully"
                    ]
                },
                {
                    role: "Pizza Chef & Customer Service Specialist",
                    place: "Apache Pizza and Lam's Cuisine",
                    location: "Greystones",
                    duration: "Jun 2016 - Jun 2018",
                    link: "https://www.apache.ie",
                    details: [
                        "Prepared food in an efficient manner yet maintaining all safety and hygiene guidelines",
                        "Worked as a team with other chefs to carry out orders",
                        "Worked as a customer service specialist taking customers’ orders, dealing with complaints and being responsible for the money in the cashier",
                        "Ensured customers knew the price of their order, the duration of their delivery or collection, and the current deals we offered"
                    ]
                },
            ],
        }
    }

    render() {
        return (
            <OuterFlexColumn>

                <Subtitle>
                    Work
                </Subtitle>

                <InnerFlexColumn>
                    {
                        this.state.work.map((work, i) => {
                            return (
                                <InnerFlexDiv
                                    key={i}
                                >
                                    <InnerTitle>
                                        <InnerTitleP>
                                            {work.role}
                                        </InnerTitleP>
                                    </InnerTitle>
                                    <InnerPlace
                                        url={work.link}
                                    >
                                        {work.place}
                                    </InnerPlace>
                                    <InnerDuration>
                                        {work.duration}
                                    </InnerDuration>
                                    <InnerList>
                                        {
                                            work.details.map((entry, i) => {
                                                return (
                                                    <InnerListItem>
                                                        {entry}
                                                    </InnerListItem>
                                                )
                                            })
                                        }
                                    </InnerList>
                                </InnerFlexDiv>
                            )
                        })
                    }
                </InnerFlexColumn>
                <PDF/>
            </OuterFlexColumn>
        )
    }
}