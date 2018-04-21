import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShareListComponent } from './photo-share-list.component';

describe('PhotoShareListComponent', () => {
  let component: PhotoShareListComponent;
  let fixture: ComponentFixture<PhotoShareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoShareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
