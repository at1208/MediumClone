import Image from 'next/image'
import Typography from '@material-ui/core/Typography';

const Author = () => {
  return <div className="col-3 mb-3 col-sm-3">
           <div>
           <Image src="/blog.jpeg" width="70" height="70" alt="Profile Picture" className="img img-fluid"/>
           </div>
           <Typography  variant="subtitle2" noWrap>
          Aman Tiwari
        </Typography>

         </div>
}
export default Author;
