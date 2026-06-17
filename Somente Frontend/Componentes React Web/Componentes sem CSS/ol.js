import React from 'react';

export default function Ol({ children, ...props }) {
  return <ol {...props}>{children}</ol>;
}