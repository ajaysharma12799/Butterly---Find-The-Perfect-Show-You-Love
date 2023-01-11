import React from 'react'
import { Box, Button, Input, Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { asyncFetchDiscover, asyncSearchShows, clearDiscover, clearSearchList } from '../../__redux__/features/discover/discoverFeature';

const FilterOptions = ({ setMediaType }) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            mediaType: 'movie',
            searchQuery: '',
        },
        onSubmit: (value) => {
            console.log(value);
            setMediaType(value.mediaType)
            
            if(value.searchQuery === '') {
                dispatch(clearSearchList());
                dispatch(asyncFetchDiscover({mediaType: value.mediaType, page: 1}))
            }
            else {
                dispatch(clearDiscover());
                dispatch(asyncSearchShows({mediaType: value.mediaType, searchQuery: value.searchQuery}))
            }
        },
        onReset: (value) => {
            dispatch(clearSearchList())
            dispatch(asyncFetchDiscover({mediaType: value.mediaType, page: 1}))
        }
    });

    return (
        <Box className=' text-[#ffffff] px-2 py-2'>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Select
                        placeholder='Select What to Watch' 
                        value={formik.values.mediaType}
                        onChange={formik.handleChange}
                        name='mediaType'
                    >
                        <option value='movie'>Movies</option>
                        <option value='tv'>TV</option>
                    </Select>
                </Box>
                <Box className='my-3'>
                    <Input
                        placeholder='Search Movie or TV Shows'
                        className='outline-none'
                        value={formik.values.searchQuery}
                        onChange={formik.handleChange}
                        name={'searchQuery'}
                    />
                </Box>
                <Box className='my-3'>
                    <Button 
                        className='text-[#000000] my-1 w-full' 
                        type='submit'
                    >
                        Filter
                    </Button>
                </Box>
                <Box className='my-3'>
                    <Button 
                        color={'white'}
                        bgColor={'red.500'}
                        className='text-[#000000] my-1 w-full' 
                        type='submit'
                        _hover={false}
                        onClick={formik.handleReset}
                        disabled={formik.values.searchQuery === ''}
                    >
                        Clear
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default FilterOptions