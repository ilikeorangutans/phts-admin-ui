import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShareComponent } from './photo-share.component';

describe('PhotoShareComponent', () => {
  let component: PhotoShareComponent;
  let fixture: ComponentFixture<PhotoShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
