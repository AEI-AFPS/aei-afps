export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  features?: string[];
}

export const categories = [
  { id: 'fire-protection', name: 'Fire Protection Systems', icon: 'Flame' },
  { id: 'safety-monitoring', name: 'Safety & Monitoring', icon: 'Shield' },
  { id: 'proximity-detection', name: 'Proximity & Detection', icon: 'Radar' },
  { id: 'industrial-lighting', name: 'Industrial Lighting', icon: 'Lightbulb' },
];

export const products: Product[] = [
  {
    id: 'afps-1',
    title: 'Automatic Fire Protection Systems (AFPS)',
    description: 'Designed for heavy-duty machinery in high-risk environments. Our AFPS systems comply with DGMS guidelines and support early fire suppression to protect operators and equipment.',
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
    title: 'Turbocharger Guard Systems',
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
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
