import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '19b8ddd2-7910-4f0a-b580-3cb738c5f8bc',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '63f05c61-09b7-4b5e-9082-c5c824ce8711',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
