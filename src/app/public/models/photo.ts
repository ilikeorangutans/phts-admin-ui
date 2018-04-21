import { Rendition } from './rendition';

export class Photo {
  id: number;
  takenAt: Date;
  renditions: Array<Rendition>;
}

