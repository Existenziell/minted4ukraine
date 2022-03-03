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
    <div>
      <section className="flex items-center justify-center h-56 sm:h-screen mb-12 bg-fixed sm:bg-center bg-contain sm:bg-cover bg-flag">
        <div className="p-5 text-4xl text-white bg-ukraine-blue bg-opacity-70 rounded">
          Minted4Ukraine
        </div>
      </section>

      <div className="m-auto px-8 pb-12">
        <About />
      </div>

      <section className="flex items-center justify-center h-56 sm:h-72 m-auto mb-12 sm:bg-fixed sm:bg-center bg-contain sm:bg-cover bg-statue">
        <div className="p-5 text-2xl text-white bg-ukraine-blue bg-opacity-70 rounded">
          NFTs for Peace
        </div>
      </section>

      <div className="max-w-2xl m-auto px-8">
        <Donate />
        <NFTs />
        <Sponsors />
        <Contact />
        <Charity />
        <News articles={articles} />
      </div>
      <Partners />
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
