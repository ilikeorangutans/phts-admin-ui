import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNavBarComponent } from './collection-nav-bar.component';

describe('CollectionNavBarComponent', () => {
  let component: CollectionNavBarComponent;
  let fixture: ComponentFixture<CollectionNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
