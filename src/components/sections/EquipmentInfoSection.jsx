import { useState } from 'react'
import AIPanel from '../shared/AIPanel.jsx'

const DOC_ICONS = {
  'OEM Manual':         { icon: '📗', cls: 'doc-icon-pdf' },
  'Data Sheet':         { icon: '📄', cls: 'doc-icon-spec' },
  'Technical Reference':{ icon: '📘', cls: 'doc-icon-spec' },
  'Mechanical Drawing': { icon: '📐', cls: 'doc-icon-draw' },
  'GA Drawing':         { icon: '📐', cls: 'doc-icon-draw' },
  'Parts Catalog':      { icon: '🔩', cls: 'doc-icon-draw' },
  'Cross Section':      { icon: '🔍', cls: 'doc-icon-draw' },
  'Seal Drawing':       { icon: '📐', cls: 'doc-icon-draw' },
}

function getDocIcon(category) {
  return DOC_ICONS[category] || { icon: '📄', cls: 'doc-icon-pdf' }
}

function DocumentCard({ doc }) {
  const { icon, cls } = getDocIcon(doc.category)
  const available = Boolean(doc.fileRef)

  return (
    <div className="doc-card">
      <div className={`doc-icon ${cls}`}>{icon}</div>
      <div className="doc-info">
        <div className="doc-title">{doc.title}</div>
        <div className="doc-cat">{doc.category}{doc.pages ? ` · ${doc.pages} pages` : ''}</div>
        {doc.note && <div className="doc-note">⚠ {doc.note}</div>}
        {doc.description && !doc.note && (
          <div className="doc-cat" style={{ marginTop: '3px', whiteSpace: 'normal' }}>{doc.description}</div>
        )}
      </div>
      {available ? (
        <button className="doc-btn" title={`View ${doc.title}`}>
          View
        </button>
      ) : (
        <button className="doc-btn doc-btn-disabled" disabled>
          Pending
        </button>
      )}
    </div>
  )
}

function EquipmentSpec({ equipment }) {
  return (
    <div>
      <div style={{ padding: '14px 0' }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
          marginBottom: '10px',
        }}>
          Pump
        </div>
        <div className="info-row">
          <span className="info-row-label">Manufacturer</span>
          <span className="info-row-value">{equipment.pump.manufacturer}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Model</span>
          <span className="info-row-value">{equipment.pump.model}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Type</span>
          <span className="info-row-value">{equipment.pump.type}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Serial No.</span>
          <span className="info-row-value" style={{ fontFamily: 'monospace' }}>{equipment.pump.serialNo}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Lubricant</span>
          <span className="info-row-value">{equipment.pump.lubricant}</span>
        </div>
      </div>

      <div className="divider" />

      <div style={{ paddingBottom: '14px' }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
          marginBottom: '10px',
        }}>
          Motor
        </div>
        <div className="info-row">
          <span className="info-row-label">Manufacturer</span>
          <span className="info-row-value">{equipment.motor.manufacturer}</span>
        </div>
        {equipment.motor.model && (
          <div className="info-row">
            <span className="info-row-label">Model</span>
            <span className="info-row-value">{equipment.motor.model}</span>
          </div>
        )}
        <div className="info-row">
          <span className="info-row-label">Horsepower</span>
          <span className="info-row-value">{equipment.motor.hp} HP</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Voltage / Phase</span>
          <span className="info-row-value">{equipment.motor.voltage}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Speed</span>
          <span className="info-row-value">{equipment.motor.rpm} RPM</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">Lubricant</span>
          <span className="info-row-value">{equipment.motor.lubricant}</span>
        </div>
      </div>
    </div>
  )
}

function NfcTagsInfo({ equipment }) {
  return (
    <div className="nfc-tags-section">
      <div style={{ padding: '14px 0 10px' }}>
        <div className="section-title" style={{ padding: 0 }}>NFC Tags</div>
        <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '4px' }}>
          {equipment.nfcTagCount} tag{equipment.nfcTagCount !== 1 ? 's' : ''} installed on this equipment
        </div>
      </div>
      {equipment.nfcTags.map(tag => (
        <div key={tag.id} className="nfc-tag-row">
          <div className="nfc-tag-icon">📡</div>
          <div>
            <div className="nfc-tag-label">{tag.label}</div>
            <div className="nfc-tag-id">{tag.id}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '2px' }}>
              Links to: {tag.pmTypes.join(', ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SUB_TABS = [
  { id: 'manuals',   label: 'OEM Manuals' },
  { id: 'drawings',  label: 'Drawings' },
  { id: 'specs',     label: 'Specs' },
  { id: 'nfc',       label: 'NFC Tags' },
]

export default function EquipmentInfoSection({ equipment }) {
  const [subTab, setSubTab] = useState('manuals')

  function renderContent() {
    switch (subTab) {
      case 'manuals':
        return (
          <div className="section-pad fade-in">
            <div className="section-header">
              <span className="section-title">OEM Manuals &amp; Data Sheets</span>
              <span className="section-count">{equipment.documents.manuals.length}</span>
            </div>
            {equipment.documents.manuals.map(doc => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
            <AIPanel context={`manuals for ${equipment.id}`} />
          </div>
        )

      case 'drawings':
        return (
          <div className="section-pad fade-in">
            <div className="section-header">
              <span className="section-title">Equipment Drawings</span>
              <span className="section-count">{equipment.documents.drawings.length}</span>
            </div>
            {equipment.documents.drawings.map(doc => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        )

      case 'specs':
        return (
          <div className="section-pad fade-in">
            <div className="section-header">
              <span className="section-title">Equipment Specifications</span>
            </div>
            <div className="card">
              <div className="card-body">
                <EquipmentSpec equipment={equipment} />
              </div>
            </div>
          </div>
        )

      case 'nfc':
        return (
          <div className="fade-in">
            <div className="section-pad">
              <div className="section-header">
                <span className="section-title">NFC Tag Configuration</span>
              </div>
            </div>
            <NfcTagsInfo equipment={equipment} />
            {/* Future: NFC scan simulation / Web NFC API integration point */}
            <div className="section-pad">
              <div style={{
                background: 'var(--surface-2)',
                border: '1px dashed var(--border-2)',
                borderRadius: 'var(--r-lg)',
                padding: '20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>📱</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-2)', marginBottom: '6px' }}>
                  Web NFC Scan
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-3)', lineHeight: 1.5 }}>
                  On Android Chrome, tap the scan button to read a physical NFC tag and jump directly to its PM workflow.
                </div>
                <button
                  style={{
                    marginTop: '14px',
                    background: 'var(--surface-3)',
                    border: '1px solid var(--border-2)',
                    borderRadius: 'var(--r-md)',
                    color: 'var(--text-3)',
                    fontSize: '13px',
                    fontWeight: 700,
                    padding: '10px 18px',
                    cursor: 'not-allowed',
                  }}
                  disabled
                >
                  🔍 Scan Tag — Coming Soon
                </button>
              </div>
            </div>
          </div>
        )
      default: return null
    }
  }

  return (
    <div>
      <div className="subtab-row">
        {SUB_TABS.map(t => (
          <button
            key={t.id}
            className={`subtab-btn${subTab === t.id ? ' active' : ''}`}
            onClick={() => setSubTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  )
}
