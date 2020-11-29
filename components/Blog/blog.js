import styles from '../../styles/Blog.module.css';
import renderHTML from 'react-render-html';
import Link from 'next/link';
import Image from 'next/image'

const Blog = ({ blog }) => {

  const showAuthor = () => {
    return <section className={styles.usercontainer}>
             <div className="row">
                <div className="col-8 row">
                  <Image src="/blog.jpeg" height={40} width={40} className={styles.authorimg}/>
                  <div>
                  <font className={styles.authorname}>Aman Tiwari</font>
                  <font className={styles.postedtime}>2 hours ago</font>
                  </div>
                </div>
                <div className="col-4">
                </div>
             </div>
          </section>
  }

const showTags = () => {
  let tags  = [{}, {}].map((tag, i) => {
    return <Link href="/tag/ai" key={i}>
              <a>
                <button className={styles.tagcatbtn}>AI</button>
              </a>
           </Link>
  })
   return  <div className={styles.extras}>
              {tags}
           </div>
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
             I asked GPT-3 for the question to “42”.
             I didn’t like its answer and neither will you.
            </h1>
            {showAuthor()}
            {renderHTML(blog)}
             <div className="row justify-content-center">
              {showTags()}
              {showCategories()}
             </div>
         </>
}

export default Blog;
