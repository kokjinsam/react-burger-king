import React, { PropTypes } from 'react';
import radium from 'radium';

import styles from './styles';

const propTypes = {
  size: PropTypes.oneOf([18, 24, 36, 48]),
  type: PropTypes.oneOf(['arrow', 'arrow-alt']),
  isActive: PropTypes.bool,
};

const defaultProps = {
  size: 24,
  type: 'arrow',
  isActive: false,
};

const buildActiveStyle = (line, type, size) => (styles.active[type][`line${line}`][`size${size}`]);
const buildIdleStyle = (line, size) => (styles.idle[`line${line}`][`size${size}`]);
const buildLineStyle = (size) => (styles.line[`size${size}`]);
const buildSquareBoxStyle = (size) => ({
  width: `${size}px`,
  height: `${size}px`,
});

const BurgerKing = ({
  size,
  type,
  isActive,
  ...others,
}) => {
  const boxStyle = [
    styles.hamburgerBox,
    buildSquareBoxStyle(size),
  ];

  const line1Style = [
    styles.hamburgerInner,
    buildLineStyle(size),
    buildIdleStyle(1, size),
    isActive && buildActiveStyle(1, type, size),
  ];

  const line2Style = [
    styles.hamburgerInner,
    buildLineStyle(size),
    buildIdleStyle(2, size),
  ];

  const line3Style = [
    styles.hamburgerInner,
    buildLineStyle(size),
    buildIdleStyle(3, size),
    isActive && buildActiveStyle(3, type, size),
  ];

  return (
    <button style={styles.hamburger} {...others}>
      <span style={boxStyle}>
        <span style={line1Style}></span>
        <span style={line2Style}></span>
        <span style={line3Style}></span>
      </span>
    </button>
  );
};

BurgerKing.propTypes = propTypes;
BurgerKing.defaultProps = defaultProps;

export default radium(BurgerKing);
