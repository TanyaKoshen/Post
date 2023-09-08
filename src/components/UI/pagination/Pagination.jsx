import React from 'react';
import {getPagesArray} from '../../../utils/pages';

const Pagination = ({page, changePage, totalPages }) => {
  const pagesArray = getPagesArray(totalPages)
  return (
    <div className="page__wrapper">
      {pagesArray?.map(el =>
        <span
          key={el}
          className={el === page ? 'page current' : 'page'}
          onClick={() => changePage(el)}
        >
            {el}
          </span>
      )}
    </div>
  );
};

export default Pagination;
