import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Header2 from './component/Header2';
import Style1 from './component/style1';
import Style2 from './component/style2';
import Style3 from './component/style3';
import Footer from './component/Footer';
import Style4 from './component/Stylee4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Header2 />
        <Style1 />
        <Style2 />
        <Style3 />
        <Style4 />
        <Footer />
      </div>
    </>
  )
}

export default App
