// components/bootstrap/TableBootstrap.jsx
export default function TableBootstrap({ columns, data, striped = true, hover = true, bordered = false, size = 'md' }) {
  const sizeClass = size === 'sm' ? 'table-sm' : '';
  
  return (
    <div className="table-responsive">
      <table className={`table ${striped ? 'table-striped' : ''} ${hover ? 'table-hover' : ''} ${bordered ? 'table-bordered' : ''} ${sizeClass}`}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {columns.map((col, colIdx) => (
                <td key={colIdx}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}