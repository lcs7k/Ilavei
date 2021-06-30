import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificacaoPage } from './notificacao.page';

describe('NotificacaoPage', () => {
  let component: NotificacaoPage;
  let fixture: ComponentFixture<NotificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
