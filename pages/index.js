import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import BlogLargeCard from '../components/Blog/largeCard';
import BlogSmallCard from '../components/Blog/smallCard';
import BlogMediumCard from '../components/Blog/mediumCard';
import AuthorCard from '../components/Blog/authorCard';
import TrendingCard from '../components/Blog/trendingCard';
import Layout from '../components/Layout';
import { one_tap_login, authenticate, isAuth, signout} from '../actions/auth';


const head = () => {
   return <Head>
             <title>Home</title>
          </Head>
 }

const smallblogList = () => {
  return [{}, {}, {}, {}].map((blog, i) => {
       return <BlogSmallCard blog={blog} key={i} />
  })
}

const mediumblogList = () => {
  return [{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}].map((blog, i) => {
       return <BlogMediumCard blog={blog} key={i} />
  })
}

const authorList = () => {
  return [{},{}, {}, {}, {},{}, {}, {}].map((author, i) => {
    return <AuthorCard key={i} />
  })
}

const trendingList = () => {
  return [{},{}, {}, {}, {},{}].map((blog, i) => {
    return <TrendingCard key={i} count={i}/>
  })
}



const Home = () => {
  useEffect(() => {
    window.onscroll = function() {myFunction()};
    var rightside = document.getElementById("rightbottom");
    var sticky = rightside.offsetTop;
    function myFunction() {

      if (window.pageYOffset > 1000) {
        rightside.classList.add("fix-right-bottom");

      } else {

        rightside.classList.remove("fix-right-bottom");
      }
    }
  })


  const handleOnetapResponse = (response) => {
    one_tap_login({ googleToken: response.credential, domain: "http://localhost:3000" })
      .then(result => {
        authenticate(result, () => {
          Router.push(`/`)
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
         client_id:'198321905228-ctfq82du8gn1ftnjf2hlai4bli2g932c.apps.googleusercontent.com',
         callback: handleOnetapResponse
       });
       google.accounts.id.prompt();
     }
  }
  }, [])

  return <>
           {head()}
           <Layout>
              <div className="div-container mb-5">
                 <div className="row col">
                    <div className="col-md-4 ">
                     <BlogLargeCard />
                    </div>
                    <div className="col-md-4">
                      {smallblogList()}
                    </div>

                    <div className="col-md-4">
                      <div className={styles.rightside}>
                        <section>
                            <font className={styles.title1}>LATEST FROM AUTHORS</font>
                            <div className="row col mt-3">
                             {authorList()}
                            </div>
                            <div className="pl-3" style={{ color: 'teal'}}>See more</div>
                        </section>
                        <section className="mt-5">
                           <font className={styles.title1}>TOPICS TO READ</font>
                           <div className="pl-3" style={{ color: 'teal'}}>See more</div>
                        </section>
                      </div>
                    </div>
                 </div>
              </div>
              <hr />
              <div className="div-container mt-5">
                <section className={styles.title1}>TRENDING ON APP</section>
                <div className="row col">
                   {trendingList()}
                </div>
              </div>
              <hr />
              <div className="mt-5 div-container">
                <div className="row">
                <div className="col-md-8">
                  {mediumblogList()}
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

export default Home;
