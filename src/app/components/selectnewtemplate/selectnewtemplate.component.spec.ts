import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectnewtemplateComponent } from './selectnewtemplate.component';

describe('SelectnewtemplateComponent', () => {
  let component: SelectnewtemplateComponent;
  let fixture: ComponentFixture<SelectnewtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectnewtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectnewtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
