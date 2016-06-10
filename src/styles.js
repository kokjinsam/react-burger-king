const HAMBURGER_PADDING_X = 8;
const HAMBURGER_PADDING_Y = 8;
const HAMBURGER_LINE_COLOR = '#000';
const HAMBURGER_LINE_BORDER_RADIUS = 4;
const HAMBURGER_HOVER_TRANSITION_DURATION = '0.15s';
const HAMBURGER_HOVER_TRANSITION_TIMING_FUNCTION = 'linear';

const wrapPX = (value) => (`${value}px`);

const styles = {
  hamburger: {
    padding: `${wrapPX(HAMBURGER_PADDING_Y)} ${wrapPX(HAMBURGER_PADDING_X)}`,
    display: 'inline-block',
    cursor: 'pointer',
    transitionProperty: 'opacity, filter',
    transitionDuration: HAMBURGER_HOVER_TRANSITION_DURATION,
    transitionTimingFunction: HAMBURGER_HOVER_TRANSITION_TIMING_FUNCTION,
    font: 'inherit',
    color: 'inherit',
    textTransform: 'none',
    backgroundColor: 'transparent',
    border: 0,
    margin: 0,
    overflow: 'visible',
  },

  hamburgerBox: {
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
  },

  hamburgerInner: {
    display: 'block',
    backgroundColor: HAMBURGER_LINE_COLOR,
    borderRadius: HAMBURGER_LINE_BORDER_RADIUS,
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'ease',
  },

  line: {
    size18: {
      width: '18px',
      height: '2px',
    },
    size24: {
      width: '24px',
      height: '2px',
    },
    size36: {
      width: '36px',
      height: '3px',
    },
    size48: {
      width: '48px',
      height: '3px',
    },
  },

  idle: {
    line1: {
      size18: {
        top: '3px',
      },
      size24: {
        top: '3px',
      },
      size36: {
        top: '3px',
      },
      size48: {
        top: '3px',
      },
    },
    line2: {
      size18: {
        top: '8px',
      },
      size24: {
        top: '11px',
      },
      size36: {
        top: '17px',
      },
      size48: {
        top: '23px',
      },
    },
    line3: {
      size18: {
        bottom: '3px',
      },
      size24: {
        bottom: '3px',
      },
      size36: {
        bottom: '3px',
      },
      size48: {
        bottom: '3px',
      },
    },
  },

  active: {
    arrow: {
      line1: {
        size18: {
          transform: `translate3d(${wrapPX(24 * -0.2)}, ${wrapPX(24 * 0.08)}, 0) rotate(-45deg) scale(0.6, 1)`,
        },
        size24: {
          transform: `translate3d(${wrapPX(24 * -0.3)}, ${wrapPX(24 * 0.15)}, 0) rotate(-45deg) scale(0.6, 1)`,
        },
        size36: {
          transform: `translate3d(${wrapPX(24 * -0.38)}, ${wrapPX(24 * 0.27)}, 0) rotate(-45deg) scale(0.6, 1)`,
        },
        size48: {
          transform: `translate3d(${wrapPX(24 * -0.52)}, ${wrapPX(24 * 0.41)}, 0) rotate(-45deg) scale(0.6, 1)`,
        },
      },
      line3: {
        size18: {
          transform: `translate3d(${wrapPX(24 * -0.2)}, ${wrapPX(24 * -0.08)}, 0) rotate(45deg) scale(0.6, 1)`,
        },
        size24: {
          transform: `translate3d(${wrapPX(24 * -0.3)}, ${wrapPX(24 * -0.15)}, 0) rotate(45deg) scale(0.6, 1)`,
        },
        size36: {
          transform: `translate3d(${wrapPX(24 * -0.38)}, ${wrapPX(24 * -0.24)}, 0) rotate(45deg) scale(0.6, 1)`,
        },
        size48: {
          transform: `translate3d(${wrapPX(24 * -0.52)}, ${wrapPX(24 * -0.38)}, 0) rotate(45deg) scale(0.6, 1)`,
        },
      },
    },
  },
};

export default styles;
