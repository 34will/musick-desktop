import { Injectable } from "@angular/core";

import { remote } from "electron";
import * as fs from "fs";

@Injectable()
export class FileSystemService {
	public filesystem: any = fs;
}
