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
