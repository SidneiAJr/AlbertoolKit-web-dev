import React from 'react';

export default function Li({ children, ...props }) {
  return <li {...props}>{children}</li>;
}