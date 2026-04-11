import { useState } from 'react'
import PMForm from '../shared/PMForm.jsx'

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

function PMTypeCard({ pmType, onSelect }) {
  return (
    <div className="pm-type-card" onClick={() => onSelect(pmType)}>
      <div className="pm-type-icon">
        {pmType.id === 'motor-greasing'   && '🟡'}
        {pmType.id === 'pump-greasing'    && '🔵'}
        {pmType.id === 'motor-oil-sample' && '🟠'}
        {pmType.id === 'pump-oil-sample'  && '🟣'}
        {pmType.id === 'api-plan-65'      && '🔴'}
        {!['motor-greasing','pump-greasing','motor-oil-sample','pump-oil-sample','api-plan-65'].includes(pmType.id) && '⚙️'}
      </div>
      <div className="pm-type-info">
        <div className="pm-type-name">{pmType.name}</div>
        <div className="pm-type-freq">
          {pmType.frequency}
          {pmType.positions && (
            <span style={{ marginLeft: '6px', color: 'var(--blue)', fontSize: '11px' }}>
              · {pmType.positions.length} positions
            </span>
          )}
        </div>
        <div className="pm-type-last">Last: {formatDate(pmType.lastCompleted)}</div>
      </div>
      <span className="pm-type-arrow">›</span>
    </div>
  )
}

export default function SubmitReportSection({ equipment }) {
  const [selectedPMType, setSelectedPMType] = useState(null)

  if (selectedPMType) {
    return (
      <div className="section-pad" style={{ paddingTop: '16px' }}>
        <PMForm
          equipment={equipment}
          pmType={selectedPMType}
          onBack={() => setSelectedPMType(null)}
        />
      </div>
    )
  }

  return (
    <div>
      <div className="section-pad">
        <div className="section-header">
          <span className="section-title">Submit PM Report</span>
          <span className="section-count">{equipment.pmTypes.length} types</span>
        </div>

        {/* NFC context note */}
        {equipment.nfcTagCount > 0 && (
          <div style={{
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 'var(--r-md)',
            padding: '11px 14px',
            marginBottom: '16px',
            fontSize: '13px',
            color: 'var(--text-2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ fontSize: '18px' }}>📡</span>
            <span>
              {equipment.id} has <strong style={{ color: 'var(--text)' }}>{equipment.nfcTagCount} NFC tag{equipment.nfcTagCount !== 1 ? 's' : ''}</strong> — select a PM type below or scan the tag to jump directly here.
            </span>
          </div>
        )}

        {/* PM type selector */}
        <div className="pm-type-list">
          {equipment.pmTypes.map(pmType => (
            <PMTypeCard key={pmType.id} pmType={pmType} onSelect={setSelectedPMType} />
          ))}
        </div>

        {/* Separator */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '8px 0 20px' }} />

        {/* Full inspection form link */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-lg)',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          opacity: 0.6,
        }}>
          <div style={{
            width: '44px', height: '44px',
            background: 'var(--surface-3)',
            borderRadius: 'var(--r-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px', flexShrink: 0,
          }}>
            🔧
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-2)' }}>
              Full Equipment Inspection Report
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '3px' }}>
              Teardown · Inspection · Repair · Testing — Phase 1 Feature
            </div>
          </div>
          <span style={{
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px',
            background: 'var(--surface-3)',
            border: '1px solid var(--border-2)',
            borderRadius: '100px',
            padding: '3px 8px',
            color: 'var(--text-3)',
            whiteSpace: 'nowrap',
          }}>
            Coming Phase 1
          </span>
        </div>
      </div>

      <div style={{ height: '16px' }} />
    </div>
  )
}
