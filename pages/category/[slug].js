import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
// import BlogMediumCard from '../../components/Blog/mediumCard';

const Category = ({ router }) => {

  const categoryBlogList = () => {
     return [{}, {}, {}, {}].map((blog, i) => { return "" })
  }

  return <>
          <Layout>
            <h1 className="text-center mb-5">Category name</h1>
            <div className="row col">
              <div className="col-md-3">
              </div>
              <div className="col-md-6">
                {categoryBlogList()}
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </Layout>
         </>
}

export default withRouter(Category);
