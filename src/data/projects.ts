export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  date: string;
  machineryType: string;
  units: number;
  description: string;
  challenge: string;
  solution: string;
  advantages: string[];
  tags: string[];
  coverImage?: string;
  photos?: string[];
}

export const projects: Project[] = [
  {
    id: 'singareni-coal-2023',
    title: 'AFPS Deployment for Singareni Collieries Fleet',
    client: 'Singareni Collieries Company Ltd. (SCCL)',
    location: 'Ramagundam, Telangana',
    date: 'March 2023',
    machineryType: 'Hydraulic Excavators & Dumpers',
    units: 42,
    description:
      'AEI successfully deployed DGMS-approved Automatic Fire Protection Systems across 42 units of heavy earth-moving machinery at one of India\'s largest coal mining operations. The project was completed within tight timelines without disrupting ongoing mining operations.',
    challenge:
      'The client had experienced multiple fire incidents in hydraulic excavators due to high-pressure hose failures near hot engine components. Downtime was causing significant production losses and compliance issues with DGMS regulations.',
    solution:
      'Our engineering team conducted a site-specific risk assessment and designed a custom AFPS layout for each machine type. The systems were installed during scheduled maintenance windows to avoid production stoppages. Dry powder and gaseous suppression agents were selected based on the specific fire risk profiles of each machine.',
    advantages: [
      'Zero fire incidents in the 12 months post-installation',
      'Full DGMS compliance achieved across the entire fleet',
      'Reduced insurance premiums by an estimated 18%',
      'Operator confidence and safety ratings improved significantly',
      '24/7 remote monitoring integration with site safety command center',
    ],
    tags: ['Coal Mining', 'HEMM', 'DGMS Approved', 'Excavators', 'Dumpers'],
  },
  {
    id: 'nmdc-iron-ore-2022',
    title: 'Fire Suppression Retrofit — NMDC Iron Ore Mine',
    client: 'National Mineral Development Corporation (NMDC)',
    location: 'Bacheli, Chhattisgarh',
    date: 'August 2022',
    machineryType: 'Wheel Loaders & Motor Graders',
    units: 28,
    description:
      'Retrofitted 28 wheel loaders and motor graders at the NMDC Bacheli iron ore complex with AEI\'s next-generation AFPS, replacing an aging third-party system that had repeated false-activation issues and poor coverage on turbocharger zones.',
    challenge:
      'Legacy fire suppression systems were triggering false alarms and failing to cover the turbocharger and electrical bay areas adequately. This led to costly maintenance stoppages and low operator trust in the safety systems.',
    solution:
      'AEI replaced the outdated systems with our Turbocharger Guard module in combination with the AFPS, providing comprehensive coverage. The systems were integrated with the OEM-supplied vehicle health management system.',
    advantages: [
      'False-alarm incidents reduced to zero within 6 months',
      'Turbocharger zone coverage increased by 100%',
      'OEM VHM integration enabled predictive maintenance alerts',
      'Extended machinery warranty maintained by meeting manufacturer fire safety specs',
    ],
    tags: ['Iron Ore', 'Retrofit', 'Turbocharger Guard', 'Wheel Loaders'],
  },
  {
    id: 'tata-projects-construction-2023',
    title: 'Construction Fleet Safety — Highway Project',
    client: 'Tata Projects Ltd.',
    location: 'Nagpur–Mumbai Expressway Corridor',
    date: 'November 2023',
    machineryType: 'Compactors, Pavers & Cranes',
    units: 19,
    description:
      'Supplied and installed Automatic Fire Protection Systems, Audio-Visual Alarm Systems, and Rear-View Camera Systems across 19 pieces of construction equipment deployed on a major highway construction project in Maharashtra.',
    challenge:
      'Tight construction timelines, diverse machine types, and remote site locations made installation logistics complex. Dust and vibration levels were extreme, requiring robust, sealed system components.',
    solution:
      'AEI deployed a rapid installation team on-site for 10 days. All components were pre-configured in our Hyderabad facility before being shipped to site. IP-rated housings were selected for all sensors and actuators to handle the extreme environment.',
    advantages: [
      'All 19 units operational within 10-day installation window',
      'Zero fire incidents throughout the project duration',
      'Rear-view cameras reduced reversing near-misses by an estimated 65%',
      'Client received safety compliance certification from project authority',
    ],
    tags: ['Construction', 'Highways', 'Compactors', 'Cranes', 'Camera Systems'],
  },
  {
    id: 'vedanta-opencast-2024',
    title: 'Large-Scale AFPS Rollout — Vedanta Opencast Mine',
    client: 'Vedanta Resources',
    location: 'Jharsuguda, Odisha',
    date: 'January 2024',
    machineryType: 'Dump Trucks (300T class) & Rope Shovels',
    units: 55,
    description:
      'One of AEI\'s largest single-project deployments — installing AFPS on 55 ultra-class dump trucks and rope shovels at Vedanta\'s flagship opencast mining operation. The project was completed in partnership with the OEM service team.',
    challenge:
      'Ultra-class dump trucks present unique challenges: very high engine bay temperatures, complex hydraulic routing, and stringent OEM fire safety specifications that must be met to maintain warranty coverage.',
    solution:
      'AEI worked directly with the OEM\'s service engineering team to co-design the AFPS layout for each machine variant. Nitrogen-driven dry chemical powder systems were selected for their fast activation time and suitability for extreme heat environments.',
    advantages: [
      'OEM warranty maintained across all 55 units',
      'DGMS certification obtained for the entire fleet',
      'Deployment completed 3 days ahead of schedule',
      'Fleet now serves as a reference site for other Vedanta operations',
      'Ongoing annual service contract signed with AEI',
    ],
    tags: ['Opencast Mining', 'Dump Trucks', 'Rope Shovels', 'Large Scale', 'OEM Partnership'],
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
