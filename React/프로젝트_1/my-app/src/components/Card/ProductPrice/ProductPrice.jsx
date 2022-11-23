import React from 'react'

export default function ProductPrice({price}) {
  return (
    <strong className='m-price'>{price}<span>원</span></strong>
  )
}
