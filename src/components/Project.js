import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div.attrs({
    className: `flex flex-column pt7`
})``

const CardContainer = styled.article.attrs({
    className: `br2 child w-100 vh-25 center h-100 bg-black-50`
})``

const Img = styled.img.attrs({
    className: `db w-100 br2 br--top`,
    alt: "Photo of a kitten looking menacing.",
    src: "http://placekitten.com/g/600/300"
})``

const Card = styled.div.attrs({
    className: `pa2 ph3-ns pb3-ns pt4`
})``

const TextContainer = styled.div.attrs({
    className: `dt w-100 mt1 top-6`
})``

const TitleContainer = styled.div.attrs({
    className: `dtc top-6`
})``

const Title = styled.h1.attrs({
    className: `fw4 f3 white avenir tc ttu`
})``

const Details = styled.p.attrs({
    className: `f4 fw4 lh-copy measure mt2 white avenir tc center`
})``

const Language = styled.p.attrs({
    className: `avenir white fw3 f3 tc`
})``

const Subtitle = styled.div.attrs({
    className: `avenir center fw3 f1 pt5 pb3 pl4 bb w-100 mb5`
})``

const ProjectSection = styled.div.attrs({
    className: `flex flex-wrap`
})``

const RepoContainer = styled.div.attrs({
    className: `center shadow-5 w-100 vh-25 pb3`
})``

const Link = styled.a.attrs({
    className: `link w-100 dt hide-child br2 cover bg-center pointer`,
    href: props => props.url,
    target: "_blank"
})``

const HiddenContent = styled.span.attrs({
    className: `white b dtc v-mid w-100 h-100 child bg-black-40 pa5 br2`
})``

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    /* Reached API limit */
    componentDidMount() {
        fetch("https://api.github.com/users/Abuden/repos?sort=pushed")
		.then(resp => resp.json())
        .then(result => {
            console.log(result)
            this.setState({
                repos: result
            })
        })
    }

    render() {
        let repos = this.state.repos
        return (
            <ProjectContainer>
                <Subtitle>
                    Projects
                </Subtitle>
                <ProjectSection>
                    {
                        repos.length === 0 
                        ? <h1>Loading</h1> 
                        :
                            repos.map((repo, i) => {
                                return (
                                    <RepoContainer>
                                        <Link 
                                            url={repo.html_url}
                                            style={{backgroundImage: "url('http://mrmrs.github.io/photos/012.jpg')"}}
                                        >
                                            <CardContainer>
                                                <Card>
                                                    <TextContainer>
                                                        <TitleContainer>
                                                            <Title>
                                                                {repo.name}
                                                            </Title>
                                                        </TitleContainer>
                                                    </TextContainer>
                                                    <Details>
                                                        {repo.description}
                                                    </Details>
                                                    <Language>
                                                        {repo.language}
                                                    </Language>
                                                </Card>        
                                            </CardContainer>
                                        </Link>
                                    </RepoContainer>
                                )
                            })
                    }
                </ProjectSection>
            </ProjectContainer>
        )
    }
}