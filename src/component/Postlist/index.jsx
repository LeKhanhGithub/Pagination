import React from 'react';
import PropTypes from 'prop-types';

Postlist.propTypes = {
    postlist: PropTypes.array

};

Postlist.defaultProps = {
    postlist: [],
}

function Postlist(props) {

    const { postlist } = props;
    return (
        <div>
            <ul>
                {postlist.map((postlist) => {
                    return (
                        <li key={postlist.id}> {postlist.title} </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default Postlist;