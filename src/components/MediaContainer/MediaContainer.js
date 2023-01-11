/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchDiscover } from '../../__redux__/features/discover/discoverFeature';
import ShowCard from '../Card/ShowCard';
import Pagination from '../common/Pagination/Pagination';
import ClipLoader from "react-spinners/ClipLoader";

const MediaContainer = ({ mediaType }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(20);

    const dispatch = useDispatch();
    const { loading, discoverShows, searchList } = useSelector(state => state.discover);


    // Change Page Number
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        dispatch(asyncFetchDiscover({ mediaType: mediaType, page: pageNumber }));
    };

    useEffect(() => {
        dispatch(asyncFetchDiscover({ mediaType: mediaType, page: currentPage }));
    }, [currentPage, dispatch]);

    return (
        <React.Fragment>
            <Box>
                <Box className='px-2 py-2'>
                    {
                        <Box className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                            {
                                discoverShows && discoverShows.results.map((show, index) => <ShowCard show={show} key={index} />)
                            }
                            {
                                searchList && searchList.results.map((show, index) => <ShowCard show={show} key={index} />)
                            }
                        </Box>
                    }
                </Box>
                <Pagination
                    paginate={paginate}
                    postPerPage={postPerPage}
                    totalPosts={400}
                />
            </Box>
            <ClipLoader
                color='#000000'
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </React.Fragment>
    )
}

export default MediaContainer