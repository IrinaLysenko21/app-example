export interface INote {
  id: string;
  title: string;
  body: string;
  priority: number;
}

export interface INoteWithoutId {
  title: string;
  body: string;
  priority: number;
}

export interface INotePartialData {
  title?: string;
  body?: string;
  priority?: number;
}
