// Exporte le QR code du stand en SVG et PNG (dossier qr/).
// Usage : PUBLIC_SITE_URL=https://... node scripts/qr.mjs
import QRCode from "qrcode";
import { mkdirSync, writeFileSync } from "node:fs";

const site = (process.env.PUBLIC_SITE_URL ?? "https://voile.eclipsedetoile.com").replace(/\/$/, "");
const target = `${site}/?src=stand`;
mkdirSync("qr", { recursive: true });
const opts = { margin: 2, errorCorrectionLevel: "Q", color: { dark: "#2e2b1f", light: "#ffffff" } };
writeFileSync("qr/qr-voile-du-jour.svg", await QRCode.toString(target, { ...opts, type: "svg" }));
await QRCode.toFile("qr/qr-voile-du-jour.png", target, { ...opts, width: 1600 });
console.log(`QR code vers ${target} écrit dans qr/`);
