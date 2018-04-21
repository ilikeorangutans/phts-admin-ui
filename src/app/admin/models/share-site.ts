import { Share } from './share';
export class ShareSite {
    id: number;
    domain: string;
    createdAt: Date;
    updatedAt: Date;

    shareURL(share: Share): string {

        return `${this.domain}/api/share/${share.slug}`;
    }
}
