import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorButtonComponent } from './calculator-button.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CalculatorButtonComponent],
  template: `<calculator-button
    class="underline"
    [isDoubleSize]="isDoubleSize"
    (onClick)="handleClick()"
  >
    <span #button>Contenido proyectado</span>
  </calculator-button>`,
})
class TestHostComponent {}

describe('CalculatorButtonComponent', () => {
  let fixture: ComponentFixture<CalculatorButtonComponent>;
  let compiled: HTMLElement;
  let component: CalculatorButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  beforeAll(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it('should create the component', () => {
    console.log(fixture.nativeElement);

    expect(component).toBeTruthy();
  });

  it('should w-1/4 doubleSize is false', () => {
    const hostCssClasses = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-1/4');
    expect(hostCssClasses).not.toContain('w-2/4');
    expect(component.isDoubleSize()).toBeFalse();
  });

  it('should w-2/4 doubleSize is true', () => {
    fixture.componentRef.setInput('isDoubleSize', true);
    fixture.detectChanges();

    const hostCssClasses = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-2/4');
    expect(hostCssClasses).not.toContain('w-1/4');
    expect(component.isDoubleSize()).toBeTrue();
  });

  it('should emit onClick when button is clicked', () => {
    spyOn(component.onClick, 'emit');

    component.handleClick();

    expect(component.onClick.emit).toHaveBeenCalledWith('');
  });

  it('should set isPressed to true when keyboardPressStyle is called with matching key', (done) => {
    component.contentValue()!.nativeElement.textContent = '1';
    component.keyboardPressStyle('1');

    expect(component.isPressed()).toBeTrue();

    setTimeout(() => {
      expect(component.isPressed()).toBeFalse();
      done();
    }, 101);
  });

  it('should set isPressed to true when keyboardPressStyle is called with not matching key', () => {
    component.contentValue()!.nativeElement.textContent = '1';
    component.keyboardPressStyle('2');

    expect(component.isPressed()).toBeFalse();
  });

  it('should display a projected content', () => {
    const textHostComponent = TestBed.createComponent(TestHostComponent);

    const compiled = textHostComponent.nativeElement as HTMLDivElement;

    const projected = compiled.querySelector('.underline');

    expect(projected).not.toBeNull();
    expect(projected!.textContent).toContain('Contenido proyectado');
  });
});
