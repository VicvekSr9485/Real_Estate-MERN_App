import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <Hero />
          <PopularProperties />
          <FeaturedProperties />
          <Newsletter />
          <Footer />
          </>
        } />
        
        <Route path='/properties' element={
          <>
          <Navbar />
          <Properties />
          <Footer />
          </>
        } />

        <Route path='/propertyDetail/:id' element={
          <>
          <Navbar />
          <ProperDetail />
          <Footer />
          </>
        } />

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
