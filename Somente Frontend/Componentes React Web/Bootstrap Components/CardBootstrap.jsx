// components/bootstrap/CardBootstrap.jsx
export default function CardBootstrap({ title, text, image, footer, children }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text || children}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}