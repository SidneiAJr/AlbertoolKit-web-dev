import React from 'react';

export default function Table({ children }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}