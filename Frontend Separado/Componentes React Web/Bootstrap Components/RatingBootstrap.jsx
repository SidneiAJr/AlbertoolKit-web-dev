// components/bootstrap/RatingBootstrap.jsx
export default function RatingBootstrap({ value = 0, total = 5, onChange, readonly = false }) {
  return (
    <div className="d-flex gap-1">
      {[...Array(total)].map((_, i) => (
        <i
          key={i}
          className={`fa-star ${i < value ? 'fas' : 'far'} text-warning`}
          style={{ cursor: readonly ? 'default' : 'pointer', fontSize: '24px' }}
          onClick={() => !readonly && onChange && onChange(i + 1)}
        />
      ))}
    </div>
  );
}