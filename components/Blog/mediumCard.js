import styles from '../../styles/BlogMediumCard.module.css';
import Image from 'next/image'
import Link from 'next/link';

const Card = () => {
  return <>
           <div className={styles.outercontainer}>
             <div className="row col">
               <div className="col-md-8">
                   <div className="row pr-2 pb-2">
                     <div className={styles.category}>
                      <Image src="/blog.jpeg" width="25" height="25" alt="Profile Picture" className="img img-fluid"/>
                     </div>
                     <div className="col pt-1">
                      <font className={styles.name}> Aman Tiwari</font>
                      <font className={styles.in}>in</font>
                      <font className={styles.categoryname}>Javascript</font>
                     </div>
                   </div>
                   <div>
                    <Link href="/Creating-a-Design-System-in-React">
                      <a>
                          <section className={styles.title}>I created my own YouTube algorithm (to stop me wasting time)</section>
                          <section className={styles.excerpt}>Online gaming are extra famous than ever.
                              Games like fortnight have long gone mainstream...</section>
                      </a>
                    </Link>
                   </div>
                   <small className={styles.time}>May 26 . 9 min read</small>
               </div>
               <div className="col-md-4">
                  <img src="/blog.jpeg" width="100%" height="100%" alt="Profile Picture" className="img img-fluid"/>
               </div>
             </div>
           </div>
         </>
}

export default Card;
