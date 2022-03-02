import Image from "next/image"
import ImageGallery from 'react-image-gallery'
import * as Css from '../node_modules/react-image-gallery/styles/css/image-gallery.css'

const Charity = () => {

  let images = []

  Array.from(Array(7)).map((_, i) => {
    const index = i + 1
    const image = {
      original: `/charity/${index}.jpg`,
      originalAlt: `Charity ${index}`,
      thumbnail: `/charity/${index}.jpg`,
      thumbnailAlt: `Charity Thumbnail ${index}`,
    }
    images.push(image)
  })

  return (
    <div>
      <h1>Charitable Updates</h1>
      <h2>Here we show photos and videos from each NGO showing how the aid is being distributed and utilized.</h2>

      <div className="hidden md:flex justify-center">
        <ImageGallery items={images} thumbnailPosition="top" />
      </div>
      <div className="block md:hidden">
        <div className="md:flex items-center justify-center gap-4">
          <Image src='/charity/1.jpg' alt='Charity 1' width={1024} height={768} />
          <Image src='/charity/2.jpg' alt='Charity 2' width={1024} height={768} />
          <Image src='/charity/3.jpg' alt='Charity 3' width={1024} height={768} />
          <Image src='/charity/4.jpg' alt='Charity 4' width={768} height={1024} />
          <Image src='/charity/5.jpg' alt='Charity 5' width={1024} height={768} />
          <Image src='/charity/6.jpg' alt='Charity 6' width={1024} height={768} />
          <Image src='/charity/7.jpg' alt='Charity 7' width={1024} height={768} />
        </div>
      </div>

      <video source='/charity/1.mp4' controls width="1024" className="mt-8" />
    </div>
  )
}

export default Charity
