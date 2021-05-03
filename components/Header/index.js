import { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.css';
import { isAuth, signout } from '../../actions/auth';
// import Image from 'next/image';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';


const Header = ({ isAuthenticated }) => {
  const [user, setUser] = useState();

 useEffect(() => {
   if(isAuth()){
    setUser(isAuth())
   }
 }, [isAuthenticated])

  const menu = (
    <Menu>
      <Menu.Item key="0">
         <button className={styles.menuitem} onClick={() => signout(() => window.location.reload())}>Logout</button>
      </Menu.Item>
    </Menu>
  );



  return <div className={styles.outercontainer}>
            <div className="row">
              <div className="col-6">
               <h1 className={styles.appname}>App name</h1>
              </div>
              <div className="col-6">
                  {user && <div className="row justify-content-end">
                     
                     <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                         <img src={user[0].picture} className={styles.picture} alt="profile picture"  />
                        </a>
                      </Dropdown>
                  </div>}
              </div>
            </div>
         </div>
}

export default Header;
