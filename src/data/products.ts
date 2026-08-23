export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  features?: string[];
}

export const categories = [
  { id: 'fire-protection',     name: 'Fire Detection & Suppression', icon: 'Flame' },
  { id: 'safety-monitoring',   name: 'Safety & Monitoring',          icon: 'Shield' },
  { id: 'proximity-detection', name: 'Proximity & Detection',        icon: 'Radar' },
  { id: 'industrial-lighting', name: 'Industrial Lighting',          icon: 'Lightbulb' },
  { id: 'advancements',        name: 'Advancements',                 icon: 'Sparkles' },
];

export const products: Product[] = [
  {
    id: 'afps-1',
    title: 'Automatic Fire Protection Systems (AFPS)',
    description: 'Designed for heavy-duty machinery in high-risk environments. Our AFPS systems comply with DGMS guidelines and support early fire detection & suppression to protect operators and equipment.',
    category: 'fire-protection',
    imageUrl: '/placeholder.svg',
    features: [
      'DGMS Approved',
      'Automatic fire detection & suppression',
      'Suitable for all HEMM types',
      'Quick response time',
      'Minimal maintenance required',
    ],
  },
  {
    id: 'afps-commercial',
    title: 'AFPS for Commercial Vehicles',
    description: 'Compact and reliable automatic fire detection & suppression systems designed for commercial vehicles including buses, trucks, and tankers.',
    category: 'fire-protection',
    imageUrl: '/placeholder.svg',
    features: [
      'DGMS & AIS certified',
      'Compact design for CV applications',
      'Dry powder & gaseous agents available',
      'Automatic and manual activation',
    ],
  },
  {
    id: 'rear-camera-1',
    title: 'Rear View Camera Systems',
    description: 'High-definition camera systems designed to reduce blind spots and enhance operator visibility during reversing and maneuvering operations.',
    category: 'safety-monitoring',
    imageUrl: '/placeholder.svg',
    features: [
      'HD resolution display',
      'Night vision capability',
      'Weatherproof housing',
      'Wide-angle lens',
    ],
  },
  {
    id: 'fatigue-1',
    title: 'Driver Fatigue Monitoring Systems',
    description: 'Advanced AI-powered systems that monitor operator alertness and provide real-time alerts when signs of fatigue or drowsiness are detected.',
    category: 'safety-monitoring',
    imageUrl: '/placeholder.svg',
    features: [
      'Real-time fatigue detection',
      'Audio-visual alerts',
      'Data logging capability',
      'Easy installation',
    ],
  },
  {
    id: 'alarm-1',
    title: 'Audio-Visual Alarm Systems',
    description: 'Comprehensive alarm systems providing both audible and visual alerts during machinery movement to ensure workplace safety.',
    category: 'safety-monitoring',
    imageUrl: '/placeholder.svg',
    features: [
      'High-decibel siren',
      'LED strobe lights',
      'Automatic activation',
      'Rugged construction',
    ],
  },
  {
    id: 'turbo-guard-1',
    title: 'Turbocharger Guard',
    description: 'Protective shields for high-temperature turbocharger components, significantly reducing fire risk in heavy machinery.',
    category: 'safety-monitoring',
    imageUrl: '/placeholder.svg',
    features: [
      'Heat-resistant materials',
      'Custom fit designs',
      'Easy installation',
      'Durable construction',
    ],
  },
  {
    id: 'seatbelt-1',
    title: 'Seat Belt Reminder Systems',
    description: 'Electronic reminder systems that ensure operator compliance with seat belt usage for enhanced safety.',
    category: 'safety-monitoring',
    imageUrl: '/placeholder.svg',
    features: [
      'Audio-visual reminders',
      'Ignition interlock option',
      'Easy retrofit',
      'Reliable sensors',
    ],
  },
  {
    id: 'radar-1',
    title: 'Radar Proximity Sensors',
    description: 'Advanced radar-based detection systems that identify objects and personnel around heavy machinery, preventing collisions.',
    category: 'proximity-detection',
    imageUrl: '/placeholder.svg',
    features: [
      '360° detection coverage',
      'All-weather operation',
      'Adjustable sensitivity',
      'Integration ready',
    ],
  },
  {
    id: 'integrated-1',
    title: 'Rear View Camera with Integrated Proximity',
    description: 'Combined camera and proximity sensor system for comprehensive rear monitoring and collision avoidance.',
    category: 'proximity-detection',
    imageUrl: '/placeholder.svg',
    features: [
      'Dual functionality',
      'Unified display',
      'Space-efficient design',
      'Cost-effective solution',
    ],
  },
  {
    id: 'led-lights-1',
    title: 'LED Work Lights',
    description: 'Heavy-duty LED illumination systems designed for night operations in mining and construction environments.',
    category: 'industrial-lighting',
    imageUrl: '/placeholder.svg',
    features: [
      'High lumen output',
      'Shock & vibration resistant',
      'Low power consumption',
      'Long lifespan',
    ],
  },
  // ── Advancements ──────────────────────────────────────────────────────────
  {
    id: 'iot-afps-1',
    title: 'IoT-Connected AFPS with Cloud Monitoring',
    description: 'Next-generation AFPS integrated with IoT sensors and a cloud dashboard for real-time remote monitoring of system health, activation events, and service schedules across your entire fleet.',
    category: 'advancements',
    imageUrl: '/placeholder.svg',
    features: [
      'Real-time remote monitoring via mobile app',
      'Instant alert notifications (SMS & email)',
      'Fleet-wide dashboard view',
      'Predictive maintenance alerts',
      'Data export for compliance reporting',
    ],
  },
  {
    id: 'ai-thermal-1',
    title: 'AI-Powered Thermal Fire Detection',
    description: 'An advanced thermal imaging camera system with AI anomaly detection that identifies hot spots and potential fire risks before ignition, enabling proactive intervention.',
    category: 'advancements',
    imageUrl: '/placeholder.svg',
    features: [
      'Detects heat anomalies before ignition',
      'AI-powered false-alarm suppression',
      'Integrates with existing AFPS',
      'Low latency edge processing',
      'DGMS evaluation in progress',
    ],
  },
  {
    id: 'quick-connect-1',
    title: 'Quick-Connect Modular AFPS',
    description: 'A modular plug-and-play fire protection system designed for rapid field installation and swap-out, dramatically reducing machine downtime during maintenance.',
    category: 'advancements',
    imageUrl: '/placeholder.svg',
    features: [
      'Tool-free module replacement',
      'Installation in under 2 hours',
      'Compatible with all existing AEI AFPS',
      'Reduces maintenance downtime by 70%',
      'Field-serviceable design',
    ],
  },
];

export const getProductsByCategory = (categoryId: string): Product[] =>
  products.filter((product) => product.category === categoryId);

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);
