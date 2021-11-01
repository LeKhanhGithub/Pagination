import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {

    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;

    const total_Pages = Math.ceil(_totalRows/_limit);

    const handlePage = (newPage) => {
        if(onPageChange){
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <button disabled={_page <=1} onClick={() => handlePage(_page - 1)}>prev</button>
            <button disabled={_page >= total_Pages} onClick={() => handlePage(_page + 1)}>next</button>
        </div>
    );
}

export default Pagination;
