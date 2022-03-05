import About from '../components/About'
import Partners from '../components/Partners'
import Donate from '../components/Donate'
import NFTs from '../components/NFTs'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'
import { connectToDatabase } from "../lib/mongodb"
import News from '../components/News'
import Charity from '../components/Charity'

const Minted4Ukraine = ({ articles }) => {
  return (
    <div className='pb-32'>
      <section className="flex items-center justify-center h-56 sm:h-96 mb-12 bg-fixed sm:bg-center bg-contain sm:bg-cover bg-header shadow">
        <div className="p-5 text-4xl text-ukraine-yellow text-center pt-44 bg-ukraine-blue bg-opacity-50 h-full w-full">
          Minted4Ukraine
        </div>
      </section>

      <div className="max-w-2xl md:max-w-3xl m-auto px-8">
        <About />
      </div>

      <Partners />

      <div className="max-w-2xl m-auto px-8">
        <Donate />
        <NFTs />
      </div>

      <section className="flex items-center justify-center h-56 sm:h-72 m-auto my-12 sm:bg-fixed sm:bg-center bg-contain sm:bg-cover bg-statue shadow">
        <div className="p-5 text-2xl text-white bg-ukraine-blue bg-opacity-70 rounded">
          NFTs for Peace
        </div>
      </section>

      <div className="max-w-2xl m-auto px-8">
        <Sponsors />
        <Contact />
        <Charity />
        <News articles={articles} />
      </div>
    </div>
  )
}

// Get news articles from DB populated by Reuters scraper
export async function getStaticProps(context) {
  const { db } = await connectToDatabase()
  let articles = await db
    .collection("news")
    .findOne()

  articles = JSON.parse(JSON.stringify(articles.data))
  return {
    props: { articles },
    revalidate: 60, // seconds
  }
}

export default Minted4Ukraine
