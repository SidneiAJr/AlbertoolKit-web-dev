import React from 'react';

export default function Strong({ children, ...props }) {
  return <strong {...props}>{children}</strong>;
}