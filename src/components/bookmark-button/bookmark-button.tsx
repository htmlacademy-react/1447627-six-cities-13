import React, {useState} from 'react';
import styles from './bookmark-button.module.css';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {redirectToRoute} from '../../store/action';
import {addOfferToFavorites, removeOfferFromFavorites} from '../../store/api-actions';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAutorizationStatus} from '../../store/user/user.selectors';

type BookmarkButtonProps = {
  active?: boolean;
  additionalClassName?: string;
  offerId: string;
  width?: number;
  height?: number;
}

function BookmarkButton({
  active = false,
  additionalClassName,
  offerId,
  width = 18,
  height = 19
}: BookmarkButtonProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAutorizationStatus);
  const [isActive, setIsActive] = useState(active);

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    if (isActive) {
      dispatch(removeOfferFromFavorites(offerId));
      setIsActive(false);
    } else {
      dispatch(addOfferToFavorites(offerId));
      setIsActive(true);
    }
  };

  return (
    <button
      className={`
        ${styles.button}
        ${isActive ? `${styles.activeButton}` : ''}
        ${additionalClassName || ''}
      `}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={styles.icon}
        width={width}
        height={height}
        aria-hidden="true"
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
