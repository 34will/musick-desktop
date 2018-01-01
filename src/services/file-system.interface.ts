import { InjectionToken } from "@angular/core";

import { ReadStream, WriteStream } from "fs";

export interface IFileSystem
{
	FileExists(filepath: string): boolean;

	Read(filepath: string): ReadStream;

	Write(filepath: string): WriteStream;

	Delete(filepath: string): boolean;

	FolderExists(folder: string): boolean;

	CreateFolder(folder: string): boolean;

	DeleteFolder(folder: string): boolean;

	readonly HomeFolder: string;

	readonly ApplicationFolder: string;

	readonly TempFolder: string;
}

export let IFileSystemToken = new InjectionToken<IFileSystem>("i-file-system.token");
