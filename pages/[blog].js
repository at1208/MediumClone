import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import BlogDetail from '../components/Blog/blog';
import BlogSmallCard from '../components/Blog/smallCard';
import Router from 'next/router';
import styles from '../styles/Blog.module.css';
import { read_blog } from '../actions/blog';
import { one_tap_login, authenticate, isAuth} from '../actions/auth';




const Blog = ({ query, router, blog, error }) => {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

         google.accounts.id.prompt((notification) => {
           // if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
           //   console.log()
           // }
       });
       }
  }
  }, [])



  const showAuthor = () => {
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



  const relatedBlogs = () => {
     return [{},{}, {}, {}, {},{}].map((blog, i) => {
       return  <div className="col-md-4 col-sm-6" key={i}>
                 <div className={styles.eachblog}>
                    <BlogSmallCard key={i} />
                 </div>
               </div>
     })
  }


    const BlogSchema = (blog) => {
      return { "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${"query.slug"}`
      },
      "headline": "blog.title",
      "image": `${process.env.NEXT_PUBLIC_API}/blog/photo/${"blog.slug"}`,
      "author": {
        "@type": "Person",
        "name": "blog.postedBy.name"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Geeksocean.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geeksocean.com/static/images/Logo.jpg",
          "width": 60,
          "height": 60
        }
      },
      "datePublished": "blog.createdAt",
      "dateModified": "blog.updatedAt"
      }
    }

    const head = () => (
        <Head>
            <title>
                {blog.title} | {process.env.NEXT_PUBLIC_APP_NAME}
            </title>
            <meta name="description" content={"blog.mdesc"} />
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${"query.slug"}`} />
            <meta property="og:title" content={`${"blog.title"}| ${process.env.NEXT_PUBLIC_APP_NAME}`} />
            <meta property="og:description" content={"blog.mdesc"} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${"query.slug"}`} />
            <meta property="og:site_name" content={`${process.env.NEXT_PUBLIC_APP_NAME}`} />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API}/blog/photo/${"blog.slug"}`} />
            <meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_API}/blog/photo/${"blog.slug"}`} />
            <meta property="og:image:type" content="image/jpg"  alt='author'/>
            <meta property="fb:app_id" content={`${process.env.NEXT_PUBLIC_FB_APP_ID}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@geeks_ocean" />
            <meta name="twitter:account_id" content="1244566301244190720" />
            <meta name="twitter:title" content={`${"blog.title"}| ${process.env.NEXT_PUBLIC_APP_NAME}`} />
            <meta name="twitter:description" content={"blog.mdesc"} />
            <meta name="twitter:creator" content={"blog.postedBy.name"} />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_API}/blog/photo/${"blog.slug"}`} />
            <script
              type='application/ld+json'
              defer
              dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogSchema(blog))}}
          />
        </Head>
    );


  return <>
          {head()}
          <Layout isAuthenticated={isAuthenticated}>
           <div className="row col justify-content-center">
               <div className="col-md-3 d-lg-block d-xl-block d-none d-md-block d-lg-none">
                 <div className="lefttop" id="lefttop">
                  {show && showAuthor()}
                 </div>
               </div>
               <div className="col-md-6">
                 <BlogDetail blog={blog} />
               </div>
               <div className="col-md-3">
               </div>
           </div>
           <div className={styles.morecontainer}>
             <h3 className={styles.moretitle}>More from App</h3>
             <hr />
             <div className="row col">
               {relatedBlogs()}
             </div>
           </div>
          </Layout>
         </>
}

Blog.getInitialProps = ({ query }) => {
     return read_blog(query.blog).then(response => {
          return { blog: response, query }
     })
}

export default withRouter(Blog);
