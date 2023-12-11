import React from 'react'

const LazyImage = ({imageSrc, alt, className}) => {
  return (
    <img className={className}  src={imageSrc} alt={alt}/>
  )
}

export default LazyImage