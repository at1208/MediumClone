import Layout from '../components/Layout';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import BlogDetail from '../components/Blog/blog';
import BlogHead from '../components/Blog/blogHead';
import Router from 'next/router';
import styles from '../styles/Blog.module.css';
import { read_blog, related_blogs } from '../actions/blog';
import { one_tap_login, authenticate, isAuth} from '../actions/auth';


const BlogSmallCard = dynamic(
  () => import('../components/Blog/Cards/smallCard'),
   { ssr: false }
)



const Blog = ({ query, router, blog, error }) => {
  if(blog){
    const [show, setShow] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [relatedBlogList, setRelatedBlogList] = useState();

    useEffect(() => {
      window.onscroll = function() {myFunction()};
      var leftside = document.getElementById("lefttop");

      function myFunction() {
        if (window.pageYOffset > 200) {
          setShow(true)
          leftside.classList.add("fix-left-top");
        } else {
          leftside.classList.remove("fix-left-top");
          setShow(false)
        }
        if(window.pageYOffset > 2000){
          leftside.classList.remove("fix-left-top");
          setShow(false)
        }
      }
    })


    const handleOnetapResponse = (response) => {
      one_tap_login({ googleToken: response.credential, domain: process.env.NEXT_PUBLIC_DOMAIN_ID  })
        .then(result => {
          authenticate(result, () => {
             setIsAuthenticated(true)
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }


    useEffect(() => {
    if(!isAuth()){
        window.onload = function () {
           google.accounts.id.initialize({
             client_id:process.env.NEXT_PUBLIC_GOOGLE_CLIEND_ID,
             callback: handleOnetapResponse
           });
         }
    }
    }, [])

    useEffect(() =>{
      related_blogs({ blog: blog })
        .then((value) => {
           setRelatedBlogList(value)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])



    function showAuthor(){
        return <div className={styles.leftside}>
                  WRITTEN BY
                  <div>
                  <section className={styles.name}>{blog.postedBy.full_name}</section>
                  <font className={styles.aboutauthor}>Security researcher, uncertified hacker, crypto trader.
                  Author of the OWASP Mobile Security Guide. Pwnie winner. Former @ConsenSys</font>
                  </div>
                  <br />
                  <hr />
               </div>
    }



    function relatedBlogs(){
      if(relatedBlogList){
        return relatedBlogList.map((blog, i) => {
          return  <div className="col-md-4 col-sm-6" key={i}>
                    <div className={styles.eachblog}>
                       <BlogSmallCard key={i} blog={blog} />
                    </div>
                  </div>
        })
      }else{
        return <>
               </>
      }
    }

    return <>
            <BlogHead blog={blog} />
            <Layout isAuthenticated={isAuthenticated}>
             <div className="row col justify-content-center">
                 <div className="col-md-3  col-lg-3 d-lg-block d-xl-block d-none d-md-block d-lg-none">
                   <div className="lefttop" id="lefttop">
                    {show && showAuthor()}
                   </div>
                 </div>
                 <div className="col-md-7 col-sm-12 col-lg-6">
                   <BlogDetail blog={blog} />
                 </div>
                 <div className="col-md-2  col-lg-3">
                 </div>
             </div>
             <br /><br />
             <div className={styles.morecontainer}>
               <h3 className={styles.moretitle}>More from App</h3>
               <br />
               <hr />
               <div className="row col">
                 {relatedBlogs()}
               </div>
             </div>
            </Layout>
           </>
  }else{
    return <>
           </>
  }
}

Blog.getInitialProps = ({ query }) => {
     return read_blog(query.blog).then(response => {
          return { blog: response, query }
     })
}

export default withRouter(Blog);
