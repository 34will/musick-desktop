
import { IFileSystem, IFileSystemToken } from '../services/file-system.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	constructor(@Inject(IFileSystemToken) service: IFileSystem) {
		debugger;
	}
}
