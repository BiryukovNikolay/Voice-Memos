export type PayloadType = {
  name: ControlName;
  value: string;
};

export type StateType = {
  description: string;
  main: string;
};

export enum ControlName {
  DESCRIPTION = 'description',
  MAIN = 'main',
}

export enum ControlType {
  TEXTAREA = 'textarea',
  INPUT = 'input',
}

export type MemoType = {
  id: string;
  description: string;
  content: string;
};
