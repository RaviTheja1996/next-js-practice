import React from 'react'

const ReviewDetail = ({params}: {
  params: {
    productId : String,
    reviewId: String
  }
}) => {
  return (
    <h1>Review {params.reviewId} for product {params.productId}</h1>
  )
}

export default ReviewDetail