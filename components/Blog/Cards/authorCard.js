import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../../styles/BlogAuthor.module.css';


const Author = ({ author }) => {
  if(author){
    return <div className="col-3 mb-3 col-sm-3">
             <div>
             <LazyLoadImage src={author.postedBy.headshot_url} alt="" className={styles.authorImage}/>
             </div>
             <label  noWrap className={styles.authorname}>
              {author.postedBy.full_name}
            </label>
           </div>
  }else{
    return <>
           </>
  }

}
export default Author;
