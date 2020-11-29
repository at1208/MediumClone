import styles from '../../styles/TrendingCard.module.css';
import Image from 'next/image'
import Link from 'next/link';

const Card = ({ count }) => {
  return <div className="col-md-4">
           <div className={styles.outercontainer}>
             <div className="row">
              <div className="col-2">
                <section className={styles.count}>0{count+1}</section>
              </div>
              <div className="col-10">
               <div className="row pt-3 pr-2 pb-2">
                 <div className={styles.category}>
                  <Image src="/blog.jpeg" width="25" height="25" alt="Profile Picture" className="img img-fluid"/>
                 </div>
                 <div className="col pt">
                  <font className={styles.name}> Aman Tiwari</font>
                  <font className={styles.in}>in</font>
                  <font className={styles.categoryname}>Javascript</font>
                 </div>
               </div>
                 <Link href="/Creating-a-Design-System-in-React">
                   <a>
                    <section className={styles.text}>I created my own YouTube algorithm (to stop me wasting time)</section>
                   </a>
                 </Link>
                <small className={styles.time}>May 26 . 9 min read</small>
              </div>
             </div>
           </div>
         </div>
}

export default Card;
