import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjudaPage } from './ajuda.page';

describe('AjudaPage', () => {
  let component: AjudaPage;
  let fixture: ComponentFixture<AjudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
