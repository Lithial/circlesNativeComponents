import React from 'react';
import PropTypes from "prop-types";

const CenterViewWeb = ({children}) => {
    return (
        <div style={{
            display: "flex",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0C1E3C',
        }}>
            {children}
        </div>
    );
};

CenterViewWeb.defaultProps = {
    children: null,
};

CenterViewWeb.propTypes = {
    children: PropTypes.node,
};

export default CenterViewWeb;
