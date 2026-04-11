const TABS = [
  { id: 'info',      label: 'Info',       icon: '📋' },
  { id: 'safety',    label: 'Safety',     icon: '🛡️' },
  { id: 'procedure', label: 'Procedure',  icon: '📖' },
  { id: 'submit',    label: 'Submit PM',  icon: '✅' },
  { id: 'parts',     label: 'Parts',      icon: '🔩' },
  { id: 'history',   label: 'History',    icon: '🕐' },
]

export default function EquipmentNav({ activeTab, onTabChange }) {
  return (
    <nav className="eq-nav" role="tablist">
      {TABS.map(tab => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="nav-tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
