import React from 'react';

export default function Ul({ children, ...props }) {
  return <ul {...props}>{children}</ul>;
}