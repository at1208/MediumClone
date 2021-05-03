import styles from '../../styles/BlogLargeCard.module.css';
import Image from 'next/image'
import Link from 'next/link';
const readingTime = require('reading-time');
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ blog }) => {
  return <Link href={`/${blog && blog.slug}`}>
           <div className={styles.outercontainer}>

               <a>
                  <LazyLoadImage effect="blur" src={blog && blog.featureImg} width="100%" height="100%" alt="Profile Picture" className="img img-fluid"/>
               </a>

              <div className="row pt-3 pr-2 pb-2">
                <div className={styles.category}>
                 <Image src="/blog.jpeg" width="25" height="25" alt="Profile Picture" className="img img-fluid"/>
                </div>
                <div className="col pt-1">
                 <font className={styles.name}>{blog && blog.postedBy && blog.postedBy.full_name}</font>
                 <font className={styles.in}>in</font>
                 <font className={styles.categoryname}>{blog && blog.categories && blog.categories[0].name}</font>
                </div>
              </div>

                <a>
                <section className={styles.title}>{blog && blog.title}</section>
                <section className={styles.subheading}>Read OneZero’s interview with author Anna Wiener</section>
                </a>

              <small className={styles.time}>{moment(blog && blog.createdAt).format("MMM D")}  . {readingTime(blog && blog.body || " ").text}</small>
           </div>
         </Link>
}

export default Card;
