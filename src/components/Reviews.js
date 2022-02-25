import React from 'react'
import './reviews.css'

//Customer Reviews
function Reviews({data}) {
  console.log(data)
  const { flag, location, userimg, name, review} = data
  return (
    <section className="review-card">
        <div className="headerBox">
            <img src={userimg} alt="" />
            <div className="name-n-desig">
                <span className="name">{name}</span>
                <div className="flag-addr">
                    <img src={flag} alt="" />
                    <span className="addr">{location}</span>
                </div>
            </div>
        </div>
        <div className="contentBox">{review}</div>
    </section>
  )
}

export default Reviews