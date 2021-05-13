import styles from '../../styles/Blog.module.css';
import renderHTML from 'react-render-html';
import Link from 'next/link';
import Image from 'next/image'
import moment from 'moment';

const Blog = ({ blog }) => {
  const showAuthor = () => {
    return <section className={styles.usercontainer}>
             <div className="row">
                <div className="col-8 row">
                  <img src={blog && blog.postedBy.headshot_url} height={40} width={40} className={styles.authorimg}/>
                  <div>
                  <font className={styles.authorname}>{blog && blog.postedBy.full_name}</font>
                  <font className={styles.postedtime}>{moment(blog.createdAt).fromNow()}</font>
                  </div>
                </div>
                <div className="col-4">
                </div>
             </div>
          </section>
  }


const showCategories = () => {
  let categories  = [{}, {}].map((category, i) => {
    return <Link href="/category/ai" key={i}>
              <a>
                <button className={styles.tagcatbtn}>AI</button>
              </a>
           </Link>
  })
   return  <div className={styles.extras}>
              {categories}
           </div>
}

  return <>
            <h1 className={styles.title}>
             {blog && blog.title}
            </h1>
            {showAuthor()}
            {renderHTML(blog && blog.body || " ")}
             <div className="row justify-content-center">

              {showCategories()}
             </div>
         </>
}

export default Blog;
