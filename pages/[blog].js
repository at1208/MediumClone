import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import BlogDetail from '../components/Blog/blog';
import BlogSmallCard from '../components/Blog/smallCard';
import Router from 'next/router';
import styles from '../styles/Blog.module.css';
import { one_tap_login, authenticate, isAuth, signout} from '../actions/auth';



let blog = `<p><span style="background-color: transparent;">Today, the world is moving to the automation of things. People prefer devices, for performing the task with less effort, over the traditional methods of putting effort into the completion of a task. Devices are invented which can share data among themselves for producing useful information or result. Such devices are designed to share data from one device to another through the internet using sensors embedded on it and are known as the Internet of Things (IoT) devices. Different software is used for controlling IoT devices and other technologies such as real-time analytics and machine learning are also applied for its better performance. The interconnection of IoT devices helps organizations in performing the task at a lesser time which leads to cost reduction. The data produced by the IoT devices are used by the companies and helps in better analysis and decision making, which benefits in developing the most effective business strategy.</span></p><p><br></p><p><span style="background-color: transparent;">IoT devices are occupying its place in everyone's heart, but initially, it also possesses some aspects that are to be tackled for its better utilization with the hope of achieving its highest potential. So let's discuss the advantages and disadvantages of IoT devices for better understanding.</span></p><p><br></p><h4><strong style="color: rgb(14, 16, 26); background-color: transparent;"><u>Advantages</u></strong></h4><p><br></p><ul><li><strong style="background-color: transparent;">Better Communication -&nbsp;</strong><span style="background-color: transparent;">Since the devices are interconnected, as they pursue machine to machine communication, it leads to lesser inefficiencies and better quality.</span></li><li><strong style="background-color: transparent;">Time-Saving -&nbsp;</strong><span style="background-color: transparent;">It enables faster response and performs the task at a lesser time.</span></li><li><strong style="background-color: transparent;">Automation -</strong><span style="background-color: transparent;">&nbsp;IoT devices are connected through wireless infrastructure, which enables the devices to perform automatically by itself and human interventions are not required.</span></li><li><strong style="background-color: transparent;">Useful Information -&nbsp;</strong><span style="background-color: transparent;">A large number of</span><strong style="background-color: transparent;">&nbsp;</strong><span style="background-color: transparent;">Informations as the output of such devices can be used for analysis and decision making which can help for developing business strategies.</span></li><li><strong style="background-color: transparent;">Cost Saving -&nbsp;</strong><span style="background-color: transparent;">Since IoT devices perform faster and avoid human intervention, it reduces the cost for the company.</span></li></ul><p><br></p><h4><strong style="color: rgb(14, 16, 26); background-color: transparent;"><u>Disadvantages</u></strong></h4><p><br></p><ul><li><strong style="background-color: transparent;">Complex in nature -&nbsp;</strong><span style="background-color: transparent;">Since IoT device is interconnected with many other devices, the problem of arising any technical issue may lead to serious consequences. It may take more time to identify the problem and fix the bug.</span></li><li><strong style="background-color: transparent;">Issue of Compatibility -&nbsp;</strong><span style="background-color: transparent;">IoT devices include devices from different manufacturing companies, which may result in affecting its work performance and tagging the other devices due to its lack of compatibility. Technical issues may arise.</span></li><li><strong style="background-color: transparent;">Reduces Employment -&nbsp;</strong><span style="background-color: transparent;">IoT devices replace the small works, performed by humans for their living, which will lead to a rise in unemployment.</span></li><li><strong style="background-color: transparent;">Control Over Humans -&nbsp;</strong><span style="background-color: transparent;">Technology is gradually taking control over humans. People are depending on devices for even small purpose. Now, it is quite impossible for imagining our life without technology.</span></li></ul><p><br></p><h4><strong style="color: rgb(14, 16, 26); background-color: transparent;"><u>IoT Applications on Different Fields</u></strong></h4><p><br></p><ul><li><strong style="background-color: transparent;">Wearables -&nbsp;</strong><span style="background-color: transparent;">It consists of devices that help for monitoring Human heart rate, pulse rate, oxygen level, glucose level, etc. It also includes a smartwatch.</span></li><li><strong style="background-color: transparent;">Smart Home -&nbsp;</strong><span style="background-color: transparent;">IoT devices are used along with Artificial Intelligence for setting up a smart home. The appliances in the home can be controlled with a device or remote without any human effort.</span></li><li><strong style="background-color: transparent;">Health Care -</strong><span style="background-color: transparent;">&nbsp;IoT can help medical science for converting reactive medical-based system to a proactive wellness-based system. The current way of medical science only works on the old data and volunteers for performing medical tests, whereas, IoT can help to open more sources for data analysis, real-time field data, and testing.</span></li><li><strong style="background-color: transparent;">Agriculture -&nbsp;</strong><span style="background-color: transparent;">There is a need to focus on the agriculture of our world, to feed our upcoming generation, and improve the system. IoT helps in the greenhouse for setting the requirement according to the plants such as the climatic changes and other parameters. It helps to gather deep knowledge about the crops.</span></li><li><strong style="background-color: transparent;">Industrial Development -&nbsp;</strong><span style="background-color: transparent;">Industrial sector requires IoT, as it needs faster development from production to marketing practices. It helps Industries for enhancing its performance. It ensures inventory management, product flow monitoring, safety and security, quality control packaging, logistics, and supply chain optimization.</span></li></ul><p><br></p><h4><strong style="color: rgb(14, 16, 26); background-color: transparent;"><u>Some Existing IoT Devices</u></strong></h4><p><br></p><ul><li><span style="background-color: transparent;">Amazon Echo - Voice Controller</span></li><li><span style="background-color: transparent;">Nest Cam - Indoor and Outdoor Camera</span></li><li><span style="background-color: transparent;">Mr. Coffee - Smart Coffeemaker</span></li><li><span style="background-color: transparent;">Smart Mat - Intelligent Yoga mat</span></li><li><span style="background-color: transparent;">TrackR bravo - Tracking device</span></li><li><span style="background-color: transparent;">Awair - Smart air quality monitor</span></li><li><span style="background-color: transparent;">Nest Protect - Smoke and CO Detector</span></li><li><span style="background-color: transparent;">Sync Smartband - Activity Tracker</span></li><li><span style="background-color: transparent;">Hydrawise - Smart Irrigation Controller</span></li><li><span style="background-color: transparent;">Kinsa - Smart Thermometer</span></li></ul><p><br></p><h4><strong style="color: rgb(14, 16, 26); background-color: transparent;"><u>Future of IoT Devices</u></strong></h4><p><br></p><p><span style="background-color: transparent;">This technology is growing rapidly and is expected to be the most common technology in every field by the next decade. The automation of things will create much ease for people with a busy schedule to handle small works without any human effort. Dependence on IoT devices will increase at a high pace and the complexity may reduce in the future with a promise of bright success and maintained high working potential. Standard of living will increase even more in the future with the growth of IoT devices. Effective business prospects will be implemented and comfort in the workplace will be increased. Fear of using self-working devices would be reduced from the human mind.</span></p><p><br></p><p><br></p>`

const Blog = ({ query, router }) => {
  const [show, setShow] = useState(false);

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


  // const handleOnetapResponse = (response) => {
  //   one_tap_login({ googleToken: response.credential, domain: "http://localhost:3000" })
  //     .then(result => {
  //       authenticate(result, () => {
  //           Router.push(`/${router.query.blog}`)
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  //
  //
  // useEffect(() => {
  // if(!isAuth()){
  //     window.onload = function () {
  //        google.accounts.id.initialize({
  //          client_id:'909779191807-1cel5jhmig8bflc677mi46ppvai4ku6c.apps.googleusercontent.com',
  //          callback: handleOnetapResponse
  //        });
  //
  //        google.accounts.id.prompt((notification) => {
  //          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
  //
  //          }
  //      });
  //      }
  // }
  // }, [])



  const showAuthor = () => {
      return <div className={styles.leftside}>
                WRITTEN BY
                <div>
                <section className={styles.name}>Bernhard Mueller</section>
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
                {'Creating a Design System in React'} | {process.env.NEXT_PUBLIC_APP_NAME}
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

          <Layout>
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

export default withRouter(Blog);
