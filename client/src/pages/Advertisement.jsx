import React from 'react'
import AdvidAdidas from "../video/AdiasAnimate.mp4"
import AdvidNike from "../video/nikeAirmax.mp4"
import AdvidUnderArmour from "../video/UnderArmourAnimate2.mp4"
import AdvidUnderPuma  from "../video/Pumaanimated.mp4"


const Advertisement = () => {
  return (
    <>
    <div style={{display:"flex"}}>

        <div className='' >
                <video
        src={AdvidAdidas}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
      />
        </div>
        <div>
                          <video
        src={AdvidUnderArmour}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
      />
        </div>
        <div>
                          <video
        src={AdvidNike}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
      />
        </div>
        <div>
                          <video
        src={AdvidUnderPuma}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
      />
        </div>
    </div>





















    </>




  )
}

export default Advertisement









