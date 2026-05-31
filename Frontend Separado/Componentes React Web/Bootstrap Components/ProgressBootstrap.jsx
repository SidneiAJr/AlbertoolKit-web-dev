// components/bootstrap/ProgressBootstrap.jsx
export default function ProgressBootstrap({ value = 0, max = 100, animated = false, striped = false, variant = 'primary' }) {
  const percent = (value / max) * 100;

  return (
    <div className="progress" style={{ height: '20px' }}>
      <div 
        className={`progress-bar bg-${variant} ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''}`}
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {Math.round(percent)}%
      </div>
    </div>
  );
}