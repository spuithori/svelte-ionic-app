import { config } from "@ionic/core/dist/collection/global/config.js";
import { w as writable, r as readable } from "./index2.js";
const core = "";
const normalize = "";
const structure = "";
const typography = "";
const padding = "";
const floatElements = "";
const textAlignment = "";
const textTransformation = "";
const flexUtils = "";
const display = "";
let _win;
let _doc;
const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win) => {
  if (typeof window !== "undefined") {
    win = window;
    _win = window;
  }
  if (typeof document !== "undefined") {
    _doc = document;
  }
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = (win) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods == null ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
  const width2 = win.innerWidth;
  const height2 = win.innerHeight;
  const smallest = Math.min(width2, height2);
  const largest = Math.max(width2, height2);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
const isTablet = (win) => {
  const width2 = win.innerWidth;
  const height2 = win.innerHeight;
  const smallest = Math.min(width2, height2);
  const largest = Math.max(width2, height2);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
const isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
const isCapacitorNative = (win) => {
  const capacitor = win["Capacitor"];
  return !!(capacitor == null ? void 0 : capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => {
  var _a;
  return !!(((_a = win.matchMedia) == null ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
};
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) == null ? void 0 : _a.call(win, query).matches;
};
const PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
readable(
  typeof window !== "undefined" ? (window.navigator.onLine ? "on" : "off") + "line" : "",
  (set) => {
    const eventFunction = () => {
      if (typeof window !== "undefined")
        set((window.navigator.onLine ? "on" : "off") + "line");
    };
    if (typeof window !== "undefined") {
      window.addEventListener("offline", eventFunction);
      window.addEventListener("online", eventFunction);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("offline", eventFunction);
        window.removeEventListener("online", eventFunction);
      }
    };
  }
);
const readableEventFactory = (args) => {
  const { defaultvalue, event, eventAttr, listenerComponent } = args;
  return readable(
    defaultvalue,
    (set) => {
      const eventFunction = (event2) => {
        if (eventAttr)
          set(event2[eventAttr]);
        else
          set(event2);
      };
      listenerComponent.addEventListener(event, eventFunction);
      return () => {
        listenerComponent.removeEventListener(event, eventFunction);
      };
    }
  );
};
let resize = readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
if (typeof window !== "undefined") {
  resize = readableEventFactory({ defaultvalue: "", event: "resize", eventAttr: "timeStamp", listenerComponent: window });
  readableEventFactory({ defaultvalue: "", event: "ionKeyboardDidShow", eventAttr: void 0, listenerComponent: window });
  readableEventFactory({ defaultvalue: "", event: "ionKeyboardDidHide", eventAttr: void 0, listenerComponent: window });
}
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
let keydown = readable("", (set) => {
  return () => {
  };
});
if (typeof document !== "undefined") {
  readableEventFactory({ defaultvalue: "", event: "resume", eventAttr: void 0, listenerComponent: document });
  readableEventFactory({ defaultvalue: "", event: "pause", eventAttr: void 0, listenerComponent: document });
  readableEventFactory({ defaultvalue: "", event: "ionBackButton", eventAttr: void 0, listenerComponent: document });
  keydown = readableEventFactory({ defaultvalue: "", event: "keydown", eventAttr: "key", listenerComponent: document });
}
const height = () => {
  if (_win)
    return _win.innerHeight;
  return 0;
};
const width = () => {
  if (_win)
    return _win.innerWidth;
  return 0;
};
const url = () => {
  if (_win)
    return _win.location.href;
  return "";
};
const isPortrait = () => {
  var _a;
  if (_win)
    return (_a = _win.matchMedia) == null ? void 0 : _a.call(_win, "(orientation: portrait)").matches;
  return false;
};
const isLandscape = () => {
  return !isPortrait();
};
const getQueryParam = (key) => {
  if (_win)
    return readQueryParam(_win.location.href, key);
  return null;
};
const isRTL = () => {
  if (_doc)
    return _doc.dir === "rtl";
};
const is = (platformName) => {
  if (_win)
    return isPlatform(_win, platformName);
  return false;
};
const readQueryParam = (url2, key) => {
  key = key.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  const results = regex.exec(url2);
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
const prefersDark = writable(
  typeof window !== "undefined" ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches : ""
);
if (typeof window !== "undefined")
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    prefersDark.set(e.matches ? true : false);
  });
export {
  isPortrait as a,
  isLandscape as b,
  is as c,
  isPlatform as d,
  getQueryParam as e,
  getPlatforms as g,
  height as h,
  isRTL as i,
  keydown as k,
  prefersDark as p,
  resize as r,
  url as u,
  width as w
};
