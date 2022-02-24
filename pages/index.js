import Link from 'next/link'
import Image from 'next/image'

const Minted4Ukraine = () => {
  return (
    <div className='text-lg text-center flex flex-col items-center justify-center pb-16'>
      <h1 className='text-4xl mb-12'>Minted4Ukraine</h1>

      <div className='bg-black rounded p-4 pb-2'><Image src='/emblem.jpg' width={710} height={444} alt='Ukraine Emblem' /></div>
      <p className='mx-auto md:w-1/2 my-8'>
        We strongly believe in the utility of Non Fungible Tokens for many upcoming applications,
        way beyond what is realized at the moment in this space. The possibilities for areas such as Ticketing, Asset Tokens (Games, Metaverse), Collectibles, etc. are incredible.
      </p>
    </div>
  )
}

export default Minted4Ukraine
