import { Injectable } from "@angular/core";

import { remote } from "electron";
import * as fs from "fs";
import * as os from "os";

import { IFileSystem } from "./file-system.interface";

@Injectable()
export class FileSystemService implements IFileSystem
{
	public FileExists(filepath: string): boolean
	{
		return fs.existsSync(filepath);
	}

	public Read(filepath: string): fs.ReadStream
	{
		return fs.createReadStream(filepath);
	}

	public Write(filepath: string): fs.WriteStream
	{
		return fs.createWriteStream(filepath);
	}

	public Delete(filepath: string): boolean
	{
		fs.unlinkSync(filepath);
		return true;
	}

	public FolderExists(folder: string): boolean
	{
		return this.FileExists(folder);
	}

	public CreateFolder(folder: string): boolean
	{
		if (!this.FolderExists(folder))
			fs.mkdirSync(folder);

		return true;
	}

	public DeleteFolder(folder: string): boolean
	{
		if (this.FolderExists(folder))
			fs.rmdirSync(folder);

		return true;
	}

	// ----- Properties ----- //

	public get HomeFolder(): string
	{
		return remote.process.env.HOME;
	}

	public get ApplicationFolder(): string
	{
		return remote.process.env.APPDATA || (remote.process.env.HOME + (remote.process.platform == 'darwin' ? '/Library/Preferences' : '.local/share'));
	}

	public get TempFolder(): string
	{
		return os.tmpdir();
	}
}
