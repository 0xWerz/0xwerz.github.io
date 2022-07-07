import React from 'react';

import { Section, SectionDivider, SectionTitle, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CtfStyles';
import { HtbCtf } from '../../constants/constants';


const Ctf = () => (
  
    <Section nopadding id="machines">
      <SectionDivider />
      <SectionTitle>Machines - HTB</SectionTitle>
      <GridContainer>
        {HtbCtf.map((p, i) => {
          return (
            
            <BlogCard key={i}>
            <Img src={p.image} />
           {/*}   <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
            </TitleContent>   */}
                            <Hr />

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
                <ExternalLinks href={p.source} target="_blank" >Writeup</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
  
  export default Ctf;