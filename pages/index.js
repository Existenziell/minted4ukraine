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
      <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-flag">
        <div className="p-5 text-4xl text-white bg-black bg-opacity-50 rounded">
          Minted4Ukraine
        </div>
      </section>

      <div className="max-w-2xl m-auto p-4 md:px-8">
        <About />
        <Partners />
      </div>

      <section className="flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-statue">
        <div className="p-5 text-2xl text-white bg-ukraine-blue bg-opacity-50 rounded">
          NFTs for Peace
        </div>
      </section>

      <div className="max-w-2xl m-auto p-4 md:px-8">
        <Donate />
        <NFTs />
        <Sponsors />
        <Contact />
        <Charity />
        <News articles={articles} />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase()
  let articles = await db
    .collection("news")
    .find()
    .toArray()

  articles = JSON.parse(JSON.stringify(articles))
  return {
    props: { articles }
  }
}

export default Minted4Ukraine
