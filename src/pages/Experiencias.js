import React, { useState, useEffect } from "react"
import experienciasText from "../json/Experiencias.json"
import { Card, CardHeader, CardBody, CardFooter, Container, Text, Button, Heading, Spacer, Image, Box } from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function Experiencias(props) {
    var idioma = props.idioma
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const  [buttonsState, setButtonsState ] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false })
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    console.log(buttonsState)

    return (
        <Container maxWidth={["100vw", "80vw"]} justifyContent="center" py="100px" id='portfolio'>
            <Heading lineHeight='tall' fontSize={["2xl", "4xl"]}>
                {experienciasText[idioma]["sectionHeader"]["title"]}
            </Heading>
            <Swiper
                slidesPerView={width > 767 ? 3 : 1}
                spaceBetween={30}
                navigation={width > 767 ? true : false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {experienciasText[idioma]["Cards"].map((cardTexts, index) => (
                    <SwiperSlide>
                        <Card shadow="lg" height="550px">
                            <Box textAlign="-webkit-center" height={["160px", "200px"]} bg="white">
                                <Image
                                    src={cardTexts["image"]}
                                    alt='Project Image'
                                    borderRadius='lg'
                                    fit="contain"
                                    maxWidth={["60%", "50%"]}
                                    py={["5px", "10px"]}
                                />
                            </Box>
                            <CardHeader>
                                <Heading size='md' m={["0", "20px"]}> {cardTexts["title"]}</Heading>
                                <Text fontWeight="600" my="-20px">{cardTexts["subtitle"]}</Text>
                            </CardHeader>
                            <CardBody p={["0px 10px 20px !important", "auto"]}>
                                <Text >{cardTexts["text"].substring(0,200) + "..."}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        setButtonsState({...buttonsState, [index]:true})
                                    }}
                                >
                                    Read More
                                </Button>
                                <Spacer/>
                                <Button colorScheme="pink"><a href={cardTexts["buttonLink"]} target="_blank" rel="noreferrer">{cardTexts["button"]}</a></Button>
                            </CardFooter>
                        </Card>
                        <Modal isCentered isOpen={buttonsState[index]} onClose={() => {
                                        setButtonsState({...buttonsState, [index]:false})
                                    }} >
                            {overlay}
                            <ModalContent>
                                <ModalHeader>{cardTexts["title"]}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                <Box textAlign="-webkit-center" alignContent="center" height={["auto", "300px"]} minHeight={["200px", "300px"]} bg="white" marginBottom="40px">
                                <Image
                                    src={cardTexts["image"]}
                                    alt='Project Image'
                                    borderRadius='lg'
                                    fit="contain"
                                    maxWidth={["100%", "100%"]}
                                    p={["20px", "10px"]}
                                />
                            </Box>
                                    <Text>{cardTexts["text"]}</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={() => {
                                        setButtonsState({...buttonsState, [index]:false})
                                    }} >Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </SwiperSlide>
                ))}


            </Swiper>

        </Container>
    )
}