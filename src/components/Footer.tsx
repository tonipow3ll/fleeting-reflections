import React from 'react';
import ReactDOM from 'react-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';

function Footer() {
    const styles = {
        stickToBottom: {
          width: '100%',
          position: 'fixed',
          bottom: 0,
        },
      };
    return (
        <BottomNavigation>
            <p>stuff here</p>
        </BottomNavigation>
    )
}

export default Footer;