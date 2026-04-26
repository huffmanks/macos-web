import type { DragControls } from "motion/react";

import type { IconName } from "@/components/icons";

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
  size?: WindowSize;
  position?: WindowPosition;
};

export type Stack = Array<WindowId>;

export type Windows = Record<WindowId, WindowData>;
export type DockApps = Record<DockAppId, DockApp>;

export type InputWindowData = Omit<WindowData, "id" | "createdAt" | "isMinimized" | "isMaximized">;

export interface AppContentComponentProps {
  windowId: WindowId;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  dragControls: DragControls;
}

export type AppComponents = {
  Content: React.ComponentType<object>;
};

export type AppRegistry = {
  default: AppComponents;
} & Partial<Record<DockAppId, AppComponents>>;

export type FileKind = "Document" | "PNG image" | "JPG image" | "PDF Document" | "Folder";
export type LastActiveDirectory = "Documents" | "Downloads";

export type FinderFile = {
  name: string;
  dateModified: string;
  size: string;
  kind: FileKind;
};

export type FinderSidebarButton = {
  name: LastActiveDirectory;
  icon: IconName;
};
