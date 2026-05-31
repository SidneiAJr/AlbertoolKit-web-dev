export default function ButtonBootstrap({ children, onClick, variant = 'primary' }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} m-1`}
    >
      {children}
    </button>
  );
}