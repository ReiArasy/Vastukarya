/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  slug: string;
  title: string;
  category: 'Architecture' | 'Interior' | 'Hospitality' | 'Residential';
  location: string;
  year: string;
  image: string;
  heroImage: string;
  description: string;
  details: string[];
  client: string;
  services: string[];
  size: string;
  quote?: string;
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  number: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  number: string;
  features: string[];
}
