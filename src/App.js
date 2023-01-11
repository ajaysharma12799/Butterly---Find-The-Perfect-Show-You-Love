import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import FilterOptions from './components/Filter/FilterOptions'
import MediaContainer from './components/MediaContainer/MediaContainer'

const App = () => {
  const [mediaType, setMediaType] = useState('movie');
  return (
    <Box>
      <Box className='flex flex-col md:flex-row'>
        <Box className='w-full md:w-[25%] h-full md:h-screen bg-[#3944f7] static md:sticky top-0 left-0'>
          <FilterOptions setMediaType={setMediaType} />
        </Box>
        <Box className='w-full'>
          <MediaContainer mediaType={mediaType} />
        </Box>
      </Box>
    </Box>
  )
}

export default App