import styles from '../../styles/TrendingCard.module.css';
import Image from 'next/image'
import Link from 'next/link';
const readingTime = require('reading-time');
import moment from 'moment';

const Card = ({ blog, count }) => {
  return <Link href={`/${blog && blog.slug}`}>
         <div className="col-md-4">
           <div className={styles.outercontainer}>
             <div className="row">
              <div className="col-2">
                <span className={styles.count}>0{count+1}</span>
              </div>
              <div className="col-10">
               <div className="row ">
                 <div className={styles.category}>
                  <Image src="/blog.jpeg" width="25" height="25" alt="" className="img img-fluid"/>
                 </div>
                 <div className="col pt">
                  <font className={styles.name}>{blog && blog.postedBy && blog.postedBy.full_name}</font>
                  <font className={styles.in}>in</font>
                  <font className={styles.categoryname}>{blog && blog.categories && blog.categories[0].name}</font>
                 </div>
               </div>
                  <section className={styles.text}>{blog && blog.title}</section>
                <small className={styles.time}>{moment(blog && blog.createdAt).format("MMM D")}  . {readingTime(blog && blog.body || " ").text}</small>
              </div>
             </div>
           </div>
         </div>
        </Link>
}

export default Card;
