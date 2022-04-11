import React from 'react';
// import CarouselContainer from './component/CarouselContainer';
import Services from './Services';
import Launch from './Launch';
// import Main from './component/Main.js';
// import Search from './component/Search';
import Choose from './Choose';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Location from './Location';
import SearchFilter from './SearchFilter';
import CarouselContainer from './CarouselContainer';

function HomePage() {
  return (
    <div>
         <CarouselContainer />
      {/* <switch> */}
      {/* <Route path="/SearchFilter/:searchTerm"> */}
      {/* <SearchFilter/> */}
      {/* </Route> */}
     
      <Services/>
      <Launch/>
      <Choose/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage