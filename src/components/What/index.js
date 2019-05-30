import React from "react";
import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { what } from "../../data/about";

const What = () => {
  return (
    <Section id="what">
      <SectionTitle>I am a...</SectionTitle>
      <UnorderedList>
        {what.map(item => (<ListItem key={item.text}>
          <a style={{outline: 'none', color: '#1E7046', textDecoration: 'none' }} href={item.link} target="_blank" rel="noopener">
            {item.text}
          </a>
        </ListItem>))}
      </UnorderedList>
    </Section>
  );
};

export default What;
