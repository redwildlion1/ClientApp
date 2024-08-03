import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CategoriiModule } from './categorii/categorii/categorii.module';

@NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
