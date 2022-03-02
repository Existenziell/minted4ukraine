import Link from 'next/link'
import Image from 'next/image'
import About from '../components/About'
import Partners from '../components/Partners'
import Donate from '../components/Donate'
import NFTs from '../components/NFTs'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'
// import getPostTitles from '../lib/crawler'
import { useEffect } from 'react'

const Minted4Ukraine = () => {

  useEffect(() => {
    // getPostTitles()
    // .then((postTitles) => console.log(postTitles));
  }, [])

  return (
    <div>
      {/* <h1 className='text-4xl mb-12'>Minted4Ukraine</h1> */}

      <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-flag">
        <div className="p-5 text-4xl text-white bg-black bg-opacity-50 rounded">
          Minted4Ukraine
        </div>
      </section>

      <div className="max-w-xl m-auto p-4 md:px-8">
        <About />
        <Partners />
      </div>

      <section className="flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-statue">
        <div className="p-5 text-2xl text-white bg-ukraine-blue bg-opacity-50 rounded">
          NFTs for Peace
        </div>
      </section>

      <div className="max-w-xl m-auto p-4 md:px-8">
        <Donate />
        <NFTs />
        <Sponsors />
        <Contact />
      </div>
    </div>
  )
}

export default Minted4Ukraine
