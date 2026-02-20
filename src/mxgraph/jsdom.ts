import { JSDOM } from "jsdom";

const dom = new JSDOM();

(global as any).window = dom.window;
global.document = window.document;
global.XMLSerializer = window.XMLSerializer
Object.defineProperty(global, 'navigator', { value: window.navigator, writable: true, configurable: true });
(global as any).location = window.location;
global.DOMParser = window.DOMParser;
