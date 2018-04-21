import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailLinkComponent } from './photo-detail-link.component';

describe('PhotoDetailLinkComponent', () => {
  let component: PhotoDetailLinkComponent;
  let fixture: ComponentFixture<PhotoDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
