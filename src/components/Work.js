import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.div.attrs({
    className: `mw9 center ph3-ns`
})``

const ColumnContainer = styled.div.attrs({
    className: `cf ph2-ns`
})``

const ListColumn = styled.div.attrs({
    className: `fl w-100 w-20-ns pa2`
})``

const Column = styled.div.attrs({
    className: `fl w-100 w-80-ns pa2`
})``

const ColumnContent = styled.div.attrs({
    className: `outline bg-white pv4`
})``

const WorkListContainer = styled.article.attrs({
    className: `pa3 pa5-ns`
})``

const WorkList = styled.ul.attrs({
    className: `list pl0 ml0 mw6 br2s`
})``

const ListEntry = styled.li.attrs({
    className: `ph3 pv4 avenir pointer dim`
})``

const Paragraph = styled.p.attrs({
    className: `lh-copy f3 dark-gray avenir`
  })``

const SAP = () => {
    return (
        <Paragraph>
            1
        </Paragraph>
    )
}

const Apache = () => {
    return (
        <Paragraph>
            2
        </Paragraph>
    )
}

const Jade = () => {
    return (
        <Paragraph>
            3
        </Paragraph>
    )
}

export default class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            work: [
                "SAP",
                "Apache Pizza",
                "Jade Royal"
            ],
            currentSelection: "0"
        }
    }

    onListClick = i => {
        let work = this.state.work
        this.setState({
            currentSelection: i
        })

        console.log(i)
    }

    displayWork = () => {
        let display = <p>hi</p>
        let currentSelection = this.state.currentSelection

        switch(currentSelection) {
            case "0":
                display = <p>
                    hi
                </p>
                break;

            case 1:
                display = Apache
                break;

            case 2:
                display = Jade
                break;
        }

        return display;
    }

    render() {
        return (
            <WorkContainer>
                <ColumnContainer>
                    <ListColumn>
                        <ColumnContent>
                            <WorkListContainer>
                                <WorkList>
                                {
                                    this.state.work.map((entry, i) => {
                                        return (
                                            <ListEntry
                                                key={i}
                                                onClick={this.onListClick.bind(this, i)}
                                            >
                                                {entry}
                                            </ListEntry>
                                        )
                                    })
                                }
                                </WorkList>
                            </WorkListContainer>
                        </ColumnContent>
                    </ListColumn>

                    <Column>
                        <ColumnContent>
                                <WorkListContainer>
                                    {this.displayWork}
                                </WorkListContainer>                                
                        </ColumnContent>
                    </Column>
                </ColumnContainer>
            </WorkContainer>
        )
    }
}