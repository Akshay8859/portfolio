import { Box, Container, HStack, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/image.jpg'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <Box bgColor={'#090c31'} h={['fit-content']} id='about' w={'100vw'} p={'20vh 0'}>
            <HStack
                justifyContent={['center', 'space-between']}
                paddingTop={4}
                paddingBottom={4}
            >
                <motion.div
                    initial={{
                        x: "-100%",
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <Container
                        p={[3, 10]}
                        m={['auto', 0]}
                        borderRightRadius={['0', '200px']}
                        minH={'90vh'}
                        minWidth={['90vw', '55vw']}
                        bgColor={'white'}
                    >
                        <Heading textAlign={'center'}
                            color={'090c31'}
                            fontSize={['1.5rem', '2rem']}
                            fontFamily={'cursive'}
                            letterSpacing={'3px'}
                            marginBottom={'10%'}
                            textDecoration={'underline'}
                        >
                            About Me?

                        </Heading>
                        <Box textAlign={'center'}
                            letterSpacing={'2px'}
                            fontSize={['0.8rem', '1rem']}
                            fontStyle={'italic'}
                            fontWeight={'bold'}>
                            <motion.p
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 1
                                }}>

                                Welcome to my portolio website. Here you can see my all skills and the work which i have done till now in the world of programming. <br /> Hi,My name is Akshay Bartwal and I am an emerging software engineer.I love to work with new technologies
                                which are used in tech industry. I have practiced DSA(data structures and algorithms)
                                in C++ and have  good problem solving skills. I also have good knowledge about full stack web Developement. My proficiency in multiple programming languages
                                and frameworks,incuding HTML, CSS, JavaScript, ReactJS, MongoDB and NodeJS allows me to develop front-end, back-end and database of websites and web applications.
                            </motion.p>
                        </Box>
                    </Container>
                </motion.div>

                <Container paddingTop={20} display={['none', 'block']} >
                    <Img src={img} />
                </Container>

            </HStack >
        </Box>
    )
}

export default About
