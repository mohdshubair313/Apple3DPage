import Hero from './components/hero'
import Highlight from './components/Highlight'
import Navbar from './components/Navbar'
import Model from './components/Model'
import FeaturesInGrid from './components/FeaturesInGrid'
import ChipComponent from './components/chipComponent'
import Footer from './components/Footer'

import * as Sentry from '@sentry/react'; 

const App = () =>  {

  return (
    <>
     <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <FeaturesInGrid />
      <ChipComponent />
      <Footer />
     </main>
    </>
  )
}

export default Sentry.withProfiler(App);
