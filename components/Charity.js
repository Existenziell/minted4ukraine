import Image from "next/image"

const Charity = () => {
  return (
    <div>
      <h1>Charitable Updates</h1>
      <h2>Here we show photos and videos from each NGO showing how the aid is being distributed and utilized.</h2>
      <div className="flex items-center justify-center gap-4">
        <Image src='/charity/1.jpg' alt='Charity 1' width={1024} height={768} />
        <Image src='/charity/2.jpg' alt='Charity 2' width={1024} height={768} />
        <Image src='/charity/3.jpg' alt='Charity 3' width={1024} height={768} />
        <Image src='/charity/4.jpg' alt='Charity 4' width={768} height={1024} />
      </div>
    </div>
  )
}

export default Charity
