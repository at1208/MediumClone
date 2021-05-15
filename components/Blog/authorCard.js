import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/BlogAuthor.module.css';


const Author = ({ author }) => {
  return <div className="col-3 mb-3 col-sm-3">
           <div>
           <LazyLoadImage src={author && author.postedBy && author.postedBy.headshot_url} alt="" className={styles.authorImage}/>
           </div>
           <Typography  noWrap className={styles.authorname}>
          {author && author.postedBy && author.postedBy.full_name}
        </Typography>

         </div>
}
export default Author;
