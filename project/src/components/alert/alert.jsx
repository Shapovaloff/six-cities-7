import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {AlertText, DEFAULT_TIMER} from '../../const';

function Alert({ text = AlertText.DEFAULT }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, DEFAULT_TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {visible && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#4481c3',
            textAlign: 'center',
            verticalAlign: 'center',
            color: 'white',
            zIndex: 1000,
          }}
        >
          <div style={{ padding: 5 }}>{text}</div>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
};

export default Alert;
