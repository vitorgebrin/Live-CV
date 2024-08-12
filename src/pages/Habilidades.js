//import { createApi } from 'unsplash-js';
import React from 'react'
import codingSticker from "../images/coding-sticker.png"
import textos from "../json/Textos.json"
import habilidadesText from "../json/Habilidades.json"
import { Progress, Box, Container, Flex, Button, Heading, Text, useColorModeValue, Spacer } from '@chakra-ui/react'

export default function Habilidades(props) {
  var idioma = props.idioma
  const colorSec = useColorModeValue('gray.100', 'gray.700')
  const [val,setVal] =React.useState(0)
  React.useEffect(() =>{
      setInterval(function(){
          setVal(1)
      }, 1000);
},[] )
  return (
    <Container maxWidth="100vw" justifyContent="center" py="100px">
      <Flex direction={["column", "row"]} maxWidth="80vw" bg={colorSec} m="auto">
      <Box w={["100%","80%"]} p="20px" textAlign='-webkit-center' alignSelf="center">
            <img src={codingSticker} alt="sticker saying hello"></img>
          </Box>
        <Box p={["10px", "100px"]} w="100%">
          <Spacer height="70px" />
          <Heading as="h2" size="lg" noOfLines={1}>{habilidadesText[idioma]["skills"]["title"]}</Heading>
          <Box marginLeft="10px" >
            <Text fontSize='lg'>
              HTML5, CSS3 & JS
            </Text>
            <Progress hasStripe isAnimated={true} colorScheme='pink' value={64*val} marginLeft="20px" className='progressBar'/>
          </Box>
          <Box marginLeft="10px" >
            <Text fontSize='lg'>
              SwiftUI & UIKit (iOS)
            </Text>
            <Progress hasStripe isAnimated={true} colorScheme='pink' value={90*val} marginLeft="20px" className='progressBar'/>
          </Box>
          <Box marginLeft="10px" >
            <Text fontSize='lg'>
            React / React Native
            </Text>
            <Progress hasStripe isAnimated={true} colorScheme='pink' value={80*val} marginLeft="20px" className='progressBar'/>
          </Box>
          <Box marginLeft="10px" >
            <Text fontSize='lg'>
            Excel & Visual Basic
            </Text>
            <Progress hasStripe isAnimated={true} colorScheme='pink' value={64*val} marginLeft="20px" className='progressBar'/>
          </Box>
          <Box marginLeft="10px" >
            <Text fontSize='lg'>
            Python, PBI, & SAP
            </Text>
            <Progress hasStripe isAnimated={true} colorScheme='pink' value={64*val} marginLeft="20px" className='progressBar'/>
          </Box>
        </Box>

      </Flex>
    </Container>
  )
}