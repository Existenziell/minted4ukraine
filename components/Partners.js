const Partners = () => {
  return (
    <div className="mt-24">
      {/* <h1>Partners</h1> */}
      <h3 className="text-center text-gray-500 mb-2">We are working with the following NGOs:</h3>
      <div className="bg-gradient-to-b from-white to-black h-16"></div>
      <ul className="text-gray-400 flex justify-evenly items-center bg-black">
        <li className="flex flex-col justify-center items-center gap-2 px-4 py-2 h-32">
          <img src="/partners/care-white.png" alt="Care" width={100} />
          {/* <span>CARE</span> */}
        </li>
        <li className="flex flex-col justify-center items-center gap-2 px-4 py-2 h-32">
          <img src="/partners/redcross.png" alt="Red Cross" width={60} />
          {/* <span>Red Cross of Ukraine</span> */}
        </li>
        <li className="flex flex-col justify-center items-center gap-2 px-4 py-2 h-32">
          <img src="/partners/chabad.png" alt="Care" width={100} />
          {/* <span>Chabad Jewesh Relief Fund</span> */}
        </li>
      </ul>
    </div>
  )
}

export default Partners
