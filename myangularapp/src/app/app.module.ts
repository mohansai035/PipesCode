import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { ModifyName } from './length.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloComponent, ModifyName],
  bootstrap: [HelloComponent]
})
export class AppModule {
}

