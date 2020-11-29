import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import BlogMediumCard from '../../components/Blog/mediumCard';

const Tag = ({ router }) => {

  const tagBlogList = () => {
     return [{}, {}, {}, {}].map((blog, i) => {
       return <BlogMediumCard key={i} />
     })
  }

  return <>
          <Layout>
            <h1 className="text-center mb-5">Tag name</h1>
            <div className="row col">
              <div className="col-md-3">
              </div>
              <div className="col-md-6">
                {tagBlogList()}
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </Layout>
         </>
}

export default withRouter(Tag);
