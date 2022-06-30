import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CtfStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CtfMarkdown } from '../../constants/constants';


const Ctf = () => (
  
    <Section nopadding id="machines">
      <SectionDivider />
      <SectionTitle main>Machines</SectionTitle>
      <GridContainer>
        {CtfMarkdown.map((p, i) => {
          return (
            
            <BlogCard key={i}>
            <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.provider}</CardInfo>
              <div>
                <TitleContent></TitleContent>
                <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.source}>Writeup</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
  
  export default Ctf;