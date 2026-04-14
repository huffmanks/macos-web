export type WindowSize = {
  height: number;
  width: number;
};

export type WindowPosition = {
  x: number;
  y: number;
};

export type WindowData = {
  id: string;
  name: string;
  size: WindowSize;
  position: WindowPosition;
  backgroundColor: string;
};

export type WindowState = {
  isOpen: boolean;
  zIndex: number;
  data: WindowData | null;
};

export type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtFile"
  | "imgFile";

export type Windows = Record<WindowKey, WindowState>;
export type WindowsData = Record<WindowKey, WindowData>;
