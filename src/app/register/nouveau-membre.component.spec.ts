import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMembreComponent } from './nouveau-membre.component';

describe('NouveauMembreComponent', () => {
  let component: NouveauMembreComponent;
  let fixture: ComponentFixture<NouveauMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

