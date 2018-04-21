export class RenditionConfiguration {
  id: number;
  name: string;
  width: number;
  height: number;
  quality: number;
  resize: boolean;
  private: boolean;
  createdAt: Date;
  updatedAt: Date;
  original: boolean;

  describe(): string {
    if (this.original) {
      return 'original';
    }

    if (this.resize) {
      return `resize to ${this.width}×${this.height} at most`;
    }
    return name;
  }
}
