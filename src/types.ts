export type WindowSize = {
  height: number;
  width: number;
};

export type WindowPosition = {
  x: number;
  y: number;
};

export type WindowId = string;

export type WindowData = {
  id: WindowId;
  appId: DockAppId;
  size: WindowSize;
  position: WindowPosition;
  isMinimized: boolean;
  isMaximized: boolean;
  createdAt: number;

  lastSize?: WindowSize;
  lastPosition?: WindowPosition;
};

export type DockAppId = "finder" | "contacts" | "safari" | "photos" | "terminal" | "trash";

export type DockApp = {
  id: DockAppId;
  name: string;
  image: string;
  allowMultiple: boolean;
};

export type Stack = Array<WindowId>;

export type Windows = Record<WindowId, WindowData>;
export type DockApps = Record<DockAppId, DockApp>;

export type InputWindowData = Omit<WindowData, "id" | "createdAt" | "isMinimized" | "isMaximized">;
