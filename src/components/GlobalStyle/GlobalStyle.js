import { Children } from 'react';
import PropTypes from 'prop-types';
import './GlobalStyle.scss';

function GlobalStyle({ children }) {
   return Children.only(children);
}

GlobalStyle.propTypes = {
   children: PropTypes.node.isRequired,
};

export default GlobalStyle;
