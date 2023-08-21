import React from 'react';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { fetchAllOffersAction } from '../../store/api-actions';

type DataErrorProps = {
  action: typeof fetchAllOffersAction;
}

function DataError({action}: DataErrorProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <div className="not-found container">
      <b className="not-found__heading">Failed to load data</b>
      <button
        className="not-found__button button button--primary"
        type="button"
        onClick={() => {
          dispatch(action());
        }}
      >
        Try again
      </button>
    </div>
  );
}

export default DataError;
