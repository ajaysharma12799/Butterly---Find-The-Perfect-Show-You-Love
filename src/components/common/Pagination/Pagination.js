import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <Box className='container mx-auto w-fit my-2 px-2'>
        <Box className='justify-between items-center grid grid-cols-10 gap-2'>
            {
                pageNumbers.map((number) => {
                    return(
                        <Button 
                            key={number}
                            className=''
                            onClick={() => { 
                                paginate(number);
                            }}
                        >
                            {number}
                        </Button>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default Pagination