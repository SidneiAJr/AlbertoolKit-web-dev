// components/bootstrap/AvatarBootstrap.jsx
export default function AvatarBootstrap({ src, name, size = 50, rounded = true }) {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="d-inline-block">
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className={rounded ? 'rounded-circle' : 'rounded'} 
          style={{ width: size, height: size, objectFit: 'cover' }}
        />
      ) : (
        <div 
          className={`bg-primary d-flex align-items-center justify-content-center ${rounded ? 'rounded-circle' : 'rounded'}`}
          style={{ width: size, height: size, fontSize: size * 0.4, color: 'white' }}
        >
          {initials || '?'}
        </div>
      )}
    </div>
  );
}