import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

declare global {
  interface Window {
    pJSDom: any
  }
}
