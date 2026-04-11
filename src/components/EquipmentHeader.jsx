export default function EquipmentHeader({ equipment, onBack }) {
  return (
    <div className="eq-header">
      <div className="eq-header-nav">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L5 8l5 5" />
          </svg>
          All Equipment
        </button>
        <div style={{ flex: 1 }} />
        <span className="eq-header-client">{equipment.client}</span>
      </div>

      <div className="eq-header-body">
        <div className="eq-header-title-row">
          <div className="eq-header-id">{equipment.title}</div>
        </div>
        <div className="eq-header-subtitle">{equipment.subtitle}</div>
        <div className="eq-header-chips">
          <span className="chip chip-status">
            <span className="dot" />
            Active
          </span>
          <span className="chip chip-info">
            📡 {equipment.nfcTagCount} NFC Tag{equipment.nfcTagCount !== 1 ? 's' : ''}
          </span>
          <span className="chip chip-info">
            📍 {equipment.location.split('—')[1]?.trim() || equipment.location}
          </span>
        </div>
      </div>
    </div>
  )
}
