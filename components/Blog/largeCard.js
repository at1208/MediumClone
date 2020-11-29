import styles from '../../styles/BlogLargeCard.module.css';
import Image from 'next/image'
import Link from 'next/link';

const Card = () => {
  return <>
           <div className={styles.outercontainer}>
              <Link href="/Creating-a-Design-System-in-React">
               <a>
                  <img src="/blog.jpeg" width="100%" height="100%" alt="Profile Picture" className="img img-fluid"/>
               </a>
             </Link>
              <div className="row pt-3 pr-2 pb-2">
                <div className={styles.category}>
                 <Image src="/blog.jpeg" width="25" height="25" alt="Profile Picture" className="img img-fluid"/>
                </div>
                <div className="col pt-1">
                 <font className={styles.name}> Aman Tiwari</font>
                 <font className={styles.in}>in</font>
                 <font className={styles.categoryname}>Javascript</font>
                </div>
              </div>
              <Link href="/Creating-a-Design-System-in-React">
                <a>
                <section className={styles.title}>How Online Gaming Benefits in psychological?</section>
                <section className={styles.subheading}>Read OneZero’s interview with author Anna Wiener</section>
                </a>
              </Link>
              <small className={styles.time}>May 26 . 9 min read</small>
           </div>
         </>
}

export default Card;
