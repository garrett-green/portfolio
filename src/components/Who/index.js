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
      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>Prior to pivoting my career towards software engineering, I worked at a major advertising agency and launched a <a style={{outline: 'none', color: '#1E7046', textDecoration: 'none' }} href="https://www.businessinsider.com/its-so-cold-in-europe-that-people-are-skating-on-amsterdams-canals-2018-3" target="_blank" rel="noopener" >freelance writing career</a>. After working with Fortune-100 brands at <a style={{outline: 'none', color: '#1E7046', textDecoration: 'none' }} href="https://vaynermedia.com/" target="_blank" rel="noopener" >VaynerMedia</a>, serving as Gary Vaynerchuk’s assistant, and <a style={{outline: 'none', color: '#1E7046', textDecoration: 'none' }} href="https://brobible.com/author/garrettwilegreen/" target="_blank" rel="noopener" >writing for UPROXX Media</a> I longed for a more challenging career that would allow me to grow and evolve as a creative professional.</p>

      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>After some introductory, online JavaScript classes I was hooked; I knew software engineering was the career path for me. In September 2018, I enrolled in <a style={{outline: 'none', color: '#1E7046', textDecoration: 'none' }} href="https://www.fullstackacademy.com/software-engineering-immersive" target="_blank" rel="noopener" >Fullstack Academy’s full-time Software Engineering Immersive program</a>. Upon graduating from Fullstack in December 2018, I was offered a Teaching Fellowship role to help the next cohort of students in their journey to software engineering.</p>

      <p style={{fontSize: '18px', fontWeight: '300', lineHeight: '20px'}}>Now, with my education and teaching experiences from Fullstack Academy, I am looking for an opportunity to grow as a developer while utilizing my professional experience of working in a team environment.</p>
    </Section>
  );
};

export default Who;
