/**
 * AIPlaceholderPanel
 * Scaffolded UI for future MechanicIQ / LLM document lookup integration.
 * Future Phase 4: connect to Claude API + pgvector semantic search over uploaded OEM docs.
 */
export default function AIPanel({ context }) {
  return (
    <div className="ai-panel" style={{ marginTop: '8px' }}>
      <div className="ai-panel-header">
        <div className="ai-panel-icon">🤖</div>
        <div>
          <div className="ai-panel-title">Ask AI About This Equipment</div>
          <div className="ai-panel-sub">MechanicIQ — AI Maintenance Knowledge Engine</div>
        </div>
      </div>

      <button className="ai-panel-prompt" disabled>
        <span>Ask about lubrication, tolerances, troubleshooting...</span>
        <span className="ai-coming-soon">Phase 4</span>
      </button>

      <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '10px', lineHeight: 1.6 }}>
        Future: Semantic search across uploaded OEM manuals + Claude LLM. Ask "What grease does the NDE bearing take?" and get an answer pulled directly from the manufacturer docs.
      </div>
    </div>
  )
}
