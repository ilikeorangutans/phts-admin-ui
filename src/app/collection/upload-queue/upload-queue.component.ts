import { UploadQueueService } from './../../services/upload-queue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-queue',
  templateUrl: './upload-queue.component.html',
  styleUrls: ['./upload-queue.component.css']
})
export class UploadQueueComponent implements OnInit {

  queue = new Array<File>();

  previews = new Map<string, any>();
  constructor(
    private uploadQueue: UploadQueueService
  ) {
    uploadQueue.queue.subscribe((files) => {
      const filenames = files.map((f) => f.name);

      const remove = new Array<string>();
      this.previews.forEach((value, key) => {
        if (!filenames.includes(key)) {
          remove.push(key);
        }
      });

      remove.forEach(name => {
        this.previews.delete(name);
      });

      this.queue = files.map((f) => {
        const reader = new FileReader();
        reader.onload = () => {
          // TODO this is probably not really efficient...
          this.previews.set(f.name, reader.result);
        };

        reader.readAsDataURL(f);
        return f;
      });


    });
  }

  ngOnInit() {
  }

  previewForName(name: string) {
    return this.previews.get(name);
  }

}
