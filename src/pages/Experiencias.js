import React from "react"
import cards from "../json/Cards.json"
import hashtagb from "../images/hashtag_logo_b.png"
import hashtagw from "../images/hashtag_logo_w.png"
import { Card, CardHeader, CardBody, CardFooter, Container, Text, Button, Heading, SimpleGrid } from '@chakra-ui/react'


export default function Experiencias(props) {
    var idioma = props.idioma


    return (
        <Container maxWidth="80vw" justifyContent="center" py="100px">
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Container>
    )
}