import type { Course, Question, Note, Restaurant } from './types';

export const ALL_COURSES: Course[] = [
  { code: 'GST101', title: 'Use of English I', level: 100, units: 2, premium: false, description: 'Academic writing, grammar, communication skills.' },
  { code: 'BIO101', title: 'General Biology I', level: 100, units: 3, premium: false, description: 'Cell biology, genetics, ecology fundamentals.' },
  { code: 'CHM101', title: 'General Chemistry I', level: 100, units: 3, premium: false, description: 'Atomic structure, bonding, stoichiometry.' },
  { code: 'PHY101', title: 'General Physics I', level: 100, units: 3, premium: false, description: 'Mechanics, waves, thermodynamics basics.' },
  { code: 'ANA201', title: 'Gross Anatomy I', level: 200, units: 3, premium: false, description: 'Upper limb, lower limb, back anatomy.' },
  { code: 'ANA204', title: 'Anatomy of Thorax, Abdomen, Pelvis', level: 200, units: 3, premium: false, description: 'Regional anatomy of trunk regions.' },
  { code: 'NSG201', title: 'Fundamentals of Nursing', level: 200, units: 3, premium: false, description: 'Nursing process, vital signs, basic procedures.' },
  { code: 'NSG203', title: 'Anatomy & Physiology for Nurses', level: 200, units: 3, premium: false, description: 'Body systems for nursing practice.' },
  { code: 'NSG205', title: 'Pharmacology I', level: 200, units: 3, premium: false, description: 'Drug classifications, mechanisms, nursing implications.' },
  { code: 'NSG301', title: 'Medical-Surgical Nursing I', level: 300, units: 3, premium: true, description: 'Perioperative care, wound management, surgical asepsis.' },
  { code: 'NSG303', title: 'Maternal & Child Health Nursing', level: 300, units: 3, premium: true, description: 'Antenatal, intrapartum, postnatal, neonatal care.' },
  { code: 'NSG401', title: 'Mental Health Nursing', level: 400, units: 3, premium: true, description: 'Psychiatric disorders, therapeutic communication.' },
  { code: 'NSG501', title: 'Community Health Nursing', level: 500, units: 3, premium: true, description: 'Public health, epidemiology, PHC.' },
  { code: 'NUR601', title: 'Advanced Nursing Practice', level: 600, units: 3, premium: true, description: 'Evidence-based practice, leadership, research.' },
];

