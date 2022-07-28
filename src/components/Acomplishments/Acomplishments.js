import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import useSWR from 'swr';
const fetcher = async () => {
  const response = await fetch('https://api.github.com/users/0xwerz')
  const data = await response.json()
  return data
}
function Achievements(){
  const {data, error} = useSWR('Followers',fetcher)
  if(!data) return "loading..."
  const Achievementsmap = [
    
    { number: "#100", text: 'Top 100 on hack the box'},
    { number: data.public_repos, text: 'Open Source Projects'},
    { number: data.followers, text: 'Github Followers', },
    { number: 18, text: 'Github Stars', }
]
  return(
    
    <Section>
  <SectionTitle>Achievements</SectionTitle>
  <Boxes>
    {Achievementsmap.map((card, index) => (
      <Box key={index}>

        <BoxNum>{`${card.number}`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>

  </Section>
  )
}

    


export default Achievements;
