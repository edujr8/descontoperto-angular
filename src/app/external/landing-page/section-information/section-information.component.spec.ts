import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInformationComponent } from './section-information.component';

describe('SectionInformationComponent', () => {
  let component: SectionInformationComponent;
  let fixture: ComponentFixture<SectionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
