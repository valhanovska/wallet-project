import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';

import styles from './styles.module.css';

const RowsTrail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
          <a.div style={{ height }}>{items[index]}</a.div>
      ))}
    </div>
  );
};

export default RowsTrail;
