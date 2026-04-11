import { useState, useEffect } from 'react'

function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso.includes('T') ? iso : iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function typeBadgeClass(type) {
  if (type === 'PM Completed') return 'badge-pm'
  if (type === 'system')       return 'badge-system'
  return 'badge-system'
}

function dotClass(type) {
  if (type === 'PM Completed') return 'type-pm'
  if (type === 'system')       return 'type-system'
  return 'type-system'
}

function HistoryItem({ item }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="history-item">
      <div className="history-line-col">
        <div className={`history-dot ${dotClass(item.type)}`} />
        <div className="history-connector" />
      </div>
      <div className="history-content" style={{ cursor: item.summary ? 'pointer' : 'default' }}
           onClick={() => item.summary && setExpanded(e => !e)}>
        <div className="history-date">{formatDate(item.date)}</div>
        <span className={`history-type-badge ${typeBadgeClass(item.type)}`}>
          {item.type === 'PM Completed' ? '✓ PM Completed' : item.type}
        </span>
        <div className="history-title">{item.title}</div>
        {item.technician && (
          <div className="history-tech">👤 {item.technician}</div>
        )}
        {item.pmType && (
          <div style={{ fontSize: '11px', color: 'var(--blue)', marginBottom: '4px' }}>
            {item.pmType}
          </div>
        )}
        {item.summary && (
          <div
            className="history-summary"
            style={{
              maxHeight: expanded ? '500px' : '2.8em',
              overflow: 'hidden',
              transition: 'max-height 0.25s ease',
            }}
          >
            {item.summary}
          </div>
        )}
        {item.summary && !expanded && (
          <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '4px' }}>
            Tap to expand ›
          </div>
        )}
      </div>
    </div>
  )
}

function LocalSubmissionsSection({ equipment }) {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    const all = []
    equipment.pmTypes.forEach(pmType => {
      const key = `pm_submissions_${equipment.id}_${pmType.id}`
      const stored = JSON.parse(localStorage.getItem(key) || '[]')
      stored.forEach(s => all.push({ ...s, pmTypeObj: pmType }))
    })
    all.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    setSubmissions(all)
  }, [equipment])

  if (submissions.length === 0) return null

  return (
    <div className="section-pad">
      <div className="section-header" style={{ paddingTop: '8px' }}>
        <span className="section-title" style={{ color: 'var(--green)' }}>
          Submitted This Session
        </span>
        <span className="section-count">{submissions.length}</span>
      </div>
      <div className="history-list" style={{ padding: 0 }}>
        {submissions.map(s => (
          <div key={s.id} className="history-item">
            <div className="history-line-col">
              <div className="history-dot type-pm" />
              <div className="history-connector" />
            </div>
            <div className="history-content">
              <div className="history-date">{formatDate(s.submittedAt)}</div>
              <span className="history-type-badge badge-pm">✓ PM Submitted</span>
              <div className="history-title">{s.pmTypeName}</div>
              <div className="history-tech">👤 {s.technician}</div>
              <div className="history-summary">
                Condition: <strong>{s.condition}</strong>
                {s.position && <> · Position: {s.position}</>}
                {s.amount && <> · {s.amount}</>}
                {s.notes && <><br />{s.notes}</>}
                {s.photoCount > 0 && <> · {s.photoCount} photo{s.photoCount !== 1 ? 's' : ''}</>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HistoryDataSection({ equipment }) {
  const history = [...equipment.history].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div>
      {/* Locally submitted PMs appear first */}
      <LocalSubmissionsSection equipment={equipment} />

      <div className="section-pad">
        <div className="section-header">
          <span className="section-title">PM History</span>
          <span className="section-count">{history.length} records</span>
        </div>
      </div>

      <div className="history-list">
        {history.map(item => (
          <HistoryItem key={item.id} item={item} />
        ))}
      </div>

      {/* Future sections */}
      <div className="section-pad" style={{ paddingTop: '8px' }}>
        {[
          { icon: '🔬', label: 'Oil Analysis Reports', note: 'Connect to lab portal — Future Phase 2' },
          { icon: '📊', label: 'Equipment Failure Analysis', note: 'Root cause documentation — Future Phase 2' },
          { icon: '📁', label: 'Inspection Reports', note: 'Full rebuild inspection reports — Future Phase 1' },
        ].map((sec, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)', padding: '13px 14px',
            marginBottom: '8px', opacity: 0.5,
          }}>
            <span style={{ fontSize: '20px' }}>{sec.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-2)' }}>{sec.label}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '2px' }}>{sec.note}</div>
            </div>
            <span style={{
              fontSize: '10px', fontWeight: 700,
              background: 'var(--surface-3)', border: '1px solid var(--border-2)',
              borderRadius: '100px', padding: '3px 8px', color: 'var(--text-3)',
              whiteSpace: 'nowrap',
            }}>
              Coming Soon
            </span>
          </div>
        ))}
      </div>

      <div style={{ height: '16px' }} />
    </div>
  )
}
