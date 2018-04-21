import { Photo } from './photo';
import { Collection } from './collection';

export class Album {
  id: number;
  name: string;
  slug: string;
  photoCount: number;
  createdAt: Date;
  updatedAt: Date;
  collection: Collection;
  coverPhoto: Photo;
  coverPhotoID: number;
}
