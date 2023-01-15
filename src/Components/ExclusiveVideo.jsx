import React from 'react'
import hero from "../ImageResources/HeroImage.svg"
import play from "../ImageResources/Play.png"

const ExclusiveVideo = () => {
  return (
    <div>
      <img
      src={hero}
      alt=""
      height={"254px"}
      width={"420px"}
      className="rounded-md"
    />
    <h3 className="font-bold font-DMSans text-xl">No Time To Die</h3>
    <div className='flex justify-between absolute top-[30%] p-2 ml-48'>
      <img src={play} alt="" />
    </div>
    </div>
  )
}

export default ExclusiveVideo