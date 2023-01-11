import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    discoverShows: null,
    searchList: null,
};


export const asyncFetchDiscover = createAsyncThunk('fetchDiscoverMovies&TV', async ({mediaType, page}) => {
    const DiscoverURL = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=6671af2f9a362db938ad91287e63b2fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
    const response = await axios.get(DiscoverURL);
    return response.data;
});

export const asyncSearchShows = createAsyncThunk('searchShows', async ({ mediaType, searchQuery }) => {
    const SearchURL = `https://api.themoviedb.org/3/search/${mediaType}?api_key=6671af2f9a362db938ad91287e63b2fe&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    const response = await axios.get(SearchURL);
    return response.data;
});

const discoverSlice = createSlice({
    name: 'discover',
    initialState,
    reducers: {
        clearDiscover: (state, action) => {
            state.discoverShows = null;
        },
        clearSearchList: (state, action) => {
            state.searchList = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncFetchDiscover.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(asyncFetchDiscover.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.discoverShows = payload;
        })
        builder.addCase(asyncSearchShows.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(asyncSearchShows.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.searchList = payload;
        })
    }
});

export const { clearDiscover, clearSearchList } = discoverSlice.actions;
export default discoverSlice.reducer;
