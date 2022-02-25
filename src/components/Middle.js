import { useEffect,useState } from 'react'
import Celebs from './Celebs'
import Reviews from './Reviews'
import styles from './middle.module.css'

function Middle() {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  const [review, setReview] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    const res = await fetch('data.json')
    const data = await res.json()
    setData(data)
    setUsers(data[0].users)
    setReview(data[0].reviews)
  }
  return (
    <section className={styles.middle}>
      <div className={styles.middlemain}>
        <div className={styles.showbar}>    {/* Upcoming Shows Bar */}
          <span className={styles.spanhead}>Upcoming Shows</span>{' '}
          <span className={styles.spanbtn}>View All</span>
        </div>
        <section className={styles.celebcards}>
          {
            users.map((user,idx)=>(
              <Celebs data={user} key={idx}/>  
            ))
          }
        </section>
        <div className={styles.showbar}>    {/* Reviews Bar */}
          <span className={styles.spanhead}>Reviews</span>{' '}
          <span className={styles.spanbtn}>View All</span>
        </div>
        <section className={styles.reviewcards}>
          {
            review.map((review,idx)=>(
              <Reviews data={review} key={idx}/> 
            ))
          }
        </section>
      </div>
    </section>
  )
}

export default Middle
