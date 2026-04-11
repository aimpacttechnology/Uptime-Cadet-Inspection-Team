import { useState, useRef } from 'react'

const CONDITION_OPTIONS = [
  { id: 'good',    label: '✅ Good',    cls: 'cond-good' },
  { id: 'fair',    label: '⚠️ Fair',    cls: 'cond-fair' },
  { id: 'poor',    label: '❌ Poor',    cls: 'cond-poor' },
  { id: 'unknown', label: '? Unknown', cls: 'cond-unknown' },
]

function buildStorageKey(equipmentId, pmTypeId) {
  return `pm_submissions_${equipmentId}_${pmTypeId}`
}

function saveSubmission(equipmentId, pmTypeId, data) {
  const key = buildStorageKey(equipmentId, pmTypeId)
  const existing = JSON.parse(localStorage.getItem(key) || '[]')
  existing.unshift({ ...data, submittedAt: new Date().toISOString(), id: Date.now() })
  localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)))
}

export default function PMForm({ equipment, pmType, onBack }) {
  const procedure = equipment.procedures.find(p => p.pmTypeId === pmType.id)

  const today = new Date().toISOString().slice(0, 10)

  const [date, setDate]           = useState(today)
  const [tech, setTech]           = useState('')
  const [position, setPosition]   = useState(pmType.positions ? pmType.positions[0] : '')
  const [condition, setCondition] = useState('')
  const [lubricant, setLubricant] = useState(procedure?.lubricant || '')
  const [amount, setAmount]       = useState('')
  const [notes, setNotes]         = useState('')
  const [photos, setPhotos]       = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const fileRef = useRef()

  function handlePhotos(e) {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = ev => {
        setPhotos(prev => [...prev, { url: ev.target.result, name: file.name }])
      }
      reader.readAsDataURL(file)
    })
    e.target.value = ''
  }

  function removePhoto(i) {
    setPhotos(prev => prev.filter((_, idx) => idx !== i))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!tech.trim()) { alert('Please enter your name.'); return }
    if (!condition)   { alert('Please select a condition.'); return }

    setSubmitting(true)
    setTimeout(() => {
      const data = {
        equipmentId: equipment.id,
        pmTypeId: pmType.id,
        pmTypeName: pmType.name,
        date,
        technician: tech,
        position: position || null,
        condition,
        lubricant,
        amount,
        notes,
        photoCount: photos.length,
      }
      saveSubmission(equipment.id, pmType.id, data)
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="fade-in" style={{ padding: '16px' }}>
        <div className="submit-success">
          <div className="submit-success-icon">✅</div>
          <div className="submit-success-title">PM Submitted</div>
          <div className="submit-success-msg">
            <strong>{pmType.name}</strong><br />
            {equipment.id} · {new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br />
            Recorded by: {tech}<br />
            {position && <>Position: {position}<br /></>}
            Condition: {condition}
            {photos.length > 0 && <><br />{photos.length} photo{photos.length !== 1 ? 's' : ''} attached</>}
          </div>
          <button className="submit-another-btn" onClick={() => {
            setSubmitted(false)
            setCondition('')
            setNotes('')
            setAmount('')
            setPhotos([])
            setDate(today)
          }}>
            Submit Another PM
          </button>
        </div>

        <button className="submit-another-btn" style={{ width: '100%', marginTop: '8px' }} onClick={onBack}>
          ← Back to PM List
        </button>
      </div>
    )
  }

  return (
    <div className="pm-form-wrap fade-in">
      <div className="pm-form-header">
        <button className="pm-form-back" onClick={onBack}>←</button>
        <div>
          <div className="pm-form-title">{pmType.name}</div>
          <div className="pm-form-eq-id">{equipment.id} · {equipment.subtitle}</div>
        </div>
      </div>

      <form className="pm-form-body" onSubmit={handleSubmit}>
        {/* Date and Tech */}
        <div className="field-grid-2">
          <div className="field-group">
            <label className="field-label">Date</label>
            <input
              type="date"
              className="field-input"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label className="field-label">Technician</label>
            <input
              type="text"
              className="field-input"
              placeholder="Your name"
              value={tech}
              onChange={e => setTech(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Position (DE/ODE) — only for multi-position PMs */}
        {pmType.positions && pmType.positions.length > 1 && (
          <div className="field-group">
            <label className="field-label">Bearing Location</label>
            <select
              className="field-input"
              value={position}
              onChange={e => setPosition(e.target.value)}
            >
              {pmType.positions.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        )}

        {/* Auto-populated single position */}
        {pmType.positions && pmType.positions.length === 1 && (
          <div className="field-group">
            <label className="field-label">Bearing Location</label>
            <div className="field-input" style={{ color: 'var(--text)', cursor: 'default', background: 'var(--surface-3)' }}>
              {pmType.positions[0]}
            </div>
          </div>
        )}

        {/* Condition */}
        <div className="field-group">
          <label className="field-label">Condition Found</label>
          <div className="condition-grid">
            {CONDITION_OPTIONS.map(opt => (
              <button
                key={opt.id}
                type="button"
                className={`condition-btn ${opt.cls}${condition === opt.id ? ' active' : ''}`}
                onClick={() => setCondition(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lubricant */}
        <div className="field-group">
          <label className="field-label">Lubricant / Material Used</label>
          <input
            type="text"
            className="field-input"
            placeholder="e.g. Mobil Polyrex EM"
            value={lubricant}
            onChange={e => setLubricant(e.target.value)}
          />
        </div>

        {/* Amount */}
        <div className="field-group">
          <label className="field-label">
            {pmType.id.includes('oil') || pmType.id.includes('sample') ? 'Sample / Oil Level Notes' : 'Amount Applied'}
          </label>
          <input
            type="text"
            className="field-input"
            placeholder={pmType.id.includes('sample') ? 'e.g. Oil level normal, 3/4 bottle sample drawn' : 'e.g. 3 shots per fitting'}
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        {/* Notes */}
        <div className="field-group">
          <label className="field-label">Findings / Notes</label>
          <textarea
            className="field-input"
            placeholder="Describe what you observed, any abnormalities, actions taken..."
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>

        {/* Photos */}
        <div className="field-group">
          <label className="field-label">Photos ({photos.length})</label>
          <div
            className="photo-upload-zone"
            onClick={() => fileRef.current?.click()}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              style={{ display: 'none' }}
              onChange={handlePhotos}
            />
            <div className="photo-upload-icon">📷</div>
            <div className="photo-upload-main">Tap to add photos</div>
            <div className="photo-upload-sub">JPG · PNG · HEIC — Camera or library</div>
          </div>
          {photos.length > 0 && (
            <div className="photo-grid">
              {photos.map((p, i) => (
                <div key={i} className="photo-thumb">
                  <img src={p.url} alt={p.name} />
                  <button
                    type="button"
                    className="photo-thumb-remove"
                    onClick={() => removePhoto(i)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="submit-btn"
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : `Submit ${pmType.shortName || 'PM'} Report`}
        </button>

        <p style={{ fontSize: '11px', color: 'var(--text-3)', textAlign: 'center', marginTop: '10px', lineHeight: 1.5 }}>
          Data saved locally — Future: syncs to Supabase database
        </p>
      </form>
    </div>
  )
}
