import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSettingsComponent } from './collection-settings.component';

describe('RenditionConfigurationsComponent', () => {
  let component: CollectionSettingsComponent;
  let fixture: ComponentFixture<CollectionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
