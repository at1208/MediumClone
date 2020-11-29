import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return <div className={styles.footer}>
            <div className="row">
               <div className="col-5">
               </div>
               <div className="col-7">
                 <div className="row justify-content-end">
                      <span className={styles.field}>About</span>
                      <span className={styles.field}>Help</span>
                      <span className={styles.field}>Legal</span>
                 </div>
               </div>
            </div>
         </div>
}

export default Footer;
