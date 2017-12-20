import { Component } from '@angular/core';

import { FileSystemService } from '../services/file-system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	constructor (service: FileSystemService) {
		debugger;
	}
}
