import React from 'react'
import './celebs.css'

// Upcoming Show Stars 
function Celebs({data}) {
    const { img, name, tag} = data
    return (
    <section className="card">
        <div className="imgBox" style={{backgroundImage:`url(${img})`}}></div>
        <div className="descBox">
            <div className="tag-n-name">
                <span className="tag">{tag}</span>
                <h3 className="name">{name}</h3>
            </div>
            <div className="more">
                <h4 className="more-info">More Info <span className="rgt-arr"><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 0.25L11.2 1.3L16.075 6.25H0.25V7.75H16.075L11.2 12.7L12.25 13.75L19 7L12.25 0.25Z" fill="#0259EB"/>
                    </svg></span></h4>
                <span className="divisor"></span>
                <div className="tkt-img"></div>
            </div>
        </div>
    </section>
  )
}

export default Celebs