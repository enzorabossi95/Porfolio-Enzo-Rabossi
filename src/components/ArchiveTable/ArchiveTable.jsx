import { Link } from 'react-router-dom'
import styles from './ArchiveTable.module.css'

// A real <table> — the reference site uses styled <div>s for this, which we
// deliberately don't copy (see CLAUDE.md's accessibility rules).
export function ArchiveTable({ columns, rows }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col" className={`micro-label ${styles.head}`}>
              [ {column} ]
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className={styles.row}>
            {row.cells.map((cell, index) =>
              row.to && index === 0 ? (
                <td key={index} className={styles.cell}>
                  <Link to={row.to} className={styles.link}>
                    {cell}
                  </Link>
                </td>
              ) : (
                <td key={index} className={styles.cell}>
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
