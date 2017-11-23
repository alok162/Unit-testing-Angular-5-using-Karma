import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import  { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;
  
  beforeEach(async(()=> {
  TestBed.configureTestingModule({
  declarations : [CounterComponent]
  }).compileComponents();
  }));

beforeEach(()=> {
  fixture = TestBed.createComponent(CounterComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  debugElement = fixture.debugElement.query(By.css('p'));
  htmlElement = debugElement.nativeElement;
});


it('should isplay the number on screen, after being incremented', () => {
  component.increment();
  fixture.detectChanges();
  expect(htmlElement.textContent).toEqual('Number:2');

})


});
