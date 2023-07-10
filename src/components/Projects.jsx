import { Box, Button, Stack, Heading, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import quiz from '../assets/quiz.png'
const Projects = () => {
  return (
    <Box id='projects' bgColor={'#090c31'} h={'fit-content'} borderTop={'1px solid white'} p={'30vh 0'}>
      <Heading
        textAlign={'center'}
        color={'white'}
        textDecoration={'underline'}
        marginBottom={10}
        id='skills'
        textTransform={'uppercase'}
      >
        Project
      </Heading>
      <Stack backdropFilter={'blur(10px)'} border={'1px solid white'} justifyContent={'space-evenly'} color={'white'} alignItems={'center'} flexDirection={['column', 'row']} borderRadius={'10px'} p={'10px'} w={'80vw'} m={'auto'} boxShadow={['5vw 5vw grey', '30px 30px  grey']}>

        <Img src={quiz} boxSize={['60%', '27%']} objectFit={'contain'} transition={'all 0.5s'} css={{
          "&:hover": {
            filter: 'invert(1)'
          }
        }}/>
        <VStack>
          <Text textAlign={'center'}
            letterSpacing={'2px'}
            fontSize={['0.8rem', '1rem']}
            fontStyle={'italic'}
            fontWeight={'bold'}
            textDecoration={'underline'}>
            Multiplayer Quiz
          </Text>
          <Text textAlign={'center'}
            fontStyle={'italic'}
            letterSpacing={'2px'}
            fontSize={['0.7rem', '1rem']}
          >
            A full-stack multiplayer quiz game website which allows multiple users to play quiz at real time.
            Socket.io is used in this project's backend to make a real time connection between two or more than two users.
          </Text>
          <a target='_blank' rel='noreferrer' href={'https://github.com/Akshay8859/quiz_app'}>
            <Button colorScheme={'whatsapp'} size={['md', 'lg']}>Code</Button>
          </a>

        </VStack>
      </Stack>

    </Box>
  )
}

export default Projects
