import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import BlogSVG from '../assets/svg/032-document-1.svg'
import QuizSVG from '../assets/svg/005-checklist-2.svg'
import EcommerceSVG from '../assets/svg/shopping-cart.svg'
import FaceDetectSVG from '../assets/svg/025-conference-2.svg'

const Container = styled.div.attrs({
    className: `flex flex-column`
})``

const ProjectDiv = styled.div.attrs({
    className: `flex-auto-ns flex flex-wrap pa3`
})``

const Card = styled.div.attrs({
    className: `fl w-20-ns w-100 pa2 center`
})``

const Link = styled.a.attrs({
    className: `db link dim tc`,
    href: props => props.href,
    target: `_blank`
})``

const DescList = styled.dl.attrs({
    className: `mt2 f6 lh-copy`
})``

const ProjectName = styled.dd.attrs({
    className: `ml0 black truncate w-100 f5`
})``

const ProjectType = styled.dd.attrs({
    className: `ml0 gray truncate w-100 f6`
})``

const LinkDiv = styled.div.attrs({
    className: `tc mv4`
})``

const GithubLink = styled.a.attrs({
    className: `fw3 f3 pointer link dim black`,
    href: `https://github.com/yeohbraddy?tab=repositories`,
    target: `_blank`
})``

export default function Project() {

    const [projects, useProjects] = useState([
        {
            href: 'https://blog.yeohbraddy.com',
            imgSrc: BlogSVG,
            projectName: 'Blog',
            projectType: 'Gatsby'
        },
        {
            href: 'https://www.quiz.yeohbraddy.com/',
            imgSrc: QuizSVG,
            projectName: 'AWS CP Quiz',
            projectType: 'React'
        },
        {
            href: 'https://shop-braddy.herokuapp.com/',
            imgSrc: EcommerceSVG,
            projectName: 'E-Commerce',
            projectType: 'React | NodeJS | Firebase'
        },
        {
            href: 'https://smart-brain-8562.herokuapp.com/',
            imgSrc: FaceDetectSVG,
            projectName: 'Face Detection',
            projectType: 'React | NodeJS | PostgresSQL'
        }
    ])

    return (
        <Container>
            <ProjectDiv>
                {
                    projects.map(elem => {
                        return (
                            <Card>
                                <Link href={elem.href}>
                                <ReactSVG src={elem.imgSrc}/>
                                <DescList>
                                    <ProjectName>{elem.projectName}</ProjectName>
                                    <ProjectType>{elem.projectType}</ProjectType>
                                </DescList>
                                </Link>
                            </Card>
                        )
                    })
                }
            </ProjectDiv>
            <LinkDiv>
                <GithubLink>
                    View more on Github
                </GithubLink>
            </LinkDiv>
        </Container>
    )
}