export const ALL_QUESTIONS: Question[] = [
  { id: 'g1', courseCode: 'GST101', text: 'Which of these is NOT a feature of academic writing?', options: ['Objectivity', 'Colloquial language', 'Precision', 'Formal tone'], correctIndex: 1, explanation: 'Academic writing avoids colloquial/informal language.', difficulty: 'easy' },
  { id: 'g2', courseCode: 'GST101', text: 'APA citation for a journal article requires:', options: ['Author, Year, Title, Journal', 'Title, Author, Publisher, Year', 'Author, Title, Year, City', 'Journal, Author, Volume, Issue'], correctIndex: 0, explanation: 'APA format: Author (Year). Title. Journal, Vol(Issue), pages.', difficulty: 'medium' },
  { id: 'g3', courseCode: 'GST101', text: "A paragraph's main idea is called the:", options: ['Supporting sentence', 'Topic sentence', 'Concluding sentence', 'Transitional sentence'], correctIndex: 1, explanation: "The topic sentence states the paragraph's central idea.", difficulty: 'easy' },
  { id: 'g4', courseCode: 'GST101', text: 'Which tense is preferred in scientific writing for methods?', options: ['Present', 'Future', 'Past', 'Present perfect'], correctIndex: 2, explanation: 'Methods are written in past tense as they describe completed actions.', difficulty: 'medium' },
  { id: 'g5', courseCode: 'GST101', text: 'Plagiarism means:', options: ['Citing sources correctly', 'Using your own ideas', 'Copying without attribution', 'Paraphrasing with citation'], correctIndex: 2, explanation: "Plagiarism is presenting others' work as your own without acknowledgment.", difficulty: 'easy' },
  { id: 'a1', courseCode: 'ANA201', text: 'The brachial plexus originates from spinal segments:', options: ['C4-C8', 'C5-T1', 'C4-T2', 'C3-T1'], correctIndex: 1, explanation: 'Brachial plexus: C5, C6, C7, C8, T1 — the roots.', difficulty: 'medium' },
  { id: 'a2', courseCode: 'ANA201', text: 'The rotator cuff does NOT include:', options: ['Supraspinatus', 'Infraspinatus', 'Deltoid', 'Teres minor'], correctIndex: 2, explanation: 'SITS muscles: Supraspinatus, Infraspinatus, Teres minor, Subscapularis. Deltoid is not included.', difficulty: 'hard' },
  { id: 'a3', courseCode: 'ANA201', text: 'Blood supply to the femoral head mainly comes from:', options: ['Obturator artery', 'Medial circumflex femoral artery', 'Lateral circumflex femoral artery', 'Superior gluteal artery'], correctIndex: 1, explanation: 'Medial circumflex femoral artery is the primary supply to the femoral head in adults.', difficulty: 'hard' },
  { id: 'a4', courseCode: 'ANA201', text: 'The carpal tunnel contains all EXCEPT:', options: ['Median nerve', 'Flexor digitorum superficialis', 'Ulnar nerve', 'Flexor pollicis longus'], correctIndex: 2, explanation: "The ulnar nerve passes through Guyon's canal, not the carpal tunnel.", difficulty: 'medium' },
  { id: 'a5', courseCode: 'ANA201', text: 'The sciatic nerve exits the pelvis through:', options: ['Greater sciatic foramen', 'Lesser sciatic foramen', 'Obturator foramen', 'Sacrosciatic notch only'], correctIndex: 0, explanation: 'Sciatic nerve exits via greater sciatic foramen below piriformis.', difficulty: 'easy' },
  { id: 'n1', courseCode: 'NSG301', text: 'The perioperative period begins:', options: ['At induction of anesthesia', 'When patient decides on surgery', 'On arrival at OR', 'At first incision'], correctIndex: 1, explanation: 'Perioperative period starts when patient decides to have surgery and ends with recovery evaluation.', difficulty: 'medium' },
  { id: 'n2', courseCode: 'NSG301', text: 'Surgical asepsis requires:', options: ['Sterile field at all times', 'Clean but not sterile field', 'Handwashing only', 'Gloves only'], correctIndex: 0, explanation: 'Surgical asepsis = complete absence of microorganisms in the sterile field.', difficulty: 'easy' },
  { id: 'n3', courseCode: 'NSG301', text: 'The most common post-op complication is:', options: ['Hemorrhage', 'Pulmonary atelectasis', 'Deep vein thrombosis', 'Wound dehiscence'], correctIndex: 1, explanation: 'Pulmonary atelectasis is most common, occurring due to shallow breathing post-anesthesia.', difficulty: 'medium' },
  { id: 'n4', courseCode: 'NSG301', text: 'Wound evisceration is:', options: ['Wound infection', 'Wound edges separating', 'Protrusion of organs through wound', 'Delayed healing'], correctIndex: 2, explanation: 'Evisceration = intestines or organs protrude through an opened wound — a surgical emergency.', difficulty: 'hard' },
  { id: 'n5', courseCode: 'NSG301', text: 'Scrub nurse responsibilities include:', options: ['Monitoring anesthesia', 'Maintaining sterile field', 'Circulating supplies', 'Positioning patient'], correctIndex: 1, explanation: 'Scrub nurse/RNFA maintains sterile field and handles sterile instruments.', difficulty: 'easy' },
];

