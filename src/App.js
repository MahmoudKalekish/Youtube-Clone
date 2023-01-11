import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
// we can import them in one import by exporting them in the index.js file in the component.

const App = () => (
  <BrowserRouter>
   {/* browserRouter wrap our entire application  */}
    <Box sx={{ backgroundColor: '#000' }}>
      {/* this box have an sx prop with background color
      sx: is the style */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App