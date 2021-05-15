import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// import jwt_decode from 'jwt-decode'
import styles from '../styles/Home.module.css';
import BlogLargeCard from '../components/Blog/largeCard';
import BlogSmallCard from '../components/Blog/smallCard';
import BlogMediumCard from '../components/Blog/mediumCard';
import AuthorCard from '../components/Blog/authorCard';
import TrendingCard from '../components/Blog/trendingCard';
import Layout from '../components/Layout';
import { one_tap_login, authenticate, isAuth} from '../actions/auth';
import { blog_list, author_list, trending_list } from '../actions/blog';




const Home = () => {
  const [authors, setAuthors] = useState([]);
  const [trendingBlogs, setTrending] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [largeBlogs, setLargeBlogs] = useState();
  const [smallBlogs, setSmallBlogs] = useState();
  const [mediumBlogs, setMediumBlogs] = useState();


  useEffect(() => {
    window.onscroll = function() {myFunction()};
    var rightside = document.getElementById("rightbottom");
    // var sticky = rightside.offsetTop;
    function myFunction() {
      if (window.pageYOffset > 1000) {
        rightside.classList.add("fix-right-bottom");

      } else {
        rightside.classList.remove("fix-right-bottom");
      }
    }
  })


 useEffect(() => {
   blog_list().then(blog => {
       let largeBlogs = blog && blog[0];
       let smallBlogs = blog && blog.slice(1, 5);
       let mediumBlogs = blog && blog.slice(6);
       setLargeBlogs(largeBlogs)
       setSmallBlogs(smallBlogs)
       setMediumBlogs(mediumBlogs)
      })
 }, [])

  useEffect(() => {
    author_list()
    .then(response => {
      setAuthors(response)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    trending_list()
    .then(response => {
      setTrending(response)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  const handleOnetapResponse = (response) => {
  // const decodedToken = jwt_decode(response.credential)
    one_tap_login({ googleToken: response.credential, domain: process.env.NEXT_PUBLIC_DOMAIN_ID })
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
         google.accounts.id.prompt();
       }
    }
  }, [])

  function HeaderSEO(){
     return <Head>
               <title>Home</title>
            </Head>
   }

  function SmallblogList(){
    if(smallBlogs){
      return smallBlogs.map((blog, i) => {
           return <BlogSmallCard blog={blog} key={i} />
      })
    }else{
        return <> </>
    }
  }

  function MediumblogList(){
    if(mediumBlogs){
      return mediumBlogs.map((blog, i) => {
           return <BlogMediumCard blog={blog} key={i} />
      })
    }else{
       return <> </>
    }
  }

  function AuthorList(){
    if(authors){
      return authors.map((author, i) => {
        return <AuthorCard author={author} key={i} />
      })
    }else{
      return <> </>
    }
  }

  function TrendingList(){
    if(trendingBlogs){
      return trendingBlogs.map((blog, i) => {
        return <TrendingCard blog={blog} key={i} count={i} />
      })
    }else{
      return <></>
    }
  }

  return <>
           <HeaderSEO  />
           <Layout isAuthenticated={isAuthenticated}>
              <div className="div-container mb-5">
                 <div className="row col">
                    <div className="col-md-4 col-sm-5 col-lg-4">
                     <BlogLargeCard blog={largeBlogs} />
                    </div>
                    <div className="col-md-8 col-sm-7 col-lg-4">
                     <SmallblogList />
                    </div>

                    <div className="col-md-12 col-lg-4">
                      <div className={styles.rightside}>
                         <div className="row col">
                           <div className="col-md-6 col-sm-6 col-lg-12">
                           <section>
                               <font className={styles.title1}>LATEST FROM AUTHORS</font>
                               <div className="row col mt-3">
                                <AuthorList />
                               </div>
                               <div className="pl-3" style={{ color: 'teal'}}>See more</div>
                           </section>
                           </div>
                           <div className="col-md-6 col-sm-6 col-lg-12">
                           <section className="mt-5">
                              <font className={styles.title1}>TOPICS TO READ</font>
                              <div className="pl-3" style={{ color: 'teal'}}>See more</div>
                           </section>
                           </div>
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
              <hr />
              <div className="div-container mt-5">
                <section className={styles.title1}> TRENDING ON APP</section>
                <div className="row col">
                   <TrendingList />
                </div>
              </div>
              <hr />
              <div className="mt-5 div-container">
                <div className="row">
                <div className="col-md-8">
                  <MediumblogList />
                </div>
                <div className="col-md-4 d-lg-block d-xl-block d-none d-md-block d-lg-none">
                  <section className="rightbottom" id="rightbottom">
                     <div className={styles.rightContainer}>
                     </div>
                     <div className="row">
                       <span className={styles.field}>Help</span>
                       <span className={styles.field}>Careers</span>
                       <span className={styles.field}>Privacy</span>
                       <span className={styles.field}>Terms</span>
                       <span className={styles.field}>About</span>
                       <span className={styles.field}>Contact</span>
                       <span className={styles.field}>Sponsor</span>
                     </div>
                  </section>
                </div>
               </div>
              </div>
          </Layout>
         </>
}
export default Home
