// components/bootstrap/AlertBootstrap.jsx
export default function AlertBootstrap({ children, variant = 'primary', dismissible = false, onClose }) {
  return (
    <div className={`alert alert-${variant} ${dismissible ? 'alert-dismissible' : ''} fade show`} role="alert">
      {children}
      {dismissible && (
        <button type="button" className="btn-close" onClick={onClose}></button>
      )}
    </div>
  );
}