import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionKnowMoreComponent } from './section-know-more.component';

describe('SectionKnowMoreComponent', () => {
  let component: SectionKnowMoreComponent;
  let fixture: ComponentFixture<SectionKnowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionKnowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionKnowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
