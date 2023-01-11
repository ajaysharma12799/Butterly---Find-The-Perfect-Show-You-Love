import { CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card } from '@chakra-ui/card';

const ShowCard = ({ show }) => {
    return (
        <Card className='cursor-pointer'>
            <CardBody>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt='Green double couch with wooden legs'
                    className='rounded-lg w-full'
                />
                <Stack className='my-2'>
                    <Heading size={'md'} className='capitalize'>
                        {show.title || show.name}
                    </Heading>
                    <Text className='text-justify max-lines'>{show.overview}</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ShowCard