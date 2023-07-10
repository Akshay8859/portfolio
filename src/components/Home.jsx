import { Container, Stack,Image, Heading ,Box} from '@chakra-ui/react'
import React from 'react'
import myImg from '../assets/myimage.jpg'
import Typewriter from 'typewriter-effect'
import bg from '../assets/bgimage.jpg'
const Home = () => {
  return (
   <Stack 
   flexDirection={['column-reverse','row']} 
   h={'90vh'} 
   id='home' 
   justifyContent={'space-evenly'}
   alignItems={'center'}
   p={5}
   bgImage={bg} 
   w={'100vw'}>
    <Container m={0}  p={5}>
        <Heading fontSize={['1.5rem','4rem']} color={'white'} >Hi,I Am <br />Akshay Bartwal,</Heading>
        <Typewriter 
            options={{
                strings:["A Developer"," An Engineer","A Learner"],
                autoStart:true,
                loop:true,
                wrapperClassName:'typewriter'
            }}
        />
    </Container>
    <Box p={['5px',5]} bgColor={'grey'} display={'inline-block'} borderRadius={'10px'}> 
        <Image src={myImg} h={'50vmin'}  objectFit={'contain'}/>
    </Box>
   </Stack>
  )
}

export default Home
