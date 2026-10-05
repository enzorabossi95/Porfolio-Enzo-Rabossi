export function App() {
  return (
    <div className="grid-12" style={{ paddingBlock: '2rem' }}>
      <p className="micro-label" style={{ gridColumn: '1 / -1' }}>
        [ Tokens check ]
      </p>
      <h1
        style={{
          gridColumn: '1 / -1',
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-tight)',
        }}
      >
        Enzo Rabossi
      </h1>
      <p className="text-indent" style={{ gridColumn: '7 / -1', fontSize: 'var(--font-size-m)' }}>
        <span className="index-number">01</span> Router and pages land in the next sprints.
      </p>
    </div>
  )
}
