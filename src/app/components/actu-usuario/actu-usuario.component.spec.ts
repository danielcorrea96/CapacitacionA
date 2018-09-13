import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuUsuarioComponent } from './actu-usuario.component';

describe('ActuUsuarioComponent', () => {
  let component: ActuUsuarioComponent;
  let fixture: ComponentFixture<ActuUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
