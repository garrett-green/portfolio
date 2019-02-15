import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { textLinks } from "../../data/socialLinks";

const Who = () => {
  return (
    <Section id="who">
      <SectionTitle>About Me</SectionTitle>
      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>Prior to pivoting my career towards software development, I worked at a major advertising agency and launched a freelance writing career. After working with Fortune-100 brands at VaynerMedia, serving as Gary Vaynerchuk’s assistant, and writing for UPROXX Media I longed for a more challenging career that would allow me to grow and evolve as a creative professional.</p>

      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>After some introductory, online JavaScript classes I was hooked; I knew software engineering was the career path for me. In September 2018, I enrolled in Fullstack Academy’s full-time Software Engineering Immersive program. Upon graduating from Fullstack in December 2018, I was offered a Teaching Fellowship role to help the next cohort of students in their journey to software engineering.</p>

      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>Now, with my education and teaching experiences from Fullstack Academy, I am looking for an opportunity to grow as a developer while utilizing my professional experience of working in a team environment.</p>
      {/* <UnorderedList>
        {textLinks.map(link => (
          <ListItem key={link.href}>
            <UnderlinedLink target="_blank" href={link.href} rel="noopener">
              {link.title}
            </UnderlinedLink>
          </ListItem>
        ))}
      </UnorderedList> */}
    </Section>
  );
};

export default Who;
