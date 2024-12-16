import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../src/img/IMG_5540.JPG'
import img2 from '../src/img/IMG_5533.JPG'
import img3 from '../src/img/IMG_5532.JPG'
import img4 from '../src/img/IMG_5557.JPG'
import img5 from '../src/img/IMG_5542.JPG'
import img6 from '../src/img/IMG_5522.JPG'
import img7 from '../src/img/IMG_5521.JPG'
import img8 from '../src/img/IMG_5556.JPG'
import img9 from '../src/img/IMG_5547.JPG'
import img10 from '../src/img/IMG_5528.JPG'
import img11 from '../src/img/IMG_5553.JPG'
import img12 from '../src/img/IMG_5554.JPG'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Css from '../src/Main.css'

import Card1 from './pages/Card1'
import Card2 from './pages/Card2'
import Card3 from './pages/Card3'
import Card4 from './pages/Card4'
import Card5 from './pages/Card5'
import Card6 from './pages/Card6'
import Card7 from './pages/Card7'
import Card8 from './pages/Card8'
import Card9 from './pages/Card9'
import Card10 from './pages/Card10'
import Card11 from './pages/Card11'
import Card12 from './pages/Card12'
import Navbar from './components/Navbar'
import ControlledCarousel from './components/Slider'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Base />} />
        <Route path='/card1' element={<Card1 />} />
        <Route path='/card2' element={<Card2 />} />
        <Route path='/card3' element={<Card3 />} />
        <Route path='/card4' element={<Card4 />} />
        <Route path='/card5' element={<Card5 />} />
        <Route path='/card6' element={<Card6 />} />
        <Route path='/card7' element={<Card7 />} />
        <Route path='/card8' element={<Card8 />} />
        <Route path='/card9' element={<Card9 />} />
        <Route path='/card10' element={<Card10 />} />
        <Route path='/card11' element={<Card11 />} />
        <Route path='/card12' element={<Card12 />} />
      </Routes>
    </Router>
  )
}

function Base () {
  return (
    <div>
      <Navbar />

      <ControlledCarousel />

      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div
            className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
            id='productWrapper'
          >
            {/* Sample Product Card */}

            <Card img={img1} title='Chinni' link='/card1'></Card>
            <Card img={img2} link='/card2'></Card>
            <Card img={img3} link='/card3'></Card>
            <Card img={img4} link='/card4'></Card>
            <Card img={img5} link='/card5'></Card>
            <Card img={img6} link='/card6'></Card>
            <Card img={img7} link='/card7'></Card>
            <Card img={img8} link='/card8'></Card>
            <Card img={img9} link='/card9'></Card>
            <Card img={img10} link='/card10'></Card>
            <Card img={img11} link='/card11'></Card>
            <Card img={img12} link='/card12'></Card>
          </div>
        </div>
      </section>

      {/* Section and */}

      <footer class='py-5 bg-dark'>
        <div class='container'>
          <p class='m-0 text-center text-white'>
            Copyright &copy; Rishton Ceramics 2024
          </p>
        </div>
      </footer>
    </div>
  )
}

function Card (props) {
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        <img
          className='card-img-top h-50 object-fit-cover'
          style={{ cursor: 'pointer' }}
          src={props.img}
          alt='Product'
        />
        <div className='card-body p-4'>
          <div className='text-center'>
            {/* <h5 className='fw-bolder'>{props.title}</h5> */}
            <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
          </div>
        </div>
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            <Link to={props.link} className='btn btn-outline-dark mt-auto'>
              Savatga qo‘shish
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App