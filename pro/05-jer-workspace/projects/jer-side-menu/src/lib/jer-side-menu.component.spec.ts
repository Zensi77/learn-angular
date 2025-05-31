import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { JerSideMenuComponent } from 'jer-side-menu';

describe('JerSideMenuComponent', () => {
  let component: JerSideMenuComponent;
  let fixture: ComponentFixture<JerSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JerSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
