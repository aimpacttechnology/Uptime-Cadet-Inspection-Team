// Demo spare parts for any equipment that needs them in the future.
// Per the EPIC field test presentation, no parts are loaded yet for any of the three assets.
// This component handles both the empty state and a populated parts list.

const DEMO_PARTS_LIBRARY = {
  // Future: load from Supabase equipment_parts table
}

export default function SparePartsSection({ equipment }) {
  const parts = equipment.parts || []

  if (parts.length === 0) {
    return (
      <div>
        <div className="section-pad">
          <div className="section-header">
            <span className="section-title">Spare Parts</span>
          </div>
        </div>

        <div className="empty-state">
          <div className="empty-state-icon">🔩</div>
          <div className="empty-state-title">No parts loaded yet</div>
          <div className="empty-state-msg">
            Spare parts for <strong>{equipment.id}</strong> have not been loaded into the system.
            An admin can add parts from the equipment management portal.
          </div>
        </div>

        {/* Placeholder card for what parts would look like */}
        <div className="section-pad">
          <div className="section-header" style={{ paddingTop: '8px' }}>
            <span className="section-title" style={{ color: 'var(--text-3)' }}>Example — Parts Format</span>
          </div>

          {[
            { name: 'Bearing Kit', partNo: 'BRG-44XX', desc: 'Motor + pump bearing set', stock: 'in' },
            { name: 'Mechanical Seal', partNo: 'SEAL-001', desc: 'Single coil spring seal', stock: 'low' },
            { name: 'Coupling Insert', partNo: 'CPL-INS-4', desc: 'Flexible coupling element', stock: 'in' },
            { name: 'Grease Fitting Kit', partNo: 'GF-ZERK-8', desc: 'Zerk fittings, 8 pack', stock: 'in' },
          ].map((p, i) => (
            <div key={i} className="parts-row" style={{ opacity: 0.45 }}>
              <div>
                <div className="parts-name">{p.name}</div>
                <div className="parts-num">{p.partNo} · {p.desc}</div>
              </div>
              <span className={`stock-badge stock-${p.stock}`}>
                {p.stock === 'in' ? 'In Stock' : p.stock === 'low' ? 'Low Stock' : 'Out of Stock'}
              </span>
            </div>
          ))}

          <div style={{
            marginTop: '16px',
            padding: '12px 14px',
            background: 'var(--surface-2)',
            border: '1px dashed var(--border-2)',
            borderRadius: 'var(--r-md)',
            fontSize: '12px',
            color: 'var(--text-3)',
            textAlign: 'center',
          }}>
            Parts catalog will populate once loaded by admin · Future: Supabase parts table
          </div>
        </div>

        <div style={{ height: '16px' }} />
      </div>
    )
  }

  // Populated parts list
  return (
    <div>
      <div className="section-pad">
        <div className="section-header">
          <span className="section-title">Spare Parts</span>
          <span className="section-count">{parts.length} items</span>
        </div>
        {parts.map((p, i) => (
          <div key={i} className="parts-row">
            <div>
              <div className="parts-name">{p.name}</div>
              <div className="parts-num">{p.partNo} · {p.description}</div>
            </div>
            <span className={`stock-badge stock-${p.stockStatus || 'in'}`}>
              {p.stockStatus === 'in' ? 'In Stock' : p.stockStatus === 'low' ? 'Low Stock' : 'Out of Stock'}
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: '16px' }} />
    </div>
  )
}
