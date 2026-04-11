import { useState } from 'react'

const PM_ICONS = {
  'motor-greasing':   '🟡',
  'pump-greasing':    '🔵',
  'motor-oil-sample': '🟠',
  'pump-oil-sample':  '🟣',
  'api-plan-65':      '🔴',
}

function getProcIcon(pmTypeId) {
  return PM_ICONS[pmTypeId] || '🔧'
}

function ProcedureCard({ procedure, pmType }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`proc-card${expanded ? ' expanded' : ''}`}>
      <div className="proc-card-header" onClick={() => setExpanded(e => !e)}>
        <div className="proc-card-icon">
          {getProcIcon(procedure.pmTypeId)}
        </div>
        <div className="proc-card-info">
          <div className="proc-card-title">{procedure.title}</div>
          <div className="proc-card-meta">
            {procedure.duration && (
              <span className="proc-meta-pill">⏱ {procedure.duration}</span>
            )}
            {procedure.steps && (
              <span className="proc-meta-pill">{procedure.steps.length} steps</span>
            )}
            {pmType && (
              <span className="proc-meta-pill">{pmType.frequency}</span>
            )}
          </div>
        </div>
        <span className="proc-chevron">›</span>
      </div>

      {expanded && (
        <div className="proc-card-body fade-in">
          {/* Lubricant / material callout */}
          {procedure.lubricant && (
            <div className="proc-lube-banner">
              <span style={{ fontSize: '20px' }}>🛢️</span>
              <div className="proc-lube-banner-text">
                <strong>Required Lubricant</strong>
                {procedure.lubricant}
              </div>
            </div>
          )}

          {/* Tools */}
          {procedure.tools && procedure.tools.length > 0 && (
            <div className="proc-tools">
              <div className="proc-tools-label">Tools Required</div>
              <div className="proc-tools-list">
                {procedure.tools.map((tool, i) => (
                  <div key={i} className="proc-tool-item">
                    <span>🔧</span> {tool}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Steps */}
          {procedure.steps && procedure.steps.length > 0 && (
            <div className="proc-steps">
              <div className="proc-steps-label">Procedure Steps</div>
              {procedure.steps.map(step => (
                <div key={step.step} className="proc-step">
                  <div className="proc-step-num">{step.step}</div>
                  <div className="proc-step-content">
                    <div className="proc-step-title">{step.title}</div>
                    <div className="proc-step-detail">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reference Docs */}
          {procedure.refDocs && procedure.refDocs.length > 0 && (
            <div className="proc-ref-docs">
              <div className="proc-ref-docs-label">Reference Documents</div>
              {procedure.refDocs.map((doc, i) => (
                <div key={i} className="proc-ref-doc">
                  <span>📄</span> {doc}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function TrainingProcedureSection({ equipment }) {
  return (
    <div>
      <div className="section-pad">
        <div className="section-header">
          <span className="section-title">PM Procedures</span>
          <span className="section-count">{equipment.procedures.length}</span>
        </div>

        {equipment.pmTypes.length > 1 && (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '12px 14px',
            marginBottom: '14px',
            fontSize: '13px',
            color: 'var(--text-2)',
            lineHeight: 1.5,
          }}>
            <span style={{ color: 'var(--text)', fontWeight: 700 }}>{equipment.id}</span> has{' '}
            <span style={{ color: 'var(--orange)', fontWeight: 700 }}>{equipment.nfcTagCount} NFC tag{equipment.nfcTagCount !== 1 ? 's' : ''}</span>.
            Each tag links to a specific PM workflow.
          </div>
        )}

        {equipment.procedures.map(proc => {
          const pmType = equipment.pmTypes.find(p => p.id === proc.pmTypeId)
          return (
            <ProcedureCard key={proc.id} procedure={proc} pmType={pmType} />
          )
        })}
      </div>

      {/* Tool Manuals — only for equipment that uses grease guns */}
      {equipment.pmTypes.some(p => p.id === 'motor-greasing' || p.id === 'pump-greasing') && (
        <div className="section-pad" style={{ paddingTop: '4px' }}>
          <div className="section-header" style={{ paddingTop: '8px' }}>
            <span className="section-title">Tool Manuals</span>
          </div>
          {[
            { id: 'tg1', title: 'Alemite 500 Manual Grease Gun', category: 'Tool Manual', fileRef: 'Alemite 500 Grease Gun IOM.pdf', pages: 12 },
            { id: 'tg2', title: 'Milwaukee 18V Grease Gun (58-14-2643d3)', category: 'Tool Manual', fileRef: 'Milwaukee 18V Grease Gun 58-14-2643d3.pdf', pages: 20 },
          ].map(doc => (
            <div key={doc.id} className="doc-card">
              <div className="doc-icon doc-icon-draw" style={{ fontSize: '18px' }}>🔧</div>
              <div className="doc-info">
                <div className="doc-title">{doc.title}</div>
                <div className="doc-cat">{doc.category} · {doc.pages} pages</div>
              </div>
              <button className="doc-btn">View</button>
            </div>
          ))}
        </div>
      )}

      <div style={{ height: '16px' }} />
    </div>
  )
}
