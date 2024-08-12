import React, { useRef, useState,useEffect } from "react"
import experienciasText from "../json/Experiencias.json"
import { Card, CardHeader, CardBody, CardFooter, Container, Text, Button, Heading, Spacer } from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Experiencias(props) {
    var idioma = props.idioma
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <Container maxWidth={["100vw","80vw"]} justifyContent="center" py="100px">
            <Heading lineHeight='tall' fontSize={["2xl","4xl"]}>
           {experienciasText["de"]["sectionHeader"]["title"]}
        </Heading>
            <Swiper
                slidesPerView={width > 767 ? 3 : 1}
                spaceBetween={30}
                navigation={width > 767 ? true : false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                 {experienciasText[idioma]["Cards"].map((cardTexts, index) => (
                <SwiperSlide>
                    <Card shadow="lg">
                        <CardHeader>
                            <Heading size='md'> {cardTexts["title"]}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{cardTexts["text"]}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>{cardTexts["button"]}</Button>
                        </CardFooter>
                    </Card>
                </SwiperSlide>
                 ))}
                
                
            </Swiper>

        </Container>
    )
}