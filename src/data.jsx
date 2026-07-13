import svcSeo from './assets/svc-seo.png'
import svcSocial from './assets/svc-social.png'
import svcPaidads from './assets/svc-paidads.png'
import svcContent from './assets/svc-content.png'
import svcWebsite from './assets/svc-website.png'
import svcUiux from './assets/svc-uiux.png'
import svcGraphic from './assets/svc-graphic.png'
import svcVideo from './assets/svc-video.png'
import svcBranding from './assets/svc-branding.png'
import svcEmail from './assets/svc-email.png'
import svcAutomation from './assets/svc-automation.png'
import svcLoyalty from './assets/svc-loyalty.png'

export const services = [
  { key: 'sv1', img: svcSeo, alt: 'seo' },
  { key: 'sv2', img: svcSocial, alt: 'social media marketing' },
  { key: 'sv3', img: svcPaidads, alt: 'paid ads' },
  { key: 'sv4', img: svcContent, alt: 'content writing' },
  { key: 'sv5', img: svcWebsite, alt: 'website development' },
  { key: 'sv6', img: svcUiux, alt: 'ui/ux design' },
  { key: 'sv7', img: svcGraphic, alt: 'graphic design' },
  { key: 'sv8', img: svcVideo, alt: 'video editing' },
  { key: 'sv9', img: svcBranding, alt: 'branding' },
  { key: 'sv10', img: svcEmail, alt: 'email marketing' },
  { key: 'sv11', img: svcAutomation, alt: 'automation' },
  { key: 'sv12', img: svcLoyalty, alt: 'loyalty offers' },
]

export const niches = [
  { key: 'nHotels', icon: 'hotel' },
  { key: 'nDental', icon: 'tooth' },
  { key: 'nFashion', icon: 'shoe' },
  { key: 'nRetail', icon: 'bag' },
  { key: 'nPet', icon: 'paw' },
  { key: 'nRest', icon: 'restaurant' },
  { key: 'nBeauty', icon: 'beauty' },
  { key: 'nTrades', icon: 'wrench' },
]

export const cases = [
  {
    delay: 40,
    featured: false,
    labelKey: 'c1label',
    timeKey: 'c1time',
    time: '4 months',
    stat: { to: 340, prefix: '+', suffix: '%' },
    metricKey: 'db',
    startKey: 'c1start',
    rows: [
      { key: 'c1r1', from: '5', to: '22' },
      { key: 'c1r2', from: '€438', to: '€4,200' },
      { key: 'c1r3', from: '0', to: '150' },
    ],
  },
  {
    delay: 120,
    featured: true,
    labelKey: 'c2label',
    timeKey: 'c2time',
    stat: { to: 2.4, decimals: 1, suffix: '×' },
    metricKey: 'c2metric',
    startKey: 'c2start',
    rows: [
      { key: 'c2r1', from: '11', to: '26' },
      { key: 'c2r2', from: '€48', to: '€21' },
      { key: 'c2r3', from: '#9', to: '#3' },
    ],
  },
  {
    delay: 200,
    featured: false,
    labelKey: 'c3label',
    timeKey: 'c3time',
    stat: { to: 84, prefix: '+', suffix: '%' },
    metricKey: 'c3metric',
    startKey: 'c3start',
    rows: [
      { key: 'c3r1', from: '€3,100', to: '€5,700' },
      { key: 'c3r2', from: '0', to: '480' },
      { key: 'c3r3', from: '2.1', to: '3.4' },
    ],
  },
]

export const testimonials = [
  { delay: 40, qKey: 't1q', pKey: 't1p', aKey: 't1a' },
  { delay: 120, qKey: 't2q', pKey: 't2p', aKey: 't2a' },
  { delay: 80, qKey: 't3q', pKey: 't3p', aKey: 't3a' },
  { delay: 160, qKey: 't4q', pKey: 't4p', aKey: 't4a' },
]

export const guarantees = [
  { delay: 40, titleKey: 'g1t', descKey: 'g1d' },
  { delay: 90, titleKey: 'g2t', descKey: 'g2d' },
  { delay: 140, titleKey: 'g3t', descKey: 'g3d' },
  { delay: 190, titleKey: 'g4t', descKey: 'g4d' },
  { delay: 240, titleKey: 'g5t', descKey: 'g5d' },
]

export const processSteps = [
  { delay: 40, num: '01', weekKey: 'pw1', titleKey: 'pt1', descKey: 'pd1' },
  { delay: 110, num: '02', weekKey: 'pw2', titleKey: 'pt2', descKey: 'pd2' },
  { delay: 180, num: '03', weekKey: 'pw3', titleKey: 'pt3', descKey: 'pd3' },
  { delay: 250, num: '∞', weekKey: 'pw4', titleKey: 'pt4', descKey: 'pd4' },
]

