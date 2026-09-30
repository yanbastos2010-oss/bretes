export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  imageUrl?: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
