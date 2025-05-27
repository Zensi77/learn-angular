import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import NavbarComponent from './shared/navbar/navbar.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLDivElement;

  @Component({
    selector: 'app-navbar',
    standalone: true,
    template: '<nav>Mock Navbar</nav>',
  })
  class navbarComponentMock {}

  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      set: {
        imports: [navbarComponentMock],
        schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar elementos personalizados sin errores
      },
    });

    //! Recomendado
    // await TestBed.configureTestingModule({
    //   imports: [AppComponent],
    //   providers: [provideRouter([])],
    // })
    //   .overrideComponent(AppComponent, {
    //     add: {
    //       imports: [navbarComponentMock],
    //     },
    //     remove: {
    //       imports: [NavbarComponent],
    //     },
    //   })
    //   .compileComponents();

    fixture = TestBed.createComponent(AppComponent); // Es el componente en el que estamos trabajando
    app = fixture.componentInstance; // Instancia del componente
    compiled = fixture.nativeElement as HTMLDivElement; // Elemento HTML compilado
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should render the navbar and router outlet`, () => {
    const navbar = compiled.querySelector('app-navbar');
    const routerOutlet = compiled.querySelector('router-outlet');

    expect(navbar).toBeTruthy();
    expect(routerOutlet).toBeTruthy();
  });
});
