import { EQUIPMENT } from '../data/equipment.js'

function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function EquipmentCard({ eq, onOpen }) {
  const pmCount = eq.pmTypes.length
  const pendingPM = eq.nextPM && new Date(eq.nextPM) < new Date() ? 'Overdue' : null

  return (
    <div className="eq-card" onClick={() => onOpen(eq.id)}>
      <div className="eq-card-top">
        <div>
          <div className="eq-card-id">{eq.title}</div>
          <div className="eq-card-subtitle">{eq.subtitle}</div>
        </div>
        <div
          className="eq-card-status"
          style={pendingPM ? { color: 'var(--yellow)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)' } : {}}
        >
          <span className="dot" style={pendingPM ? { background: 'var(--yellow)', boxShadow: '0 0 5px var(--yellow)' } : {}} />
          {pendingPM || 'Active'}
        </div>
      </div>

      <div className="eq-card-location">
        <span>📍</span>
        {eq.location}
      </div>

      <div className="eq-card-stats">
        <div className="eq-card-stat">
          <div className="eq-stat-value">{eq.nfcTagCount}</div>
          <div className="eq-stat-label">NFC Tag{eq.nfcTagCount !== 1 ? 's' : ''}</div>
        </div>
        <div className="eq-card-stat">
          <div className="eq-stat-value">{pmCount}</div>
          <div className="eq-stat-label">PM Type{pmCount !== 1 ? 's' : ''}</div>
        </div>
        <div className="eq-card-stat">
          <div className="eq-stat-value">{eq.motor.hp}HP</div>
          <div className="eq-stat-label">Motor</div>
        </div>
      </div>

      <div className="eq-card-footer">
        <div className="eq-card-pm-info">
          Last PM: <span>{formatDate(eq.lastPM)}</span>
        </div>
        <button className="eq-open-btn" onClick={e => { e.stopPropagation(); onOpen(eq.id) }}>
          Open Portal
          <span>›</span>
        </button>
      </div>
    </div>
  )
}

export default function HomePage({ onOpen }) {
  const activeCount = EQUIPMENT.filter(e => e.status === 'active').length

  return (
    <div className="home-page app-screen">
      <div className="home-header">
        <div className="home-brand">
          <div className="home-brand-icon">⚙️</div>
          <div className="home-brand-text">
            <h1>PMIntelligence</h1>
            <p>EQUIPMENT PORTAL — AIMPACT TECHNOLOGY</p>
          </div>
        </div>
        <div className="home-meta">
          <div className="home-meta-badge">
            <span className="dot" />
            {activeCount} Active Assets
          </div>
          <div className="home-meta-badge" style={{ borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}>
            <span style={{ fontSize: '13px' }}>📡</span>
            <span style={{ color: '#60a5fa' }}>EPIC Pipeline — Robstown, TX</span>
          </div>
        </div>
      </div>

      <div className="home-section-title">Equipment Assets</div>

      <div className="equipment-list">
        {EQUIPMENT.map(eq => (
          <EquipmentCard key={eq.id} eq={eq} onOpen={onOpen} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{ padding: '28px 20px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.6 }}>
          PMIntelligence — Phase 0 Demo<br />
          <span style={{ color: 'var(--border-3)' }}>EPIC Pipeline Field Test Data — Inflection Tools Pilot</span>
        </div>
      </div>
    </div>
  )
}
