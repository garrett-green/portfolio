import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem,
  ShowMoreButton
} from "../../shared/styles/styled-components";

import { interestingFacts } from "../../data/interesting";

class Intersting extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      text: "Show me more!"
    }

  }

  handleClick() {
    this.setState({
      show: !this.state.show,
      text: "That's Enough!"
    });
  }

  render() {
    return (
      <Section>
        <SectionTitle>A Little More About Me</SectionTitle>
        <ShowMoreButton onClick={() => this.handleClick()}>
          { this.state.show ? "That's Enough!" : "Show me more!" }
        </ShowMoreButton>
        <ToggleDisplay show={this.state.show}>
          <UnorderedList>
            {interestingFacts.map(fact => (
              <ListItem key={fact.description}>{fact.description}</ListItem>
            ))}
          </UnorderedList>
        </ToggleDisplay>
      </Section>
    );
  }
}

export default Intersting;
