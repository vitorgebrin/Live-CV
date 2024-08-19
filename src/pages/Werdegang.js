import React, { useEffect } from 'react';
import werdegangTexts from "../json/Werdegang.json"
import { Box, Heading, Highlight, Flex, Container, Text, useColorModeValue, Button, Spacer } from '@chakra-ui/react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Card, Stack, CardBody, CardFooter,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Werdegang(props) {

const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 3,
})
var idioma = props.idioma

//part added to manage the visibility


const cardRef = React.useRef()
useEffect(()=> {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.intersectionRatio > 0.2 & entry.intersectionRatio < 0.4) { setActiveStep(2)} 
    else if (entry.intersectionRatio > 0.7 & entry.intersectionRatio < 0.9) { setActiveStep(3)}
    if (entry.intersectionRatio < 0.1) { setActiveStep(1)} 
    /* setVisibilidade(entry.isIntersecting) */
  },{ threshold: [0,0.3,0.8] })
  observer.observe(cardRef.current)
},[setActiveStep])
//end of part


return (
    <Container maxWidth="100vw" id='werdegang' >
<Container maxWidth={["100vw", "70vw"]} justifyContent="center" >
<Heading lineHeight='tall' fontSize={["2xl","4xl"]} textAlign="center">
           {werdegangTexts[idioma]["sectionTitle"]["title"]}
        </Heading>
        <Spacer height="60px" />
    <Tabs isFitted variant='enclosed' colorScheme='pink' >
        <TabList>
            <Tab onClick={() => setActiveStep(1)}>
                <Heading fontSize={["sm","lg"]}>
                    {werdegangTexts[idioma]["tabTitles"][0]}
                </Heading>
                </Tab>
            <Tab onClick={() => setActiveStep(1)}><Heading fontSize={["sm","lg"]}>
                    {werdegangTexts[idioma]["tabTitles"][1]}
                </Heading></Tab>
        </TabList>
        <TabPanels p={["0","100px 160px 0"]} mb= "200px" border={["1px solid var(--chakra-colors-whiteAlpha-300);","1px solid var(--chakra-colors-gray-200);"]} borderTop="0px">
            <TabPanel>
                <Spacer height="120px" />
                <Flex orientation="row">
                    <Stack>
                        <Stepper size='sm' index={activeStep} gap='0' orientation='vertical' colorScheme='pink'>
                            {werdegangTexts[idioma]["CardsWorks"].map((step, index) => (
                                <Step key={index+21} gap='0'>
                                    <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                    </StepIndicator>
                                    <Box flexShrink='0' minWidth={["auto", "160px"]} textAlign="center">
                                        <StepTitle>{step["year"]}</StepTitle>
                                    </Box>

                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        marginTop="-120px"
                                        marginBottom="240px"
                                        shadow="lg"
                                        ref={index === 2 ? cardRef : null}
                                    >


                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>{step["title"]}</Heading>
                                                <Heading size='sm'>{step["subtitle"]}</Heading>

                                                <Text py='2' paddingLeft="10px">
                                                {step["text"]}
                                                </Text>
                                            </CardBody>

                                            <CardFooter>
                                               {/*  <Button variant='solid' colorScheme='pink' onClick={() => setActiveStep(index+1)}>
                                                {step["button"]}
                                                </Button> */}
                                            </CardFooter>
                                        </Stack>
                                    </Card>
                                    <StepSeparator _horizontal={{ ml: '0' }} />
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                </Flex>
            </TabPanel>

            <TabPanel>
                <Spacer height="120px" />
                <Flex orientation="row" >
                    <Stack>
                        <Stepper size='sm' index={activeStep} gap='0' orientation='vertical' colorScheme='pink' >
                            {werdegangTexts[idioma]["CardsEducation"].map((step, index) => (
                                <Step key={index} gap='0'>
                                    <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                    </StepIndicator>
                                    <Box flexShrink='0' minWidth={["auto", "200px"]} textAlign="center" >
                                        <StepTitle>{step["year"]}</StepTitle>
                                    </Box>

                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        marginTop="-120px"
                                        marginBottom="240px"
                                        shadow="lg"
                                    >


                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>{step["title"]}</Heading>
                                                <Heading size='sm'>{step["subtitle"]}</Heading>

                                                <Text py='2'>
                                                {step["text"]}
                                                </Text>
                                            </CardBody>

                                            <CardFooter>
                                              {/*   <Button variant='solid' colorScheme='pink' onClick={() => setActiveStep(1)}>
                                                {step["button"]}
                                                </Button> */}
                                            </CardFooter>
                                        </Stack>
                                    </Card>
                                    <StepSeparator _horizontal={{ ml: '0' }} />
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                </Flex>
            </TabPanel>
        </TabPanels>
    </Tabs>
</Container>
</Container>
)
}