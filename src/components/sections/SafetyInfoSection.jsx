function hazardBadgeClass(hazard) {
  const h = (hazard || '').toLowerCase()
  if (h.includes('flammable') || h.includes('danger')) return 'badge-danger'
  if (h.includes('caution') || h.includes('irritant')) return 'badge-caution'
  return 'badge-low'
}

export default function SafetyInfoSection({ equipment }) {
  const { safety } = equipment

  return (
    <div>
      {/* Area Hazards Banner */}
      <div className="section-pad" style={{ paddingTop: '16px' }}>
        {safety.areaHazards && (
          <div className="hazard-banner">
            <div className="hazard-banner-icon">⚠️</div>
            <div className="hazard-banner-text">
              <strong style={{ display: 'block', marginBottom: '3px', color: 'var(--red)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 800 }}>
                Area Hazards
              </strong>
              {safety.areaHazards}
            </div>
          </div>
        )}
      </div>

      {/* Required PPE */}
      <div className="section-pad">
        <div className="section-header" style={{ padding: '8px 0 12px' }}>
          <span className="section-title">Required PPE</span>
          <span className="section-count">{safety.ppe.length} items</span>
        </div>
        <div className="ppe-grid">
          {safety.ppe.map((item, i) => (
            <div key={i} className="ppe-item">
              <div className="ppe-check">✓</div>
              <div className="ppe-text">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: '1px', background: 'var(--border)', margin: '8px 16px' }} />

      {/* MSDS / Chemicals */}
      <div className="section-pad">
        <div className="section-header" style={{ padding: '16px 0 12px' }}>
          <span className="section-title">MSDS / Chemical Safety</span>
          <span className="section-count">{safety.msds.length}</span>
        </div>
        {safety.msds.map(doc => (
          <div key={doc.id} className="msds-card">
            <div style={{ flex: 1 }}>
              <div className="card-title" style={{ fontSize: '14px' }}>{doc.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '3px' }}>
                {doc.chemical}
              </div>
              {doc.description && (
                <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '4px' }}>
                  {doc.description}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
              <span className={`msds-hazard-badge ${hazardBadgeClass(doc.hazard)}`}>
                {doc.hazard}
              </span>
              <button className="doc-btn">View SDS</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom padding for nav */}
      <div style={{ height: '16px' }} />
    </div>
  )
}
