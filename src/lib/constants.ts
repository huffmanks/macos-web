import type { DockApps } from "@/types";

export const INITIAL_Z_INDEX = 300;
export const NAVBAR_HEADER_HEIGHT = 36;
export const DEFAULT_WINDOW_POSITION = {
  x: 10,
  y: 10,
};
export const DEFAULT_WINDOW_SIZE = {
  height: 200,
  width: 400,
};

export const DOCK_APPS: DockApps = {
  finder: {
    id: "finder",
    name: "Finder",
    image: "/apps/finder.png",
    allowMultiple: false,
  },
  terminal: {
    id: "terminal",
    name: "Terminal",
    image: "/apps/terminal.png",
    allowMultiple: false,
  },
  safari: {
    id: "safari",
    name: "Safari",
    image: "/apps/safari.png",
    allowMultiple: false,
  },
  photos: {
    id: "photos",
    name: "Photos",
    image: "/apps/photos.png",
    allowMultiple: false,
  },
  contacts: {
    id: "contacts",
    name: "Contacts",
    image: "/apps/contacts.png",
    allowMultiple: false,
  },
  trash: {
    id: "trash",
    name: "Trash",
    image: "/apps/trash.png",
    allowMultiple: false,
  },
};
