import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div.attrs({
    className: `flex flex-wrap`
})``

const CardContainer = styled.article.attrs({
    className: `br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center dim`
})``

const Img = styled.img.attrs({
    className: `db w-100 br2 br--top`,
    alt: "Photo of a kitten looking menacing.",
    src: "http://placekitten.com/g/600/300"
})``

const Card = styled.div.attrs({
    className: `pa2 ph3-ns pb3-ns`
})``

const TextContainer = styled.div.attrs({
    className: `dt w-100 mt1`
})``

const TitleContainer = styled.div.attrs({
    className: `dtc`
})``

const Title = styled.h1.attrs({
    className: `f5 f4-ns mv0`
})``

const Details = styled.p.attrs({
    className: `f6 lh-copy measure mt2 mid-gray`
})``

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/Abuden/repos?sort=pushed")
		.then(resp => resp.json())
        .then(result => {
            this.setState({
                repos: result
            })
        })
    }

    render() {
        let repos = this.state.repos
        return (
            this.state.repos.length === 0
            ? <h1> Loading </h1>
            : <ProjectContainer> {
                this.state.repos.map((repo, i) => {
                    return (
                        <CardContainer>
                            <Img/>
                            <Card>
                                <TextContainer>
                                    <TitleContainer>
                                        <Title>
                                            {repo.name}
                                        </Title>
                                    </TitleContainer>
                                                {/*<div class="dtc tr">
                                                    <h2 class="f5 mv0">$1,000</h2>
                                                </div>
                                                */}
                                </TextContainer>
                                <Details>
                                    If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                                    and touch water with paw then recoil in horror.
                                </Details>
                            </Card>
                        </CardContainer>
                    )
                })
            }
            </ProjectContainer>
        )
    }
}