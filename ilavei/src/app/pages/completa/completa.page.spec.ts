import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletaPage } from './completa.page';

describe('CompletaPage', () => {
  let component: CompletaPage;
  let fixture: ComponentFixture<CompletaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
