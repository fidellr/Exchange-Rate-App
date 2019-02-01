import React from 'react';
import cls from 'classnames';

export default ({
  className,
  children,
}) => {
  const classes = cls('u-boxShadowBottom u-borderRadius2', className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
};
