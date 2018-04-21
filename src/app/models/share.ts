import { RenditionConfiguration } from './rendition-configuration';
import { ShareSite } from './share-site';
export class Share {
  id: number;
  slug: string;
  photoID: number;
  shareSiteID: number;
  createdAt: Date;
  updatedAt: Date;
  shareSite: ShareSite;
  renditionConfigurations: Array<RenditionConfiguration> = [];
}
