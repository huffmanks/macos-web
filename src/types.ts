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

export type DockApp = {
  id: string;
  name: string;
  image: string;
};

export type WindowKey =
  | "finder"
  | "contacts"
  | "safari"
  | "photos"
  | "terminal"
  | "txtFile"
  | "imgFile";

export type Windows = Record<WindowKey, WindowState>;
export type WindowsData = Record<WindowKey, WindowData>;
export type DockApps = Omit<Record<WindowKey, DockApp>, "txtFile" | "imgFile">;
