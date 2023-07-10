import { Button, HStack, Drawer, DrawerBody, DrawerOverlay, useDisclosure, Box, DrawerCloseButton, DrawerContent, DrawerHeader, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAngularjsLine, RiMenu3Fill } from 'react-icons/ri'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const links = [
        { 'link': '#home', 'name': 'Home' },
        { 'link': '#about', 'name': 'About' },
        { 'link': '#skills', 'name': 'Skills' },
        { 'link': '#projects', 'name': 'Project' },
        { 'link': '#contact', 'name': 'Contact' },]
    const fun1=()=>{
        setTimeout(()=>{
            onClose();
        },1000)
    }
    return (
        <>
            <HStack p={3} backgroundColor={'white'} justifyContent={'space-between'} position={'sticky'} top={0} zIndex={10}>
                <RiAngularjsLine fontSize={'4vmax'} bg/>
                <HStack gap={5} display={['none', 'flex']}>
                    {
                        links.map((item, i) => (
                            <Mybutton link={item.link} name={item.name} key={item.name} />
                        ))
                    }
                </HStack>
                <Button display={['flex', 'none']} colorScheme={'purple'} onClick={onOpen} justifyContent={'center'} borderRadius={'50%'} 
                >
                    <RiMenu3Fill fontSize={'1.3rem'} />
                </Button>
            </HStack>
            <Drawer isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={'xs'}
            >
                <DrawerOverlay />
                <DrawerContent backdropFilter={'auto'} background={'none'}  backdropBlur={'20px'} backdropInvert={'80%'}>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign={'center'} borderBottom={'1px solid black'}>Portfolio</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            {
                                links.map((item, i) => (
                                    <Box onClick={fun1} key={i}>
                                        <Mybutton link={item.link} name={item.name} />
                                    </Box>
                                ))
                            }
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    )
}
const Mybutton = ({ link, name }) => {
    return (
        <a href={link}>
            <Button
                variant={'unstyled'}
                css={{
                    "&:hover": {
                        color: "blue",
                        transform: "scale(0.9)"
                    }
                }}>
                {name}
            </Button>
        </a>
    );
}
export default Header
