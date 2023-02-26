import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/configs';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSpinner,
   faMagnifyingGlass,
   faCircleXmark,
   faPlus,
   faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { logo } from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         // setSearchResult([]);
      }, 0);
   });

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('inner-left')}>
               <Link to={routes.home}>
                  <img src={logo} alt="TikTok" />
               </Link>
            </div>
            <div className={cx('inner-right')}>
               {/* Search */}
               <Tippy
                  interactive
                  visible={searchResult.length > 0}
                  render={(attrs) => (
                     <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                     >
                        <PopperWrapper>
                           <h4 className={cx('search-title')}>Accounts</h4>
                           <AccountItem
                              data={{
                                 avatar: 'image',
                                 name: 'abc',
                                 username: 'abc@123',
                              }}
                           />
                        </PopperWrapper>
                     </div>
                  )}
               >
                  <div className={cx('search')}>
                     <input
                        className={cx('search-input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                     />
                     <button className={cx('search-clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                     </button>
                     {/* <FontAwesomeIcon
                  className={cx('search-loader')}
                  icon={faSpinner}
               /> */}
                     <span className={cx('search-splitter')}></span>
                     <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                     </button>
                  </div>
               </Tippy>
               {/* Action */}
               <div className={cx('action')}>
                  <button className={cx('action-btn', 'upload')}>
                     <FontAwesomeIcon
                        icon={faPlus}
                        className={cx('action-icon')}
                     />
                     Upload
                  </button>
                  <button
                     disabled
                     className={cx('action-btn', 'login')}
                     onClick={() => console.log(1)}
                  >
                     Log in
                  </button>
                  <button className={cx('action-btn', 'menu')}>
                     <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className={cx('action-icon')}
                     />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
