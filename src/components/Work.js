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
                    role: "Demonstrator",
                    place: "UCD",
                    location: "Belfield",
                    duration: "Sept 2019 - Dec 2019",
                    link: "https://www.cs.ucd.ie/",
                    details: [
                        "•	Demonstrated Introduction to Programming I (C) and Introduction to Databases (MySQL)",
                        "•	Supported student learning objectives through personalized and small group assistance.",
                        "•	Coordinated with a team to tutor a class of 100 students",
                        "•	Oversaw students in classroom and common areas to monitor, enforce rules and support lead teacher.",
                        "•	Used behaviour modelling and specialized teaching techniques to share and reinforce social skills."
                    ]
                },
                {
                    role: "SAP STAR Intern",
                    place: "SAP Ireland",
                    location: "Citywest",
                    duration: "May 2019 - Current",
                    link: "https://www.sap.com/index.html",
                    details: [
                        "• Resolved system and customer issues by troubleshooting and providing effective solutions by taking 5 incidents per day.",
                        "• Tested product components to identify root causes of issues.",
                        "• Escalated complex problems such as failure of interdependent nodes in large production environments to management for resolution.",
                        "• Managed customer relationships by delivering prompt responses to questions.",
                        "• Provided technical troubleshooting and problem solving for clients with installed equipment/system issues."
                    ]
                },
                {
                    role: "Assistant Manager",
                    place: "Apache Pizza and Lam's Cuisine",
                    location: "Dun Laoghaire",
                    duration: "Jun 2018 - Sep 2018",
                    link: "https://www.lamschinesedelivery.com",
                    details: [
                        "•	Monitored cash intake and deposit records, increasing accuracy and reducing discrepancies.",
                        "•	Supported staff development and goal attainment by focusing on skill development and job satisfaction.",
                        "•	Coached team on effective upselling and cross-selling methods leading to 15% increase in sales.",
                        "•	Monitored employee performance and developed improvement plans",
                        "•	Submitted reports to senior management to aid in business decision-making and planning."
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