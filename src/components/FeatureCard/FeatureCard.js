import React from 'react'
import "./FeatureCard.css"

function FeatureCard({featureImg,featureText}) {
  return (
    <div className='feature-card'>
    <img src={featureImg} className='feature-img' alt="Like" />
    <p className='feature-text'>
      {featureText}
    </p>
  </div>
  )
}

export default FeatureCard
