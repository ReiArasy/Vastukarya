/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, TeamMember, ValueItem, ServiceItem } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'hotel-himana-bali',
    title: 'Hotel Himana Bali',
    category: 'Hospitality',
    location: 'Uluwatu, Bali',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90',
    client: 'Himana Resorts Group International',
    services: ['Architecture Design', 'Interior Architecture', 'Landscape Masterplanning'],
    size: '12,500 sqm',
    quote: "An extraordinary dialogue between raw concrete cantilevered volumes and Uluwatu's ancient limestone cliffs, allowing the ocean breeze to dictate the layout's fluid path.",
    description: 'Hotel Himana Bali redefines eco-luxury hospitality on the southern tip of Bali. Perched on a dramatic 80-meter limestone cliff, the architecture forms a series of terraced concrete pavilions that mimic the natural contours of the landscape, minimizing site excavation while framing unobstructed ocean vistas.',
    details: [
      'The design philosophy rests on the concept of "Subterranean Tropicality"—an investigation into how heavy, monolithic structural elements can live in complete weightless harmony with Indonesia\'s tropical climate. Cantilevered infinity pools extend outwards from solid concrete shear walls, creating dramatic sculptural forms that double as natural canopies for public terraces below.',
      'To celebrate regional materiality, PT. VASTUKARYA collaborated with Balinese artisans to weave local volcanic stone, reclaimed teakwood, and hand-woven rattan screens into the modern structural frame. This integration creates a rich, tactile juxtaposition of brutalist geometric planes and highly crafted organic textures, establishing a deep dialogue between raw modernist geometry and traditional cultural wisdom.',
      'Passive environmental systems are woven directly into the architectural layout. Narrow floor plates, expansive light shafts, and double-height ventilation corridors utilize the site\'s natural microclimate, creating an aerodynamic vacuum that draws the cool, oceanic thermal currents upwards, entirely eliminating the need for mechanical cooling in the resort\'s main lounges.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'surabaya-residence',
    title: 'Surabaya Residence',
    category: 'Residential',
    location: 'Surabaya, East Java',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=90',
    client: 'Private Owner',
    services: ['Architectural Consulting', 'Interior Design', 'Sustainable Building Commission'],
    size: '680 sqm',
    quote: "A modern sanctuary that successfully insulates its inhabitants from Surabaya's dense humidity through a double-skin terracotta breeze block facade.",
    description: 'Surabaya Residence is a high-end private home located in the prestigious western suburbs of Surabaya. Conceived as a multi-generational sanctuary, the residence addresses the tropical climate of East Java through a complex system of intersecting courtyards, breathing double-skin walls, and soaring vertical light wells.',
    details: [
      'The primary challenge was managing thermal comfort in one of Indonesia\'s hottest urban areas. VASTUKARYA designed a custom terracotta breeze block envelope that wraps around the west-facing facade. This structural "second-skin" diffuses direct solar radiation by up to 58%, while translating harsh sunlight into intricate, moving patterns of soft light and shadow across the interior living spaces.',
      'Inside, the layout features a continuous double-height living and dining space that visually integrates all three floors. Minimalist raw concrete slabs are juxtaposed with warm polished Indonesian granite and premium dark ironwood, offering a calm and tactile escape from the bustling city outside.',
      'A central internal water court acts as a passive cooling core. Air drawn from the outer perimeter is naturally cooled as it travels across the surface of the pool, rising through a wide exhaust skylight to create a constant chimney-effect convection cycle keeping the thermal mass refreshing and comfortable.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'commercial-complex-east-java',
    title: 'Commercial Complex East Java',
    category: 'Architecture',
    location: 'Surabaya, East Java',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=90',
    client: 'PT. Nusantara Sentosa Jaya',
    services: ['Strategic Design Masterplanning', 'Façade Engineering', 'Green Building Auditing'],
    size: '34,200 sqm',
    quote: "Reinterpreting the corporate office as an open, vertical campus that champions public squares and civic integration over isolationist glass walls.",
    description: 'A striking addition to the Surabaya skyline, this commercial development acts as an progressive hub for modern Indonesian startups and tech consultancies. The architecture rejects the traditional closed glass tower model in favor of an open vertical campus with lush outdoor green terraces every three floors.',
    details: [
      'The building consists of two interlocking, angled office towers connected by a massive nine-story steel-framed atrium. This structural heart facilitates a bustling vertical ecosystem, featuring open-air amphitheaters, communal project rooms, and quiet botanical gardens that host collaborative sessions and spur cross-corporate innovation.',
      'Targeting Indonesia\'s highest green building certifications, the building utilizes high-performance low-emissivity glass integrated with computer-controlled solar-tracking aluminum louvers. These louvers automatically adjust their pitch matching the sun\'s path to reduce solar glare and structural heat absorption, resulting in a 35% reduction in internal cooling energy.',
      'On the street level, a generous public plaza flows directly under the tower\'s structural steel pilotis. By lifting the mass off the ground, VASTUKARYA restored valuable urban land to the city, introducing a vibrant marketplace filled with public amphitheaters, native landscaping, and civic spaces that invite community integration.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'luxury-villa-interior',
    title: 'Luxury Villa Interior',
    category: 'Interior',
    location: 'Canggu, Bali',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920&q=90',
    client: 'Private Client',
    services: ['Interior Architecture', 'Custom Furniture Design', 'Lighting Engineering'],
    size: '420 sqm',
    quote: "Where the interior ceases to be a decorative wrap and becomes a carefully orchestrated architectural landscape of light, raw wood, and volcanic clay.",
    description: 'This bespoke interior project transforms a traditional pavilion villa in Canggu into a highly sophisticated, minimalist sanctuary. The design strips away unnecessary details to focus purely on the poetry of natural materials, shadows, and linear volumetric spacing.',
    details: [
      'The material palette is strictly limited to four key elements: sand-textured volcanic stucco, raw untreated solid core teak, split-faced basalt stone, and unlacquered organic bronze. Together, they create an atmosphere that feels earthy yet extraordinarily refined, allowing the rich natural aging pattern of each material to establish a deeply calm and sensory-rich home.',
      'VASTUKARYA custom-designed every piece of built-in joinery. Seamless, floor-to-ceiling cabinets slide invisibly into plaster recesses, leaving structural columns expressed in their raw states. Custom-sculpted stone sinks, carved from single volcanic basalt boulders, anchor the bathrooms with a commanding, primordial permanence.',
      'Lighting design was treated as a spatial material. Working with state-of-the-art warm-dim technology, all light sources are carefully concealed inside perimeter wall coves or structural floor niches, casting an ambient glow that mimics the organic, soft transition from golden balinese sunsets to deep tropical night.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'urban-mixed-use',
    title: 'Urban Mixed-Use Development',
    category: 'Architecture',
    location: 'Menteng, Jakarta',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1448630360428-654a95b93b4f?auto=format&fit=crop&w=1920&q=90',
    client: 'PT. Metropolitan Real Estate',
    services: ['Urban Masterplanning', 'Architectural Consulting', 'Transit Oriented Design'],
    size: '56,000 sqm',
    quote: "A hyper-dense urban intervention that introduces a porous, walking-friendly public framework in one of Jakarta's most historical districts.",
    description: 'Located in the historic district of Menteng in Jakarta, this transit-oriented commercial and residential hub marks an pioneering stride for dense, human-scale urbanism. The development links residential apartments, boutique offices, micro-retail outlets, and a municipal transit hub into a highly walking-friendly ecosystem.',
    details: [
      'The architecture respects Menteng\'s unique Dutch-Indonesian historical low-rise residential fabric. Rather than designing a single monolithic block, VASTUKARYA divided the immense 56,000 sqm program into a cluster of porous, stepped low-and-mid-rise brick volumes, maintaining a friendly scale and preserving valuable historical sightlines.',
      'A labyrinth of shaded public alleys, landscaped lanes, and sunken courtyards threads through the structural masses. These public spaces are modeled on traditional Indonesian "gangs" (neighborhood lanes), creating unexpected meeting places, cooling pocket-forest structures, and encouraging a lively pedestrian culture in Jakarta\'s dense urban core.',
      'The facade is clad in millions of local, handmade terracotta brick tiles sourced directly from traditional brick kilns in West Java. Laid with varied joints and deliberate air-gaps, the brick walls act as breathing masonry screens that filter noise. This serves as a warm, human-scaled material nod to Jakarta\'s historic residential architecture.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503387762458-7e52f42855f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512403754473-27855f528a3f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'children-bedroom-suite',
    title: "Children's Bedroom Suite",
    category: 'Interior',
    location: 'Surabaya, East Java',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1920&q=90',
    client: 'Family Residence',
    services: ['Interior Spatial Design', 'Custom Furniture Engineering', 'Safety Audit'],
    size: '85 sqm',
    quote: "A playful loftscape that treats interior spatial volume as an architectural playground, encouraging exploration while using clean, toxic-free organic materials.",
    description: "An elegant, imaginative private bedroom suite designed to grow with two young children. Eschewing temporary, brightly colored plastic themes, VASTUKARYA designed an architectural 'loftscape' using soft maple wood and acoustic felt panels to define functional zones for rest, study, and play.",
    details: [
      'The concept centers on "Spatial Playfulness". The room utilizes its high 4.2-meter ceiling, introducing a structurally certified floating timber mezzanine deck. This loft acts as a safe, cozy elevated reading fort, accessible by an integrated storage stairwell, maximizing floor-level area for creative physical play.',
      'Material selections were audited to guarantee absolute interior air quality. The structure uses high-grade, zero-formaldehyde solid maple timber sealed with natural, plant-based non-toxic food-safe oils. Wall panels are faced with noise-dampening acoustic felt recycled from ocean-bound plastics, creating a quiet, warm, and highly stimulating setting.',
      'The lighting setup features fully customized, programmable architectural fixtures. Soft circadian lighting strips are embedded along the perimeter joinery. These transition seamlessly from bright, cool focus lighting for afternoon study hours to amber, melaton-promoting, sky-like warmth as bedtime approaches, helping child bedtime routines globally.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dany Pratama, IAI',
    role: 'Founder & Principal Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
    bio: 'Dany founded VASTUKARYA with a vision to build contemporary architecture that respects Nusantara\'s cultural roots. He holds an M.Arch from ITB and has over 15 years of international design experience.'
  },
  {
    name: 'Maya Sastrowardoyo, IAI',
    role: 'Partner / Lead Interior Architect',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80',
    bio: 'Maya oversees all interior design and spatial experiences at VASTUKARYA, blending rigorous Scandinavian minimalism with rich, raw tropical materiality.'
  },
  {
    name: 'Aris Setiawan, IAI',
    role: 'Senior Associate / Façade & Tech Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80',
    bio: 'Aris is a leader in sustainable building envelopes and structural innovation, integrating custom algorithmic tools to analyze thermodynamics on high-performance facades.'
  }
];

export const VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Cultural Roots',
    description: 'We believe premium architecture should honor its site context. Our designs deeply integrate Indonesian (Nusantara) architectural wisdom, passive thermodynamic strategies, and regional vernacular traditions.'
  },
  {
    number: '02',
    title: 'Prowess & Innovation',
    description: 'By merging computer-aided structural algorithms with historical craftsmanship, we build architectural works that are structurally progressive, durable, and optimized for high-performance thermal comfort.'
  },
  {
    number: '03',
    title: 'Radical Sustainability',
    description: 'We prioritize passive ventilation systems, natural sun shading, breathing facades, and high-quality, regionally sourced local materials to minimize energy demand and establish carbon-responsible builds.'
  },
  {
    number: '04',
    title: 'Global Vision',
    description: 'Our team in Surabaya works across borders. We deliver world-class technical precision, masterplanning, and high-fidelity specifications that are competitive and exceptional in any global metropolis.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Architectural Design',
    description: 'Full-phase architectural services for high-end luxury residences, commercial towers, civic landmarks, and hotel resorts, from initial physical model planning to full on-site compliance audits.',
    features: ['Schematic Design & Modeling', 'BIM Structuring (LOD 400)', 'Vernacular Passive Solar Integration', 'Construction Compliance Audits']
  },
  {
    number: '02',
    title: 'Interior Architecture',
    description: 'Immersive, sensory interior environments designed as a continuous extension of the architectural form, using carefully selected raw materials, sculptural fixtures, and human-scaled spacing.',
    features: ['Bespoke Millwork & Joinery Design', 'State-of-the-Art Concealed Lighting Design', 'Material Sourcing & Physical Inspection', 'Curated Art & Furniture Specification']
  },
  {
    number: '03',
    title: 'Urban Masterplanning',
    description: 'Forward-looking municipal concepts and masterplans that restore public walking spaces, introduce deep greenery corridors, and integrate transit pathways in high-density urban developments.',
    features: ['Transit-Oriented Development Strategies', 'Pedestrian & Micro-Climate Simulations', 'Green Infrastructure Siting', 'Civic Fabric & Zonal Studies']
  }
];
