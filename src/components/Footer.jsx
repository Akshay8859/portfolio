import {  HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillInstagram, AiFillPhone, AiFillGithub, AiFillMail } from 'react-icons/ai'

const Footer = () => {
  const icons = [{ 'icon': AiFillGithub, 'text': 'Akshay8859','link':'https://github.com/Akshay8859' },
  { 'icon': AiFillInstagram, 'text': 'akshay.bartwal','link':'https://www.instagram.com/akshay.bartwal' },
  { 'icon': AiFillMail, 'text': 'akshayakku7300@gmail.com','link':'mailto:akshayakku7300@gmail.com' },
  { 'icon': AiFillPhone, 'text': '9193035857','link':'tel:+919193035857' }];
  return (
    <VStack id='contact' h={'fit-content'} bgColor={'#090c20'} p={'20vh 10px 0px 10px'}  >
      <HStack justifyContent={'space-evenly'} w={'100%'} flexWrap={'wrap'} gap={'2rem'} marginBottom={'10vh'}>
        {
          icons.map((item, i) => (
            <IconCollection Icon={item.icon} text={item.text} link={item.link} key={i} />
          ))
        }
      </HStack>
      <Text textAlign={'center'} color={'white'} fontSize={['0.7rem', '1rem']}>
        Akshay Bartwal © All rights reserved
      </Text>
    </VStack>
  )
}
const IconCollection = ({ Icon, text,link }) => {
  return (
    <a target={'_blank'} rel={'noreferrer'} href={link}>
      <VStack bgColor={'ButtonFace'} w={['80vw','290px']} p={'5px'} h={'100px'} transition={'all 0.3s'} css={{
        "&:hover": {
          transform: "scale(1.1)",
          filter: 'invert(1)',
          cursor: 'pointer'
        }
      }}>
        <Icon fontSize={'6vmax'} />
        <Text color={'black'} wordBreak={'break-word'} textAlign={'center'}>{text}</Text>
      </VStack>
    </a>
  );
}
export default Footer
