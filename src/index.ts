import sa from "./sa";

console.log("nsMonitor");

interface NsMonitor {
  sa: typeof sa;
}

declare global {
  interface Window {
    nsMonitor: NsMonitor;
  }
}

export { sa };
