/**
 * PMIntelligence — Equipment Data
 * Real EPIC Pipeline field test data from Robstown / Ingleside Station, TX
 * Source: EPIC NFC Tag Field Test Process Map Presentation
 *
 * Future: replace with Supabase queries — same shape, different source
 */

export const EQUIPMENT = [
  // ─────────────────────────────────────────────────────────────────────────
  // P-4420  |  Cornell Pump + Worldwide 50HP Motor
  // 1 NFC Tag  |  2 PM Types (Motor Greasing + Pump Greasing)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'P-4420',
    title: 'P-4420',
    subtitle: 'Cornell Centrifugal Pump + Worldwide 50HP Motor',
    type: 'Centrifugal Pump / Motor Assembly',
    location: 'Ingleside Station — Robstown, TX',
    client: 'EPIC Pipeline',
    status: 'active',
    nfcTagCount: 1,
    nfcTags: [
      { id: 'NFC-P4420-PM', label: 'P-4420 PM Tag', pmTypes: ['motor-greasing', 'pump-greasing'] },
    ],
    lastPM: '2024-11-14',
    nextPM: '2025-02-14',
    pump: {
      manufacturer: 'Cornell Pump Company',
      model: 'B6B-L Centrifugal',
      type: 'End Suction Centrifugal',
      serialNo: 'CP-44201',
      lubricant: 'Mystik JT-6 High Temp #2 Grease',
    },
    motor: {
      manufacturer: 'Worldwide Electric',
      hp: 50,
      voltage: '460V / 3PH / 60Hz',
      rpm: 1780,
      frame: '326T',
      lubricant: 'Mobil Polyrex EM Grease',
    },

    pmTypes: [
      {
        id: 'motor-greasing',
        name: 'Motor Bearing Greasing PM',
        shortName: 'Motor Greasing',
        frequency: 'Quarterly',
        lastCompleted: '2024-11-14',
        nfcTag: 'NFC-P4420-PM',
        positions: null,
        procedureId: 'proc-motor-grease-4420',
      },
      {
        id: 'pump-greasing',
        name: 'Pump Bearing Greasing PM',
        shortName: 'Pump Greasing',
        frequency: 'Quarterly',
        lastCompleted: '2024-11-14',
        nfcTag: 'NFC-P4420-PM',
        positions: null,
        procedureId: 'proc-pump-grease-4420',
      },
    ],

    documents: {
      manuals: [
        {
          id: 'P4420-M1',
          title: 'Cornell Pump IOM Manual',
          category: 'OEM Manual',
          fileRef: 'P4420 Pump IOM Manual.pdf',
          pages: 145,
          description: 'Installation, operation, and maintenance manual for the Cornell B6B-L centrifugal pump.',
        },
        {
          id: 'P4420-M2',
          title: 'AC Induction Motor IOM Manual',
          category: 'OEM Manual',
          fileRef: 'P4420 ac-induction-motors-installation-operation-manual.pdf',
          pages: 88,
          description: 'Worldwide Electric AC induction motor installation, operation, and maintenance manual.',
        },
        {
          id: 'P4420-M3',
          title: 'Motor Data Sheet',
          category: 'Data Sheet',
          fileRef: 'Motor Data Sheet.pdf',
          pages: 4,
          description: 'Motor nameplate data, performance curves, and electrical specifications.',
        },
      ],
      drawings: [
        {
          id: 'P4420-D1',
          title: 'Pump Drawing',
          category: 'Mechanical Drawing',
          fileRef: 'Pump Drawing.pdf',
          pages: 2,
          description: 'Pump dimensional drawing with connection data.',
        },
        {
          id: 'P4420-D2',
          title: 'Motor Drawing',
          category: 'Mechanical Drawing',
          fileRef: 'Motor Drawing.pdf',
          pages: 1,
          description: 'Motor dimensional drawing and mounting details.',
        },
        {
          id: 'P4420-D3',
          title: 'Coupling Drawing',
          category: 'Mechanical Drawing',
          fileRef: 'Coupling Drawing.pdf',
          pages: 1,
          description: 'Coupling dimensional drawing and alignment data.',
        },
        {
          id: 'P4420-D4',
          title: 'Pump Parts Breakdown',
          category: 'Parts Catalog',
          fileRef: 'Pump Parts Breakdown.pdf',
          pages: 12,
          description: 'Exploded view parts list with part numbers for the Cornell B6B-L.',
        },
        {
          id: 'P4420-D5',
          title: 'Seal Drawing',
          category: 'Mechanical Drawing',
          fileRef: null,
          pages: null,
          description: 'Mechanical seal dimensional drawing.',
          note: 'Pending — seal drawing not yet uploaded',
        },
      ],
    },

    safety: {
      ppe: [
        'Safety-rated eyewear / goggles',
        'Chemical-resistant gloves',
        'Hard hat',
        'Steel-toed boots',
        'Hi-vis vest (near active equipment)',
        'Face shield when operating grease gun under pressure',
      ],
      areaHazards: 'Active crude oil pipeline area. Rotating equipment hazard when pump is running. Grease under pressure — do not point gun fittings toward personnel.',
      msds: [
        {
          id: 'P4420-S1',
          title: 'EPIC Crude Oil — Process Fluid MSDS',
          chemical: 'Crude Oil (Process Fluid)',
          hazard: 'Flammable / Skin Irritant',
          fileRef: 'EPIC Crude Oil MSDS.pdf',
          description: 'Material safety data sheet for EPIC Pipeline crude oil process fluid.',
        },
        {
          id: 'P4420-S2',
          title: 'Mobil Polyrex EM Grease MSDS',
          chemical: 'Motor Bearing Grease',
          hazard: 'Low Hazard',
          fileRef: 'Mobil Polyrex EM Grease - Motor Grease.pdf',
          description: 'SDS for Mobil Polyrex EM — polyurea grease for electric motor bearings.',
        },
        {
          id: 'P4420-S3',
          title: 'Mystik JT-6 High Temp Grease MSDS',
          chemical: 'Pump Bearing Grease',
          hazard: 'Low Hazard',
          fileRef: 'Mystik JT 6 High Temp #2 Grease - Pump Grease.pdf',
          description: 'SDS for Mystik JT-6 High Temp #2 — calcium sulfonate complex grease for pump bearings.',
        },
      ],
    },

    procedures: [
      {
        id: 'proc-motor-grease-4420',
        title: 'Motor Bearing Greasing Procedure',
        pmTypeId: 'motor-greasing',
        duration: '30–45 min',
        lubricant: 'Mobil Polyrex EM Grease',
        tools: ['Alemite 500 Manual Grease Gun', 'Milwaukee 18V Grease Gun (58-14-2643d3)'],
        refDocs: ['AC Induction Motor IOM Manual'],
        steps: [
          {
            step: 1,
            title: 'Obtain Work Permit & Confirm Status',
            detail: 'Confirm equipment status with operations. Worldwide Electric motors can typically be greased while running — verify permit requirements for this facility.',
          },
          {
            step: 2,
            title: 'Gather Materials & PPE',
            detail: 'Mobil Polyrex EM Grease. Grease gun (Alemite 500 or Milwaukee 18V). Clean rags. PPE: safety glasses, chemical-resistant gloves, face shield.',
          },
          {
            step: 3,
            title: 'Locate Motor Grease Fittings',
            detail: 'Motor has two Zerk-type grease fittings: Drive End (DE) and Non-Drive End (NDE). Wipe each fitting clean with a rag before attaching the grease gun.',
          },
          {
            step: 4,
            title: 'Grease DE Bearing',
            detail: 'Attach grease gun to DE fitting. Apply 2–3 shots per OEM specification. Watch for old grease purging — this is normal. Wipe excess immediately.',
          },
          {
            step: 5,
            title: 'Grease NDE Bearing',
            detail: 'Move to Non-Drive End fitting. Apply 2–3 shots. Wipe excess. Note any unusual resistance or failure to accept grease — investigate before continuing.',
          },
          {
            step: 6,
            title: 'Inspect & Record',
            detail: 'Inspect fittings for damage. Note grease type, shots per fitting, any unusual resistance, and bearing housing condition. Submit PM form when complete.',
          },
        ],
      },
      {
        id: 'proc-pump-grease-4420',
        title: 'Pump Bearing Greasing Procedure',
        pmTypeId: 'pump-greasing',
        duration: '30–45 min',
        lubricant: 'Mystik JT-6 High Temp #2 Grease',
        tools: ['Alemite 500 Manual Grease Gun', 'Milwaukee 18V Grease Gun (58-14-2643d3)'],
        refDocs: ['Cornell Pump IOM Manual'],
        steps: [
          {
            step: 1,
            title: 'Obtain Work Permit & Lock Out',
            detail: 'Cornell pump bearings require equipment SHUTDOWN for greasing. Complete LOTO procedure before accessing pump bearing housings.',
          },
          {
            step: 2,
            title: 'Gather Materials & PPE',
            detail: 'Mystik JT-6 High Temp #2 Grease. Grease gun. Clean rags. PPE per safety requirements. Note: use DIFFERENT grease than motor — do not mix.',
          },
          {
            step: 3,
            title: 'Locate Pump Grease Fittings',
            detail: 'Cornell pump has Zerk fittings on both inboard and outboard bearing housings. Clean all fittings before attaching gun — contamination can damage bearings.',
          },
          {
            step: 4,
            title: 'Grease Inboard Bearing',
            detail: 'Apply 3–4 shots to inboard bearing housing. Monitor pressure — excessive resistance may indicate overfill or blocked fitting. Wipe all purged grease.',
          },
          {
            step: 5,
            title: 'Grease Outboard Bearing',
            detail: 'Repeat for outboard bearing. Same quantity. Remove gun and wipe clean. Check for any evidence of existing grease leakage from housing seals.',
          },
          {
            step: 6,
            title: 'Inspect & Record',
            detail: 'Inspect bearing housings and seals for leaks. Confirm LOTO removal per procedure. Record grease applied, condition, and any findings. Submit PM form.',
          },
        ],
      },
    ],

    parts: [],
    // "No spare parts loaded yet" — per EPIC field test presentation

    history: [
      {
        id: 'P4420-H3',
        date: '2024-11-01',
        type: 'system',
        title: 'NFC Tag Installed — Field Test',
        technician: 'Inflection Tools / EPIC Pipeline',
        summary: 'NFC tag (NFC-P4420-PM) installed on equipment enclosure. SmartView portal linked and tested. Field test at Robstown confirmed successful. Motor and pump greasing PMs accessible via single tag scan.',
      },
      {
        id: 'P4420-H1',
        date: '2024-11-14',
        type: 'PM Completed',
        pmType: 'Motor Bearing Greasing PM',
        title: 'Quarterly Bearing Greasing — Motor (DE + NDE)',
        technician: 'Field Tech — EPIC Team',
        summary: 'Motor DE and NDE bearings greased with Mobil Polyrex EM. 3 shots per fitting. Old grease purged clean at both fittings. No abnormalities noted. Bearing housings in good condition.',
      },
      {
        id: 'P4420-H2',
        date: '2024-11-14',
        type: 'PM Completed',
        pmType: 'Pump Bearing Greasing PM',
        title: 'Quarterly Bearing Greasing — Pump (Inboard + Outboard)',
        technician: 'Field Tech — EPIC Team',
        summary: 'Pump inboard and outboard bearings greased with Mystik JT-6 High Temp #2. Equipment shutdown and LOTO completed. No leaks from housing seals. All fittings accepted grease without issue.',
      },
      {
        id: 'P4420-H4',
        date: '2024-08-20',
        type: 'PM Completed',
        pmType: 'Pump Bearing Greasing PM',
        title: 'Quarterly Bearing Greasing — Motor + Pump',
        technician: 'Field Tech — EPIC Team',
        summary: 'Routine quarterly greasing completed. Slight hardening noted on pump inboard fitting — cleaned and successfully greased. Recommended monitoring at next PM.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // P-5020  |  Sulzer ML Pump + Toshiba 4000HP Motor
  // 3 NFC Tags  |  6 PM Forms (DE/ODE for each of 3 PM types)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'P-5020',
    title: 'P-5020',
    subtitle: 'Sulzer ML Pipeline Pump + Toshiba 4000HP Motor',
    type: 'Axially Split Multistage Pump / High-HP Motor Assembly',
    location: 'Ingleside Station — Robstown, TX',
    client: 'EPIC Pipeline',
    status: 'active',
    nfcTagCount: 3,
    nfcTags: [
      { id: 'NFC-P5020-MOTOR-OIL', label: 'Motor Bearing Oil Sample', pmTypes: ['motor-oil-sample'] },
      { id: 'NFC-P5020-PUMP-OIL', label: 'Pump Bearing Oil Sample', pmTypes: ['pump-oil-sample'] },
      { id: 'NFC-P5020-API65', label: 'API Plan 65 Flushing', pmTypes: ['api-plan-65'] },
    ],
    lastPM: '2024-10-22',
    nextPM: '2025-01-22',
    pump: {
      manufacturer: 'Sulzer Pumps Ltd.',
      model: 'ML Type — Axially Split Multistage',
      type: 'Axially Split Multistage Centrifugal',
      serialNo: 'SLZ-50201',
      lubricant: 'Royal Purple Synfilm 46 (Pump Bearing Oil)',
    },
    motor: {
      manufacturer: 'Toshiba International',
      hp: 4000,
      voltage: '4160V / 3PH / 60Hz',
      rpm: 3570,
      frame: 'Custom Large Frame',
      lubricant: 'Royal Purple Synfilm 32 (Motor Bearing Oil)',
    },

    pmTypes: [
      {
        id: 'motor-oil-sample',
        name: 'Motor Bearing Oil Sampling PM',
        shortName: 'Motor Oil Sample',
        frequency: 'Quarterly',
        lastCompleted: '2024-10-22',
        nfcTag: 'NFC-P5020-MOTOR-OIL',
        positions: ['DE — Drive End', 'ODE — Opposite Drive End'],
        procedureId: 'proc-motor-oil-5020',
        note: 'PM forms auto-populate DE and ODE for motor location',
      },
      {
        id: 'pump-oil-sample',
        name: 'Pump Bearing Oil Sampling PM',
        shortName: 'Pump Oil Sample',
        frequency: 'Quarterly',
        lastCompleted: '2024-10-22',
        nfcTag: 'NFC-P5020-PUMP-OIL',
        positions: ['DE — Drive End', 'ODE — Opposite Drive End'],
        procedureId: 'proc-pump-oil-5020',
        note: 'PM forms auto-populate DE and ODE for pump bearing location',
      },
      {
        id: 'api-plan-65',
        name: 'API Plan 65 Flushing PM',
        shortName: 'API Plan 65',
        frequency: 'Quarterly',
        lastCompleted: '2024-10-22',
        nfcTag: 'NFC-P5020-API65',
        positions: ['DE Side', 'ODE Side'],
        procedureId: 'proc-api65-5020',
        note: 'PM forms auto-populate DE and ODE seal flush positions',
      },
    ],

    documents: {
      manuals: [
        {
          id: 'P5020-M1',
          title: 'Sulzer ML Pump IOM Manual',
          category: 'OEM Manual',
          fileRef: 'Ingleside ML Pump IOM Manual.pdf',
          pages: 210,
          description: 'Full installation, operation, and maintenance manual for the Sulzer ML axially split multistage pump.',
        },
        {
          id: 'P5020-M2',
          title: 'Motor IOM Manual',
          category: 'OEM Manual',
          fileRef: 'Ingleside ML Motor IOM Manual.PDF',
          pages: 94,
          description: 'Toshiba motor installation, operation, and maintenance manual for the 4000HP Ingleside unit.',
        },
        {
          id: 'P5020-M3',
          title: 'Motor Sleeve Bearing IOM',
          category: 'OEM Manual',
          fileRef: 'Ingleside ML Motor Sleeve Bearing IOM.PDF',
          pages: 32,
          description: 'Specialized IOM for the sleeve bearing configuration on the Toshiba 4000HP motor.',
        },
      ],
      drawings: [
        {
          id: 'P5020-D1',
          title: 'General Arrangement (GA) Drawings',
          category: 'GA Drawing',
          fileRef: 'Ingleside ML GA Drawings.pdf',
          pages: 6,
          description: 'Full general arrangement drawings for the P-5020 pump and motor assembly.',
        },
        {
          id: 'P5020-D2',
          title: 'Coupling Drawings',
          category: 'Mechanical Drawing',
          fileRef: 'Ingleside ML Coupling Drawings.pdf',
          pages: 3,
          description: 'Flexible coupling dimensional drawings and alignment specifications.',
        },
        {
          id: 'P5020-D3',
          title: 'Pump Cross Section Drawing',
          category: 'Cross Section',
          fileRef: 'Ingleside ML Pump Cross Sectional Drawing.pdf',
          pages: 2,
          description: 'Cross-sectional view of the Sulzer ML pump internals.',
        },
        {
          id: 'P5020-D4',
          title: 'Mechanical Seal Drawing (EagleBurgmann)',
          category: 'Seal Drawing',
          fileRef: '(EagleBurgmann) Robstown & Crane ML Pump Seal Drawing.pdf',
          pages: 2,
          description: 'EagleBurgmann mechanical seal dimensional and assembly drawing for Robstown and Crane ML pump.',
        },
      ],
    },

    safety: {
      ppe: [
        'Safety-rated eyewear / face shield',
        'Chemical-resistant gloves',
        'Hard hat',
        'Steel-toed boots',
        'Hi-vis vest',
        'Hearing protection required — 4000HP motor zone',
        'Chemical splash shield for oil sampling',
      ],
      areaHazards: '4160V equipment — high voltage hazard. Rotating equipment. Sleeve bearings contain hot oil. Crude oil process fluid.',
      msds: [
        {
          id: 'P5020-S1',
          title: 'EPIC Crude Oil — Process Fluid MSDS',
          chemical: 'Crude Oil (Process Fluid)',
          hazard: 'Flammable / Skin Irritant',
          fileRef: 'EPIC Crude Oil MSDS.pdf',
          description: 'Material safety data sheet for EPIC Pipeline crude oil process fluid.',
        },
        {
          id: 'P5020-S2',
          title: 'Royal Purple Synfilm 32 (Motor Oil) SDS',
          chemical: 'Motor Bearing Oil — ISO VG 32',
          hazard: 'Low Hazard',
          fileRef: 'Royal Purple Synfilm 32 SDS - Motor Oil.pdf',
          description: 'SDS for Royal Purple Synfilm 32 — premium synthetic oil for motor sleeve bearings.',
        },
        {
          id: 'P5020-S3',
          title: 'Royal Purple Synfilm 46 (Pump Oil) SDS',
          chemical: 'Pump Bearing Oil — ISO VG 46',
          hazard: 'Low Hazard',
          fileRef: 'Royal Purple Synfilm 46 SDS - Pump Oil.pdf',
          description: 'SDS for Royal Purple Synfilm 46 — premium synthetic oil for pump bearings.',
        },
      ],
    },

    procedures: [
      {
        id: 'proc-motor-oil-5020',
        title: 'Motor Bearing Oil Sampling Procedure',
        pmTypeId: 'motor-oil-sample',
        duration: '45–60 min',
        lubricant: 'Royal Purple Synfilm 32',
        tools: ['Vacuum oil sampler', 'Labeled sample bottles (DE + ODE)', 'Temperature gun'],
        refDocs: ['Motor IOM Manual', 'Motor Sleeve Bearing IOM'],
        steps: [
          {
            step: 1,
            title: 'Obtain Work Permit',
            detail: 'Complete hot work or confined space entry permit as required for 4160V equipment area. Confirm equipment is in a safe-to-sample condition with operations.',
          },
          {
            step: 2,
            title: 'Gather Sampling Equipment',
            detail: 'Vacuum pump oil sampler. Sample bottles (2 total — pre-labeled DE and ODE). Royal Purple Synfilm 32 for top-off if needed. Clean rags. PPE.',
          },
          {
            step: 3,
            title: 'Label Sample Bottles',
            detail: 'Label each bottle: Equipment ID = P-5020, Component = Motor Bearing, Location = DE or ODE, Date, Technician Name, Sample Number.',
          },
          {
            step: 4,
            title: 'Sample Motor DE Bearing',
            detail: 'Insert sampling tube into DE bearing oil port. Draw sample until bottle is 3/4 full — do not disturb sediment. Seal bottle immediately. Record oil level.',
          },
          {
            step: 5,
            title: 'Sample Motor ODE Bearing',
            detail: 'Repeat for Opposite Drive End. Verify label reads ODE. Seal and store alongside DE sample. Check ODE oil level — top off with Synfilm 32 to proper level if needed.',
          },
          {
            step: 6,
            title: 'Submit Samples & PM Form',
            detail: 'Ship samples to oil analysis lab within 48 hours. Record: oil levels before and after, visual color and clarity, sample IDs. Submit PM form for DE and ODE.',
          },
        ],
      },
      {
        id: 'proc-pump-oil-5020',
        title: 'Pump Bearing Oil Sampling Procedure',
        pmTypeId: 'pump-oil-sample',
        duration: '45–60 min',
        lubricant: 'Royal Purple Synfilm 46',
        tools: ['Vacuum oil sampler', 'Labeled sample bottles (Pump DE + Pump ODE)'],
        refDocs: ['Sulzer ML Pump IOM Manual'],
        steps: [
          {
            step: 1,
            title: 'Obtain Work Permit',
            detail: 'Same permit requirements as motor oil sampling. Confirm with operations before accessing pump bearing housings.',
          },
          {
            step: 2,
            title: 'Gather Sampling Equipment',
            detail: 'Vacuum oil sampler. Sample bottles (2 — pre-labeled Pump DE and Pump ODE). Royal Purple Synfilm 46 for top-off. Clean rags.',
          },
          {
            step: 3,
            title: 'Label Sample Bottles',
            detail: 'Label each bottle: Equipment ID = P-5020, Component = Pump Bearing, Location = DE or ODE, Date, Technician Name.',
          },
          {
            step: 4,
            title: 'Sample Pump DE Bearing',
            detail: 'Insert sampling tube into pump DE bearing oil sight glass port. Draw sample carefully — do not disturb sediment. Seal immediately.',
          },
          {
            step: 5,
            title: 'Sample Pump ODE Bearing',
            detail: 'Repeat for pump ODE bearing. Verify oil level is adequate — top off with Synfilm 46 if below minimum sight glass mark. Do not overfill.',
          },
          {
            step: 6,
            title: 'Record & Submit',
            detail: 'Record oil levels and visual condition for both bearings. Note any water contamination, discoloration, or metallic sheen. Submit PM form.',
          },
        ],
      },
      {
        id: 'proc-api65-5020',
        title: 'API Plan 65 Seal Flush Inspection Procedure',
        pmTypeId: 'api-plan-65',
        duration: '60–90 min',
        tools: ['Pressure gauge', 'Flow meter', 'Flashlight'],
        refDocs: ['Sulzer ML Pump IOM Manual'],
        steps: [
          {
            step: 1,
            title: 'Review API Plan 65 Configuration',
            detail: 'Confirm seal flush system is configured per the P&ID. API Plan 65 uses a flush from the high-pressure side of the seal to the low-pressure side via an orifice.',
          },
          {
            step: 2,
            title: 'Check Flush Supply Pressure — DE',
            detail: 'Record current flush supply pressure at Drive End seal. Flush pressure MUST exceed stuffing box pressure per API 682 requirements. Document actual reading.',
          },
          {
            step: 3,
            title: 'Check Flush Supply Pressure — ODE',
            detail: 'Repeat pressure check at Opposite Drive End seal. Document ODE flush pressure. Flag any readings outside of specification immediately.',
          },
          {
            step: 4,
            title: 'Inspect Flush Piping & Components',
            detail: 'Visually inspect all flush piping at DE and ODE. Check valves, flow indicators, and all threaded connections for weeping, leaks, or damage.',
          },
          {
            step: 5,
            title: 'Verify Flow Rate',
            detail: 'Confirm flush flow rate is within specification for both sides. Low flow indicates possible orifice blockage or flow issue — investigate before signing off.',
          },
          {
            step: 6,
            title: 'Inspect Seal Gland Area & Record',
            detail: 'Inspect seal gland and faces at DE and ODE for product leakage, unusual wear, or temperature anomalies. Document all readings and submit PM form for both sides.',
          },
        ],
      },
    ],

    parts: [],

    history: [
      {
        id: 'P5020-H4',
        date: '2024-11-01',
        type: 'system',
        title: '3x NFC Tags Installed — Field Test',
        technician: 'Inflection Tools / EPIC Pipeline',
        summary: 'Three NFC tags installed at Robstown facility: (1) Motor Oil Sampling tag, (2) Pump Oil Sampling tag, (3) API Plan 65 tag. Each tag links directly to its specific PM workflow. SmartView portal tested and confirmed operational at all three tag locations.',
      },
      {
        id: 'P5020-H1',
        date: '2024-10-22',
        type: 'PM Completed',
        pmType: 'Motor Bearing Oil Sampling PM',
        title: 'Quarterly Motor Bearing Oil Sampling — DE + ODE',
        technician: 'Field Tech — EPIC Team',
        summary: 'Motor bearing oil samples taken from DE and ODE. Synfilm 32 oil levels within normal range at both locations. No water contamination or discoloration observed. Samples submitted to lab.',
      },
      {
        id: 'P5020-H2',
        date: '2024-10-22',
        type: 'PM Completed',
        pmType: 'Pump Bearing Oil Sampling PM',
        title: 'Quarterly Pump Bearing Oil Sampling — DE + ODE',
        technician: 'Field Tech — EPIC Team',
        summary: 'Pump bearing oil samples taken. ODE oil level slightly below minimum — topped off with Royal Purple Synfilm 46 (approx. 0.5 qt). No water contamination. Samples sent to lab.',
      },
      {
        id: 'P5020-H3',
        date: '2024-10-22',
        type: 'PM Completed',
        pmType: 'API Plan 65 Flushing PM',
        title: 'API Plan 65 Flush System Inspection — DE + ODE',
        technician: 'Field Tech — EPIC Team',
        summary: 'Flush system inspected at both DE and ODE. All piping and connections secure. Pressure within spec at both locations. Minor seep noted at ODE gland face — marked for monitoring at next PM.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // P-4170  |  PumpWorks Ingleside Booster + Nidec Titan 800HP Motor
  // 3 NFC Tags  |  3 PM Types (Motor Greasing, Motor Oil Sample, API Plan 65)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'P-4170',
    title: 'P-4170',
    subtitle: 'PumpWorks Ingleside Booster + Nidec Titan 800HP Motor',
    type: 'Booster Pump / High-HP Motor Assembly',
    location: 'Ingleside Station — Robstown, TX',
    client: 'EPIC Pipeline',
    status: 'active',
    nfcTagCount: 3,
    nfcTags: [
      { id: 'NFC-P4170-GREASE', label: 'Motor Bearing Greasing', pmTypes: ['motor-greasing'] },
      { id: 'NFC-P4170-OIL', label: 'Motor Bearing Oil Sample', pmTypes: ['motor-oil-sample'] },
      { id: 'NFC-P4170-API65', label: 'API Plan 65 Flushing', pmTypes: ['api-plan-65'] },
    ],
    lastPM: '2024-09-15',
    nextPM: '2024-12-15',
    pump: {
      manufacturer: 'PumpWorks (Pumpworks Inc.)',
      model: 'Ingleside Booster — Single Stage',
      type: 'Single Stage Centrifugal',
      serialNo: 'PW-41701',
      lubricant: 'Royal Purple Synfilm GT 150 (Motor NDE Bearing)',
    },
    motor: {
      manufacturer: 'Nidec Motor Corporation',
      model: 'Titan VSS-HT',
      hp: 800,
      voltage: '4160V / 3PH / 60Hz',
      rpm: 1785,
      frame: 'Custom Large Frame',
      lubricant: 'Mobil Polyrex EM (DE Grease) + Royal Purple Synfilm GT 150 (NDE Oil)',
    },

    pmTypes: [
      {
        id: 'motor-greasing',
        name: 'Motor Bearing Greasing PM',
        shortName: 'Motor Greasing',
        frequency: 'Quarterly',
        lastCompleted: '2024-09-15',
        nfcTag: 'NFC-P4170-GREASE',
        positions: null,
        procedureId: 'proc-motor-grease-4170',
      },
      {
        id: 'motor-oil-sample',
        name: 'Motor Bearing Oil Sampling PM',
        shortName: 'Motor Oil Sample',
        frequency: 'Quarterly',
        lastCompleted: '2024-09-15',
        nfcTag: 'NFC-P4170-OIL',
        positions: ['NDE — Non-Drive End Bearing (oil lubricated)'],
        procedureId: 'proc-motor-oil-4170',
        note: 'Only the NDE bearing is oil-lubricated. DE bearing is grease-lubricated.',
      },
      {
        id: 'api-plan-65',
        name: 'API Plan 65 Flushing PM',
        shortName: 'API Plan 65',
        frequency: 'Quarterly',
        lastCompleted: '2024-09-15',
        nfcTag: 'NFC-P4170-API65',
        positions: null,
        procedureId: 'proc-api65-4170',
      },
    ],

    documents: {
      manuals: [
        {
          id: 'P4170-M1',
          title: 'Ingleside Booster Pump IOM Manual',
          category: 'OEM Manual',
          fileRef: 'Ingleside Booster - Pumpworks IOM Manual.pdf',
          pages: 186,
          description: 'Full installation, operation, and maintenance manual for the PumpWorks Ingleside Booster pump.',
        },
        {
          id: 'P4170-M2',
          title: 'Motor Data Pack — Ingleside Booster Motors',
          category: 'Data Sheet',
          fileRef: 'Motor Data Pack Ingleside Booster Motors.pdf',
          pages: 28,
          description: 'Complete motor data pack including nameplate data, performance specifications, and drawings.',
        },
        {
          id: 'P4170-M3',
          title: 'Motor Bearing Recommended Oil Viscosities',
          category: 'Technical Reference',
          fileRef: 'P-4170 Motor Bearing Recommended Oil Viscosities.pdf',
          pages: 3,
          description: 'Nidec Titan VSS-HT recommended oil viscosities for motor bearing lubrication.',
        },
        {
          id: 'P4170-M4',
          title: 'Motor Bearing Recommended Grease Requirements',
          category: 'Technical Reference',
          fileRef: 'P-4170 Motor Bearing Recommended Grease Requirements.pdf',
          pages: 3,
          description: 'Nidec Titan VSS-HT grease type and quantity specifications for DE bearing.',
        },
      ],
      drawings: [
        {
          id: 'P4170-D1',
          title: 'Ingleside Booster Pump GA Drawing',
          category: 'GA Drawing',
          fileRef: 'Ingleside Booster Pump GA Drawing.pdf',
          pages: 4,
          description: 'General arrangement drawings for the P-4170 pump and motor assembly.',
        },
        {
          id: 'P4170-D2',
          title: 'Mechanical Seal Drawing (John Crane)',
          category: 'Seal Drawing',
          fileRef: 'John Crane Robstown Ingleside Booster Pump Drawing.pdf',
          pages: 2,
          description: 'John Crane single coil spring mechanical seal drawing for the Robstown Ingleside Booster pump.',
        },
      ],
    },

    safety: {
      ppe: [
        'Safety-rated eyewear / face shield',
        'Chemical-resistant gloves',
        'Hard hat',
        'Steel-toed boots',
        'Hi-vis vest',
        'Hearing protection required — 800HP / 4160V motor zone',
        'Chemical splash shield for oil sampling',
      ],
      areaHazards: '4160V equipment — high voltage hazard. Rotating equipment. NDE bearing contains hot oil. Crude oil process fluid.',
      msds: [
        {
          id: 'P4170-S1',
          title: 'EPIC Crude Oil — Process Fluid MSDS',
          chemical: 'Crude Oil (Process Fluid)',
          hazard: 'Flammable / Skin Irritant',
          fileRef: 'EPIC Crude Oil MSDS.pdf',
          description: 'Material safety data sheet for EPIC Pipeline crude oil process fluid.',
        },
        {
          id: 'P4170-S2',
          title: 'Mobil Polyrex EM Grease MSDS',
          chemical: 'Motor DE Bearing Grease',
          hazard: 'Low Hazard',
          fileRef: 'Mobil Polyrex EM Grease - Motor Grease.pdf',
          description: 'SDS for Mobil Polyrex EM — polyurea grease for Nidec Titan DE motor bearing.',
        },
        {
          id: 'P4170-S3',
          title: 'Royal Purple Synfilm GT 150 SDS',
          chemical: 'Motor NDE Bearing Oil — ISO VG 150',
          hazard: 'Low Hazard',
          fileRef: 'Royal Purple Synfilm GT 150 SDS - Motor Oil.pdf',
          description: 'SDS for Royal Purple Synfilm GT 150 — premium synthetic oil for Nidec Titan NDE sleeve bearing.',
        },
      ],
    },

    procedures: [
      {
        id: 'proc-motor-grease-4170',
        title: 'Nidec Titan Motor Bearings Greasing Procedure',
        pmTypeId: 'motor-greasing',
        duration: '45–60 min',
        lubricant: 'Mobil Polyrex EM Grease (DE Bearing)',
        tools: ['Alemite 500 Manual Grease Gun', 'Milwaukee 18V Grease Gun', 'Temperature gun'],
        refDocs: ['Motor Data Pack', 'Motor Bearing Recommended Grease Requirements'],
        steps: [
          {
            step: 1,
            title: 'Verify Operating Status & Permit',
            detail: 'The Nidec Titan VSS-HT motor can typically be greased while running — this is per OEM design. Confirm permit requirements and motor status with operations.',
          },
          {
            step: 2,
            title: 'Review Grease Specification',
            detail: 'Reference "Motor Bearing Recommended Grease Requirements" document for exact grease type and quantity for this specific Nidec Titan. Do NOT guess — over-greasing this motor is a known failure mode.',
          },
          {
            step: 3,
            title: 'Locate DE Grease Fitting',
            detail: 'Nidec Titan has a grease fitting at the Drive End (DE) only. NDE is oil-lubricated (see oil sampling PM). Locate the DE Zerk fitting and clean it thoroughly before attaching gun.',
          },
          {
            step: 4,
            title: 'Remove Relief Plug (if equipped)',
            detail: 'Check if relief plug is installed opposite the grease inlet. Remove relief plug BEFORE greasing to prevent pressure buildup and bearing damage from over-greasing.',
          },
          {
            step: 5,
            title: 'Apply Grease Per OEM Spec',
            detail: 'Apply the OEM-specified quantity of Mobil Polyrex EM to the DE fitting. Apply slowly. Watch for grease purging from relief port. Replace relief plug when done.',
          },
          {
            step: 6,
            title: 'Monitor Temperature & Record',
            detail: 'Check DE bearing housing temperature with temp gun. Slight temp rise then drop is normal. Sustained rise requires investigation. Record grease applied, temps, and observations. Submit PM form.',
          },
        ],
      },
      {
        id: 'proc-motor-oil-4170',
        title: 'Motor NDE Bearing Oil Sampling Procedure',
        pmTypeId: 'motor-oil-sample',
        duration: '30–45 min',
        lubricant: 'Royal Purple Synfilm GT 150',
        tools: ['Vacuum oil sampler', 'Labeled sample bottle (Motor NDE)', 'Temperature gun'],
        refDocs: ['Motor Data Pack', 'Motor Bearing Recommended Oil Viscosities'],
        steps: [
          {
            step: 1,
            title: 'Obtain Work Permit',
            detail: 'Complete required work permit for 4160V equipment area. The NDE bearing is oil-lubricated — a different PM from DE bearing greasing. Confirm unit status with operations.',
          },
          {
            step: 2,
            title: 'Gather Sampling Equipment',
            detail: 'Vacuum oil sampler. One labeled sample bottle (Motor NDE). Royal Purple Synfilm GT 150 for potential top-off. Clean rags. PPE including face shield.',
          },
          {
            step: 3,
            title: 'Locate NDE Oil Port',
            detail: 'The NDE motor bearing housing has a dedicated oil sampling/fill port. Locate port on the non-drive end of the motor. Clean area around port before opening.',
          },
          {
            step: 4,
            title: 'Draw Oil Sample',
            detail: 'Insert sampling tube and draw until bottle is 3/4 full. Draw slowly to avoid disturbing settled contaminants. Seal bottle immediately. Record oil level.',
          },
          {
            step: 5,
            title: 'Top Off Oil If Needed',
            detail: 'Check oil level against sight glass or dipstick. If below minimum, add Royal Purple Synfilm GT 150 to proper level. Do not overfill. Record amount added.',
          },
          {
            step: 6,
            title: 'Submit Sample & PM Form',
            detail: 'Ship sample to oil analysis lab within 48 hours. Record: oil level before and after, visual condition, sample ID. Submit PM form.',
          },
        ],
      },
      {
        id: 'proc-api65-4170',
        title: 'API Plan 65 Seal Flush Inspection Procedure',
        pmTypeId: 'api-plan-65',
        duration: '60–90 min',
        tools: ['Pressure gauge', 'Flow meter', 'Flashlight'],
        refDocs: ['Ingleside Booster Pump IOM Manual'],
        steps: [
          {
            step: 1,
            title: 'Review Flush System Configuration',
            detail: 'Confirm API Plan 65 flush configuration for P-4170. Review P&ID and IOM manual to verify barrier fluid type and expected operating parameters.',
          },
          {
            step: 2,
            title: 'Check Flush Supply Pressure',
            detail: 'Record current flush supply pressure at the pump seal. Verify it meets API 682 minimum — must exceed stuffing box pressure. Document actual vs. spec.',
          },
          {
            step: 3,
            title: 'Inspect Flush Piping & Connections',
            detail: 'Walk the entire flush circuit from supply to seal and back. Inspect tubing, fittings, orifices, and check valves. Look for weeping or mineral deposits indicating historical leakage.',
          },
          {
            step: 4,
            title: 'Verify Flow Indicator',
            detail: 'Confirm flow indicator shows active flush flow. Reduced or zero flow is a critical finding — tag for immediate follow-up if flow is inadequate.',
          },
          {
            step: 5,
            title: 'Inspect Seal Gland Area',
            detail: 'Inspect seal gland and face area for product leakage, unusual deposits, or elevated temperature. John Crane single coil spring seal — note any seal face contact evidence.',
          },
          {
            step: 6,
            title: 'Record & Submit',
            detail: 'Document all pressure and flow readings, visual observations, and any corrective actions. Submit PM form with findings and recommended follow-up.',
          },
        ],
      },
    ],

    parts: [],

    history: [
      {
        id: 'P4170-H4',
        date: '2024-11-01',
        type: 'system',
        title: '3x NFC Tags Installed — Field Test',
        technician: 'Inflection Tools / EPIC Pipeline',
        summary: 'Three NFC tags installed at Robstown facility: (1) Motor Bearing Greasing tag, (2) Motor NDE Oil Sampling tag, (3) API Plan 65 tag. SmartView portal linked and tested. Each tag opens directly to its specific PM workflow.',
      },
      {
        id: 'P4170-H1',
        date: '2024-09-15',
        type: 'PM Completed',
        pmType: 'Motor Bearing Greasing PM',
        title: 'Quarterly Motor Bearing Greasing — Nidec Titan DE',
        technician: 'Field Tech — EPIC Team',
        summary: 'Nidec Titan VSS-HT motor DE bearing greased per OEM specification with Mobil Polyrex EM. Relief plug removed prior to greasing, replaced after. Bearing temperature normal post-greasing.',
      },
      {
        id: 'P4170-H2',
        date: '2024-09-15',
        type: 'PM Completed',
        pmType: 'Motor Bearing Oil Sampling PM',
        title: 'Motor NDE Bearing Oil Sampling',
        technician: 'Field Tech — EPIC Team',
        summary: 'NDE oil sample drawn. Oil level slightly low — topped off with approximately 0.25 qt Royal Purple Synfilm GT 150. No contamination observed. Sample submitted to lab for analysis.',
      },
    ],
  },
]

/**
 * Look up a single equipment record by ID
 * Future: replace with Supabase query
 */
export function getEquipment(id) {
  return EQUIPMENT.find(e => e.id === id) || null
}

/**
 * Look up a procedure by ID within an equipment record
 */
export function getProcedure(equipment, procedureId) {
  return equipment.procedures.find(p => p.id === procedureId) || null
}
