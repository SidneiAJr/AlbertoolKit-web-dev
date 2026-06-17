// components/bootstrap/InputBootstrap.jsx
export default function InputBootstrap({ type = 'text', placeholder, value, onChange, label, error, required = false }) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}