import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677488400&x-signature=iOIJTlywcLqlhqxXwzwJBLnT2QU%3D"
            alt="avatar"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               Nguyen Van A
               <FontAwesomeIcon
                  className={cx('check-icon')}
                  icon={faCheckCircle}
               />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
