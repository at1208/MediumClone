import styles from '../../styles/BlogSmallCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return <>
           <div className={styles.outercontainer}>
              <div className="row">
                <div className="col-8">
                   <div className={styles.left}>
                     <div className="row">
                     <div className={styles.category}>
                         <Image src="/blog.jpeg" width="20px" height="20px" alt="Profile Picture" className="img img-fluid"/>
                     </div>
                     <div className="col">
                      <font className={styles.name}> Aman Tiwari</font>
                      <font className={styles.in}>in</font>
                      <font className={styles.categoryname}>Javascript</font>
                     </div>
                     </div>
                     <Link href="/Creating-a-Design-System-in-React">
                      <a>
                        <section className={styles.title}>Creating a Design System in React</section>
                     </a>
                    </Link>
                     <small className={styles.time}>May 26 . 9 min read</small>
                   </div>
                </div>
                <div className="col-4">
                   <div className="float-right">
                     <Link href="/Creating-a-Design-System-in-React">
                      <a>
                        <Image src="/blog.jpeg" width="100px" height="100px" alt="Profile Picture" className="img img-fluid"/>
                      </a>
                     </Link>
                   </div>
                </div>
              </div>
           </div>
         </>
}

export default Card;
