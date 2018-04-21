import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectablePhotoContainerComponent } from './selectable-photo-container.component';

describe('SelectablePhotoContainerComponent', () => {
  let component: SelectablePhotoContainerComponent;
  let fixture: ComponentFixture<SelectablePhotoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectablePhotoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectablePhotoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
