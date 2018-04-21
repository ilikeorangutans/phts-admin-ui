import { Collection } from './collection';
import { Rendition } from './rendition';

export class Photo {
    id: number;
    collection: Collection;
    takenAt: Date;
    createdAt: Date;
    updatedAt: Date;
    renditions: Rendition[] = [];
    published: boolean;
}
