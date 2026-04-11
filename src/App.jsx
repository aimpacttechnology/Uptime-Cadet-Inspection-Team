import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import EquipmentPortalPage from './components/EquipmentPortalPage.jsx'

export default function App() {
  // selectedId is null (home) or an equipment ID string like 'P-4420'
  const [selectedId, setSelectedId] = useState(null)
  // openTab is the tab to open when navigating directly to a PM (e.g., from NFC scan)
  const [openTab, setOpenTab] = useState(null)

  function handleOpenEquipment(id, tab = null) {
    setSelectedId(id)
    setOpenTab(tab)
    window.scrollTo(0, 0)
  }

  function handleBack() {
    setSelectedId(null)
    setOpenTab(null)
  }

  if (selectedId) {
    return (
      <EquipmentPortalPage
        equipmentId={selectedId}
        initialTab={openTab}
        onBack={handleBack}
      />
    )
  }

  return <HomePage onOpen={handleOpenEquipment} />
}
