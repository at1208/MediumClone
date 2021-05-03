import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Author = ({ author }) => {
  return <div className="col-3 mb-3 col-sm-3">
           <div>
           <LazyLoadImage src={author && author.postedBy && author.postedBy.headshot_url} width="70" height="70" alt="Profile Picture" className="img img-fluid"/>
           </div>
           <Typography  variant="subtitle2" noWrap>

          {author && author.postedBy && author.postedBy.full_name}
        </Typography>

         </div>
}
export default Author;
