import type { DockApps, Windows, WindowsData } from "@/types";

export const INITIAL_Z_INDEX = 300;
export const DEFAULT_POSITION_X = 10;
export const DEFAULT_POSITION_Y = 34;

export const INITIAL_WINDOWS: Windows = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contacts: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtFile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgFile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  trash: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export const WINDOWS_DATA: WindowsData = {
  finder: {
    id: "1981541a-35aa-40e3-9dac-bf00ad3d6610",
    name: "Finder",
    size: {
      height: 200,
      width: 400,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#0000ff",
  },
  contacts: {
    id: "ba0a80e0-0b2b-4b62-b31c-79d604ef318a",
    name: "Contacts",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#00ff00",
  },
  safari: {
    id: "5af832c8-a5e4-41ef-819c-02d84cde4e91",
    name: "Safari",
    size: {
      height: 400,
      width: 700,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#ff0000",
  },
  photos: {
    id: "55c14895-4588-429c-a79f-4df520afc7ed",
    name: "Photos",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#000000",
  },
  terminal: {
    id: "4f026e9e-09e9-49c9-85d8-3fe5ac78eda4",
    name: "Terminal",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#000000",
  },
  txtFile: {
    id: "6dbb39cb-7a21-4841-a314-82eecc012cb3",
    name: "txtFile",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#000000",
  },
  imgFile: {
    id: "928edf84-c20b-44da-8bb2-5a8aa03f6710",
    name: "imgFile",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#000000",
  },
  trash: {
    id: "9a9b6a10-d43b-4d5f-aa59-70ab87b9fcf8",
    name: "Trash",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: DEFAULT_POSITION_X,
      y: DEFAULT_POSITION_Y,
    },
    backgroundColor: "#000000",
  },
};

export const DOCK_APPS: DockApps = {
  finder: {
    id: "e761dc83-2bb9-4f83-a0dd-b991af7561eb",
    name: "Finder",
    image: "/apps/finder.png",
  },
  terminal: {
    id: "2e8e3b01-9974-425d-ba64-7004dc30585a",
    name: "Terminal",
    image: "/apps/terminal.png",
  },
  safari: {
    id: "d7c9cb8d-b51c-41d2-ac5f-e93d7a662cd4",
    name: "Safari",
    image: "/apps/safari.png",
  },
  photos: {
    id: "c06083ff-7a76-4b3f-a11f-4790be1c99e9",
    name: "Photos",
    image: "/apps/photos.png",
  },
  contacts: {
    id: "031437c5-af90-45e8-93b3-e36c711be30c",
    name: "Contacts",
    image: "/apps/contacts.png",
  },
  trash: {
    id: "b133d9d2-bdd9-4762-9465-508080b31244",
    name: "Trash",
    image: "/apps/trash.png",
  },
};
