export type FabricCategory =
  | 'all'
  | 'adire-batik'
  | 'classic-adire'
  | 'contemporary-adire'
  | 'premium-adire'
  | 'custom-designs'
  | 'african-print';

export interface FabricItem {
  id: string;
  name: string;
  category: FabricCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  technique: 'Batik Wax Resist' | 'Eleko Starch Resist' | 'Oniko Tie-Dye' | 'Alabere Stitch Resist' | 'Hybrid Contemporary' | 'Hand-Drawn Indigo';
  baseMaterial: string;
  primaryColors: string[];
  colorTheme: string;
  imageUrl: string;
  detailImages?: string[];
  idealFor: string;
  origin: string;
  featured?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  fabricPreference: string;
  message: string;
  orderType?: 'Personal' | 'Fashion Designer' | 'Boutique' | 'Bulk / Event' | 'Custom Commission' | 'General Inquiry';
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
