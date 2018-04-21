import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareViewerComponent } from './share-viewer.component';

describe('ShareViewerComponent', () => {
  let component: ShareViewerComponent;
  let fixture: ComponentFixture<ShareViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