export const ALL_NOTES: Note[] = [
  { id: 'note1', courseCode: 'GST101', title: 'Academic Writing Complete Guide', level: 100, author: 'Prof. Nkechi Obi', date: '01/09/2024', content: 'Essay structure: Introduction (hook, background, thesis), Body (topic sentence, evidence, analysis), Conclusion (restate thesis, summary, call to action).\n\nCitations: APA, MLA, Chicago styles.\n\nParagraph unity: one idea per paragraph.\n\nCoherence devices: however, furthermore, in contrast, consequently.', premium: false },
  { id: 'note2', courseCode: 'ANA201', title: 'Upper Limb Anatomy Summary', level: 200, author: 'Dr. Biodun Adesanya', date: '15/09/2024', content: 'BRACHIAL PLEXUS: Roots (C5-T1) → Trunks (Upper/Middle/Lower) → Divisions → Cords (Lateral/Medial/Posterior) → Branches\n\nROTATOR CUFF (SITS): Supraspinatus, Infraspinatus, Teres minor, Subscapularis\n\nCARPAL TUNNEL contents: Median nerve + 9 tendons (FDS×4, FDP×4, FPL)\n\nMnemonic: \'Some Lovers Try Positions That They Can\'t Handle\' = Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate', premium: false },
  { id: 'note3', courseCode: 'NSG301', title: 'Perioperative Nursing Care Guide', level: 300, author: 'Prof. Adeaze Nwankwo', date: '01/10/2024', content: 'PREOPERATIVE PHASE:\n- Patient assessment, consent, NPO status (6-8hrs solids, 2hrs clear liquids)\n- Skin prep, IV access, premedication\n- Teaching: deep breathing, leg exercises, pain management\n\nINTRAOPERATIVE PHASE:\n- Surgical asepsis maintained\n- Scrub nurse: sterile field\n- Circulating nurse: unsterile tasks\n\nPOSTOPERATIVE PHASE:\n- PACU: airway, vitals, pain, consciousness\n- Aldrete score ≥8 before discharge from PACU\n- Watch for: atelectasis, DVT, hemorrhage, infection', premium: true },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1', name: "Mama Cee's Kitchen", description: 'Nigerian home cooking', emoji: '🍲',
    items: [
      { id: 'r1i1', name: 'Jollof Rice + Chicken', price: 1200, description: 'Party jollof with grilled chicken', emoji: '🍛' },
      { id: 'r1i2', name: 'Egusi Soup + Pounded Yam', price: 1500, description: 'Rich egusi with assorted meat', emoji: '🫙' },
      { id: 'r1i3', name: 'Fried Rice + Fish', price: 1000, description: 'Nigerian fried rice with tilapia', emoji: '🍚' },
    ]
  },
  {
    id: 'r2', name: 'Healthy Bites', description: 'Health-conscious meals', emoji: '🥗',
    items: [
      { id: 'r2i1', name: 'Veggie Wrap', price: 800, description: 'Fresh vegetables in whole wheat wrap', emoji: '🌯' },
      { id: 'r2i2', name: 'Oat Smoothie Bowl', price: 650, description: 'Oats, banana, groundnut butter', emoji: '🥣' },
      { id: 'r2i3', name: 'Grilled Chicken Salad', price: 1100, description: 'Romaine, cherry tomatoes, grilled breast', emoji: '🥙' },
    ]
  },
  {
    id: 'r3', name: 'Snack Corner', description: 'Quick bites & drinks', emoji: '🧃',
    items: [
      { id: 'r3i1', name: 'Meat Pie', price: 350, description: 'Crispy pastry with spiced meat filling', emoji: '🥧' },
      { id: 'r3i2', name: 'Chapman Drink', price: 400, description: 'Chilled Nigerian Chapman cocktail', emoji: '🍹' },
      { id: 'r3i3', name: 'Doughnut × 2', price: 300, description: 'Soft glazed doughnuts', emoji: '🍩' },
    ]
  },
  {
    id: 'r4', name: 'Pepper Soup Bar', description: 'Spicy Nigerian soups', emoji: '🌶️',
    items: [
      { id: 'r4i1', name: 'Catfish Pepper Soup', price: 1800, description: 'Hot point & kill with catfish', emoji: '🐟' },
      { id: 'r4i2', name: 'Assorted Meat Pepper Soup', price: 2000, description: 'Shaki, kpomo, beef', emoji: '🍖' },
      { id: 'r4i3', name: 'Goat Meat Pepper Soup', price: 2200, description: 'Classic Nigerian pepper soup', emoji: '🐐' },
    ]
  }
];

export const CHATBOT_RESPONSES: Record<string, string> = {
  anatomy: 'For anatomy, use the mnemonic SITS for rotator cuff muscles. Brachial plexus roots: C5-T1. Remember: "Real Texans Drink Cold Beer" for plexus levels!',
  pharmacology: 'Drug mnemonic tip: ADME = Absorption, Distribution, Metabolism, Excretion. Always check half-life and therapeutic window!',
  surgery: 'Perioperative phases: Pre-op (assessment) → Intra-op (sterile field) → Post-op (PACU, Aldrete score). NPO: 6-8hrs solids, 2hrs clear liquids.',
  subscription: 'Premium: ₦1,700/month — access 300-level courses + exams.\nUltimate: ₦3,000/month — unlimited AI, all levels, downloadable PDFs, CBT history.',
  pricing: 'Free: 100-200 level courses.\nPremium (₦1,700/mo): 300-level + exams.\nUltimate (₦3,000/mo): Everything + unlimited AI + all PDFs.',
  leaderboard: 'The leaderboard tracks your best quiz score per course. Top 3 monthly scorers per course win wallet rewards! Check 🏆 Leaderboard in the dashboard.',
  wallet: 'Your wallet stores reward credits. Top monthly performers get ₦1,000–₦3,000 credited automatically. You can use wallet credits to extend subscriptions.',
};
