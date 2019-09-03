import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TestsolWebPartComponent } from './testsol-web-part/testsol-web-part.component';

@NgModule({
  declarations: [
    TestsolWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [TestsolWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(TestsolWebPartComponent, { injector: this.injector });
    customElements.define('app-testsol-web-part', el);
  }
}