/* Visible pricing-card feature lists were not translated in the original. */
export const pricingPlans = [
  {
    delay: 40,
    pkg: 'basic',
    nameKey: 'pr1',
    subKey: 'pr1s',
    price: '€1,000',
    featured: false,
    features: [
      { text: 'SEO & Website Maintenance', muted: false },
      { text: '12 Social Media Posts / Month', muted: false },
      { text: '10 Blog Articles / Month', muted: false },
      { text: '4 Short-Form Videos / Month', muted: false },
      { text: '5 more included', muted: true },
    ],
  },
  {
    delay: 120,
    pkg: 'advanced',
    nameKey: 'pr2',
    subKey: 'pr2s',
    price: '€1,499',
    featured: true,
    plusKey: 'pr2plus',
    features: [
      { text: 'Advanced SEO & Web Optimization', muted: false },
      { text: '2 Platforms Managed (FB & IG)', muted: false },
      { text: '16 Posts, 12 Blogs & 6 Videos', muted: false },
      { text: 'Ad Creative & Competitor Analysis', muted: false },
      { text: '4 more included', muted: true },
    ],
  },
  {
    delay: 200,
    pkg: 'premium',
    nameKey: 'pr3',
    subKey: 'pr3s',
    price: '€2,999',
    featured: false,
    plusKey: 'pr3plus',
    features: [
      { text: 'Full SEO Strategy & Management', muted: false },
      { text: 'Up to 4 Platforms Managed', muted: false },
      { text: '20 Posts, 15 Blogs & 8 Videos', muted: false },
      { text: 'Unlimited Graphics & Priority Support', muted: false },
      { text: '7 more included', muted: true },
    ],
  },
]

export const faqs = [
  { qKey: 'fq1', aKey: 'fa1' },
  { qKey: 'fq2', aKey: 'fa2' },
  { qKey: 'fq3', aKey: 'fa3' },
  { qKey: 'fq4', aKey: 'fa4' },
  { qKey: 'fq5', aKey: 'fa5' },
]

/* Full package detail shown in the pricing modal (English, as in the original). */
export const packages = {
  basic: {
    name: 'Basic',
    price: '€1,000',
    per: '/month',
    popular: false,
    summary:
      'Everything you need to establish a professional online presence and start showing up in local search.',
    features: [
      'SEO',
      'Website Maintenance',
      '12 Social Media Posts / Month',
      'Content Planning & Scheduling',
      '10 Blog Articles / Month',
      '2 Email Campaigns / Month',
      'Graphic Design',
      '4 Short-Form Videos / Month',
      'Google Business Profile Setup',
      'Monthly Performance Report',
    ],
    best: 'Local businesses just starting to build their digital presence.',
    deliverables: [
      '12 social posts, 10 blog articles & 4 short-form videos monthly',
      '2 email campaigns per month',
      'Google Business Profile set up',
      'Monthly performance report',
    ],
    support: 'Email support · guaranteed response within 1 working day.',
    limits: [
      'Single-platform focus',
      'No paid ad management or backlink building',
      'Ad spend, if added, is billed separately',
    ],
    cta: 'Book a Free Consultation',
  },
  advanced: {
    name: 'Advanced',
    price: '€1,499',
    per: '/month',
    popular: true,
    summary:
      'Everything in Basic, plus paid acquisition, multi-platform reach, and conversion-focused optimization.',
    features: [
      'Advanced SEO & Website Optimization',
      '2 Social Media Platforms Management (FB & IG)',
      'Increased Content (16 Posts, 12 Blogs & 6 Videos)',
      '2 Email Campaigns / Month',
      'Premium Graphic Designs',
      'Google Business Profile Optimization & Posting',
      'Backlink Building (5–10 / Month)',
      'Ad Creative Design',
      'Competitor Analysis',
      'Detailed Analytics & Performance Report',
    ],
    best: 'Growing businesses ready to scale demand and turn traffic into revenue.',
    deliverables: [
      '16 social posts, 12 blogs & 6 videos monthly',
      '2 email campaigns per month',
      'Ad creatives + competitor analysis',
      'Detailed monthly analytics report',
    ],
    support: 'Priority email support · guaranteed response within 1 working day.',
    limits: ['Up to 2 social platforms', 'Ad spend is billed separately'],
    cta: 'Choose This Package',
  },
  premium: {
    name: 'Premium',
    price: '€2,999',
    per: '/month',
    popular: false,
    summary:
      'Everything in Advanced, plus full-service management, unlimited creative, and dedicated priority support.',
    features: [
      'Full SEO Strategy & Website Management',
      'Multi-Platform Management (Up to 4 Platforms)',
      'Website Revamp & Optimization (5–10 Key Pages)',
      'Increased Content (20 Posts, 15 Blogs & 8 Videos)',
      '4 Email Campaigns / Month',
      'Unlimited Graphic Designs',
      'Community Management (Daily Comments & DMs)',
      'Google Review & Apple Business Profile Management',
      'Backlink Building (15–20 / Month)',
      'Advanced Ad Creatives & A/B Testing',
      'Conversion Optimization Recommendations',
      'Detailed Analytics & Performance Report',
      'Priority Support',
    ],
    best: 'Established brands wanting hands-off, full-service marketing.',
    deliverables: [
      '20 social posts, 15 blogs & 8 videos monthly',
      '4 email campaigns per month',
      'Unlimited graphic designs',
      'Conversion optimization recommendations',
    ],
    support: 'Dedicated priority support · fastest response times.',
    limits: ['Up to 4 platforms', 'Ad spend is billed separately'],
    cta: 'Choose This Package',
  },
}

export const supportEmail = 'info@symufolk.com'

export const emailHref =
  "mailto:info@symufolk.com?subject=Free%2030-Minute%20Growth%20Audit&body=Hi%20Symufolk%20team%2C%0A%0AI'd%20like%20to%20book%20my%20free%2030-minute%20growth%20audit.%0A%0ABusiness%20name%3A%0AWebsite%3A%0ACity%3A%0APhone%3A%0A%0AThanks!"

export const auditEmailHref = 'mailto:info@symufolk.com?subject=Free%2030-Minute%20Audit%20Request'
