export type MatchFunction = (toMatch, source) => Promise<boolean>;

export type FileOption = { storagePath: string, mimeType: Array<string>, fileSize: number };