import React from 'react';
import data from '../data.json';
import Hero from '../components/Hero';
import { Box } from '@chakra-ui/react';
import Container from '../components/Container';
import Card from '../components/Card';

export default function IndexPage() {
  return (
    <Container>
      <Hero />
      <Box
        maxW="container.lg"
        display="grid"
        margin="0 auto"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="4"
        padding="4"
      >
        {data.map((project) => (
          <Card key={project.day} project={project} />
        ))}
      </Box>
    </Container>
  );
}
