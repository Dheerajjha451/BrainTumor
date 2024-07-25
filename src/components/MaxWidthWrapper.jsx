import React from 'react';

const cn = (...classNames) => classNames.filter(Boolean).join(' ');

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
