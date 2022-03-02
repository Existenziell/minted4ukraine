const Partners = () => {
  return (
    <div>
      <h1>Partners</h1>
      <h2>We are working with the following NGOs:</h2>
      <ul className="text-black text-xl">
        <li className="bg-white rounded shadow-sm flex items-center gap-8 px-4 py-2 h-32">
          <img src="/partners/redcross.png" alt="Red Cross" width={100} />
          <span>Red Cross of Ukraine</span>
        </li>
        <li className="bg-white rounded shadow-sm flex items-center gap-8 px-4 py-2 h-32">
          <img src="/partners/care.png" alt="Care" width={100} />
          <span>CARE</span>
        </li>
        <li className="bg-white rounded shadow-sm flex items-center gap-8 px-4 py-2 h-32">
          <img src="/partners/chabad.png" alt="Care" width={100} />
          <span>Chabad Jewesh Relief Fund</span>
        </li>
      </ul>
    </div>
  )
}

export default Partners
