// components/bootstrap/BadgeBootstrap.jsx
export default function BadgeBootstrap({ children, variant = 'primary', rounded = false, asPill = false }) {
  const className = `badge bg-${variant} ${rounded ? 'rounded-circle' : ''} ${asPill ? 'rounded-pill' : ''}`;
  
  return <span className={className}>{children}</span>;
}