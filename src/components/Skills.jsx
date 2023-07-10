import { Box, Heading, Img, HStack, VStack, Text, Stack, keyframes } from '@chakra-ui/react'
import React from 'react'
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, } from 'react-icons/di'
import { SiMongodb, SiExpress } from 'react-icons/si'
import frontend from '../assets/frontend.jpg'
import backened from '../assets/backened.jpg'
import database from '../assets/database.jpg'
import { motion } from 'framer-motion'
let a = 0;
const Skills = () => {
  return (
    <Box bgColor={'#090c31'} paddingTop={5} h={'fit-content'}>
      <Heading
        textAlign={'center'}
        color={'white'}
        textDecoration={'underline'}
        marginBottom={10}
        id='skills'
      >
        SKILLS
      </Heading>
      <VStack p={'10px'}>
        <VStack gap={'10vh'}>
          <Stack
            flexDirection={['column', 'row']}
            justifyContent={'space-between'}
            w={'100vw'}
            alignItems={'center'}
          >
            <Field name={'FRONTEND'} image={frontend} size={30} />
            <MyComponent head={'FRONTEND'} arr={[
              { 'name': 'HTML', 'Icon': DiHtml5 },
              { 'name': 'CSS', 'Icon': DiCss3 },
              { 'name': 'JSCRIPT', 'Icon': DiJavascript1 },
              { 'name': 'REACT', 'Icon': DiReact }]} />
          </Stack>
          <Stack
            flexDirection={['column-reverse', 'row']}
            justifyContent={'space-between'}
            w={'100vw'}
            alignItems={'center'}
          >
            <MyComponent head={'DATABASE'} arr={[{ 'name': 'MONGODB', 'Icon': SiMongodb }]} po='left' />
            <Field name={'DATABASE'} image={database} size={25} po="right" />
          </Stack>
          <Stack
            flexDirection={['column', 'row']}
            justifyContent={'space-between'}
            w={'100vw'}
            alignItems={'center'}
          >
            <Field name={'BACKEND'} image={backened} size={25} />
            <MyComponent arr={[{ 'name': 'EXPRESS', 'Icon': SiExpress }, { 'name': 'NODE JS', 'Icon': DiNodejsSmall }]}
              head={'BACKEND'} />
          </Stack>
        </VStack>
      </VStack>
    </Box>

  )
}
const Field = ({ name, image, size, po = "left" }) => {
  return (
    <VStack
      bgColor={'white'}
      p={2}
      h={'fit-content'}
      borderRadius={'10px'}
      marginLeft={po === 'left' ? '5vw' : '0vw'}
      marginRight={po === 'right' ? '5vw' : '0vw'}
      borderBottom={'6px solid grey'}>
      <Box as={motion.div}
        w={['60vw', `${size}vw`]}
        h={'fit-content'}
      >
        <Img src={image} objectFit={'contain'} />
        <Text fontWeight={'bold'} textAlign={'center'} bgColor={'white'} marginTop={'2vh'}
          borderRadius={'10px'}
          fontSize={'1rem'}
          p={2}> {name}</Text>
      </Box>
    </VStack>
  );
}
const IconCard = ({ name, Icon }) => {
  a += 0.3
  const updown = keyframes`
    to{
      transform:translateY(20px)
    }`;
  const updownAnimation = `${updown} 1s linear ${a}s infinite alternate`
  return (
    <motion.div
      initial={{
        x: `${name}`==='MONGODB'? '-100%':'100%',
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition:{
          type: 'spring',
          stiffness: 300,
        }
      }}
      whileTap={{
        rotate:-360,
        scale:1.2
      }}

    >
      <VStack
        boxSize={['100px', '150px']}
        bgColor={'white'}
        borderRadius={'50%'}
        justifyContent={'center'}
        transition={'all 0.7s'}
        filter={'drop-shadow(10px 10px 10px black)'}
        animation={updownAnimation}
        css={{
          "&:hover": {
            filter: 'invert(1) drop-shadow(10px 10px 10px black)'
          }
        }}>
        <Icon fontSize={'5vmax'} />
        <Text fontWeight={'900'} fontStyle={'italic'} fontSize={['0.9rem', '1.2rem']}>
          {name}
        </Text>
      </VStack>
    </motion.div>
  );
}
const MyComponent = ({ arr, po = 'right', head }) => {
  return (
      <VStack
        m={['auto', 0]}
        borderLeftRadius={['10px', po === 'right' ? '200px' : 0]}
        borderRightRadius={['10px', po === 'left' ? '200px' : 0]}
        minH={['60vh', '70vh']}
        w={['90vw', '60vw']}
        bgColor={'blueviolet'}
        justifyContent={'center'}
        gap={'30px'}
        p={'20px'}
        overflowX={'hidden'}
      >
        <Heading
          color={'white'}
          textDecoration={'underline'}
        >
          {head}
        </Heading>

        <HStack
          gap={'2rem'}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          {
            arr.map((Item, index) => (
              <IconCard name={Item.name} Icon={Item.Icon} key={index} />
            ))
          }
        </HStack>
      </VStack>
  );
}
export default Skills
