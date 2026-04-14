import type { Windows, WindowsData } from "@/types";

export const INITIAL_Z_INDEX = 1000;

export const INITIAL_WINDOWS: Windows = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
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
      x: 20,
      y: 600,
    },
    backgroundColor: "#0000ff",
  },
  contact: {
    id: "ba0a80e0-0b2b-4b62-b31c-79d604ef318a",
    name: "Contacts",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: 350,
      y: 600,
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
      x: 20,
      y: 300,
    },
    backgroundColor: "#ff0000",
  },
  resume: {
    id: "85e0e874-b9dd-4159-a399-93ed0edd9970",
    name: "Resume",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: 350,
      y: 600,
    },
    backgroundColor: "#000000",
  },
  photos: {
    id: "55c14895-4588-429c-a79f-4df520afc7ed",
    name: "Photos",
    size: {
      height: 200,
      width: 300,
    },
    position: {
      x: 350,
      y: 600,
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
      x: 350,
      y: 600,
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
      x: 350,
      y: 600,
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
      x: 350,
      y: 600,
    },
    backgroundColor: "#000000",
  },
};
