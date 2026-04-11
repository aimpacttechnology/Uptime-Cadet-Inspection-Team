import { useState } from 'react'
import { getEquipment } from '../data/equipment.js'
import EquipmentHeader from './EquipmentHeader.jsx'
import EquipmentNav from './EquipmentNav.jsx'
import EquipmentInfoSection from './sections/EquipmentInfoSection.jsx'
import SafetyInfoSection from './sections/SafetyInfoSection.jsx'
import TrainingProcedureSection from './sections/TrainingProcedureSection.jsx'
import SubmitReportSection from './sections/SubmitReportSection.jsx'
import SparePartsSection from './sections/SparePartsSection.jsx'
import HistoryDataSection from './sections/HistoryDataSection.jsx'

export default function EquipmentPortalPage({ equipmentId, initialTab, onBack }) {
  const equipment = getEquipment(equipmentId)
  const [activeTab, setActiveTab] = useState(initialTab || 'info')

  if (!equipment) {
    return (
      <div className="app-screen" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <div style={{ color: 'var(--text-2)', marginBottom: '20px' }}>Equipment not found: {equipmentId}</div>
        <button className="submit-btn" style={{ maxWidth: '200px', margin: '0 auto' }} onClick={onBack}>
          Go Back
        </button>
      </div>
    )
  }

  function renderSection() {
    switch (activeTab) {
      case 'info':      return <EquipmentInfoSection equipment={equipment} />
      case 'safety':    return <SafetyInfoSection equipment={equipment} />
      case 'procedure': return <TrainingProcedureSection equipment={equipment} />
      case 'submit':    return <SubmitReportSection equipment={equipment} />
      case 'parts':     return <SparePartsSection equipment={equipment} />
      case 'history':   return <HistoryDataSection equipment={equipment} />
      default:          return null
    }
  }

  return (
    <div className="portal-page app-screen fade-in">
      <EquipmentHeader equipment={equipment} onBack={onBack} />

      <div className="section-scroll">
        {renderSection()}
      </div>

      <EquipmentNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
