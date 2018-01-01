import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';

import { IFileSystemToken } from './services/file-system.interface';
import { FileSystemService } from './services/file-system.service';

const components: any[] = [AppComponent];
const providers: any[] = [{ provide: IFileSystemToken, useClass: FileSystemService }];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
