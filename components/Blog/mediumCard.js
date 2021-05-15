import styles from '../../styles/BlogMediumCard.module.css';
import Image from 'next/image'
import Link from 'next/link';
const readingTime = require('reading-time');
import moment from 'moment';
import renderHTML from 'react-render-html';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ blog }) => {
  return <Link href={`/${blog && blog.slug}`}>
           <div className={styles.outercontainer}>
             <div className="row col">
               <div className="col-md-8">
                   <div className="row">
                     <div className={styles.category}>
                      <Image src="/blog.jpeg" width="25" height="25" alt="" className="img img-fluid"/>
                     </div>
                     <div className="col">
                      <font className={styles.name}>{blog && blog.postedBy && blog.postedBy.full_name}</font>
                      <font className={styles.in}>in</font>
                      <font className={styles.categoryname}>{blog && blog.categories && blog.categories[0].name}</font>
                     </div>
                   </div>
                   <div>
                          <section className={styles.title}>{blog && blog.title}</section>
                          <section className={styles.excerpt}>{renderHTML(blog && blog.excerpt)}</section>
                   </div>
                   <small className={styles.time}>{moment(blog && blog.createdAt).format("MMM D")}  . {readingTime(blog && blog.body || " ").text}</small>
               </div>
               <div className="col-md-4">
                  <LazyLoadImage src={blog && blog.featureImg} width="100%" height="100%" alt="" className="img img-fluid"/>
               </div>
             </div>
           </div>
         </Link>
}

export default Card;
