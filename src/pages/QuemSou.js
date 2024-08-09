import helloSticker from '../images/hello-sticker.png'
import textos from "../json/Textos.json"
import { Box, Heading, Highlight, Flex, Container, Text,useColorModeValue } from '@chakra-ui/react'
export default function QuemSou(/* props */) {
  const color = useColorModeValue('gray.100', 'gray.700')
  /* var idioma =props.idioma */
  return (
    <Container maxWidth="100vw" justifyContent="center">

      <Box maxWidth={["100vw","50vw"]} textAlign="center" m="auto">
        <Heading lineHeight='tall' fontSize={["2xl","4xl"]}>
          <Highlight
            query={['learn','never stop trying']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'pink.400' }}
          >
            When creating, fail or succeed,but always learn and never stop trying
          </Highlight>
        </Heading>
      </Box>

        <Flex direction={["column-reverse","row"]} maxWidth="80vw" bg={color} m="auto">
          <Box p={["10px","100px"]} w="100%">
            <Heading as="h2" size="lg" noOfLines={1}>About Me</Heading>
            <Text fontSize='lg' p="10px">
            {textos['de']['texto-inicial']['texto_1']}   
            </Text>
          </Box>
          <Box w={["100%","80%"]} p="20px" textAlign='-webkit-center' alignSelf="center">
            <img src={helloSticker} alt="sticker saying hello"></img>
          </Box>
        </Flex>
    </Container>
  )
}