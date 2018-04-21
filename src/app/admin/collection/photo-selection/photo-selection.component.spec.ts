import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSelectionComponent } from './photo-selection.component';

describe('PhotoSelectionComponent', () => {
  let component: PhotoSelectionComponent;
  let fixture: ComponentFixture<PhotoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
