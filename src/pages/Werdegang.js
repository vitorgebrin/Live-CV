import helloSticker from '../images/hello-sticker.png'
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
var idioma =props.idioma
return (
<Container maxWidth={["100vw", "50vw"]} justifyContent="center">
    <Tabs isFitted variant='enclosed' colorScheme='pink'>
        <TabList mb='1em'>
            <Tab onClick={() => setActiveStep(1)}>{werdegangTexts[idioma]["tabTitles"][0]}</Tab>
            <Tab onClick={() => setActiveStep(1)}>{werdegangTexts[idioma]["tabTitles"][1]}</Tab>
        </TabList>
        <TabPanels>
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
                                    >


                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>{step["title"]}</Heading>

                                                <Text py='2'>
                                                {step["text"]}
                                                </Text>
                                            </CardBody>

                                            <CardFooter>
                                                <Button variant='solid' colorScheme='pink' onClick={() => setActiveStep(index+1)}>
                                                {step["button"]}
                                                </Button>
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
                <Flex orientation="row">
                    <Stack>
                        <Stepper size='sm' index={activeStep} gap='0' orientation='vertical' colorScheme='pink'>
                            {werdegangTexts[idioma]["CardsEducation"].map((step, index) => (
                                <Step key={index} gap='0'>
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
                                    >


                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>{step["title"]}</Heading>

                                                <Text py='2'>
                                                {step["text"]}
                                                </Text>
                                            </CardBody>

                                            <CardFooter>
                                                <Button variant='solid' colorScheme='pink' onClick={() => setActiveStep(1)}>
                                                {step["button"]}
                                                </Button>
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
)
}