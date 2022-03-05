const Partners = () => {
  return (
    <div className="my-16 bg-ukraine-yellow shadow-lg">
      {/* <h1>Partners</h1> */}
      {/* <h3 className="text-center text-gray-800 mb-2">We are working with the following NGOs:</h3> */}
      {/* <div className="bg-gradient-to-b from-white to-black h-16"></div> */}

      <ul className="text-gray-500 flex justify-between items-center max-w-2xl md:max-w-3xl mx-auto pt-4">
        <li className="flex flex-col justify-between items-center gap-2 basis-4/12 px-4 py-2">
          <img src="/partners/care-white.png" alt="Care" width={100} />
          <span>CARE</span>
        </li>
        <li className="flex flex-col justify-between items-center gap-2 basis-4/12 px-4 py-2">
          <img src="/partners/redcross.png" alt="Red Cross" width={60} />
          <span>Red Cross of Ukraine</span>
        </li>
        <li className="flex flex-col justify-between items-center gap-2 basis-4/12 px-4 py-2">
          <img src="/partners/chabad.png" alt="Care" width={100} />
          <span>Chabad Jewesh Relief Fund</span>
        </li>
      </ul>
    </div>
  )
}

export default Partners
