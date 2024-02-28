import {
  type HsvaColor,
  hexToHsva as _hexToHsva,
  hsvaToHex,
  hsvaToHexa,
  hsvaToHsla,
  hsvaToRgbString as _hsvaToRgbString,
  hsvaToRgba,
} from "@uiw/color-convert";

/**
 * A simple utility function to delay the execution of a promise.
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function hexToHsva(hex: string) {
  return _hexToHsva(hex);
}

export function hsvaToHexString(hsva: HsvaColor) {
  return hsvaToHex(hsva);
}

export function hsvaToHexaString(hsva: HsvaColor) {
  return hsvaToHexa(hsva);
}

export function hsvaToRgbString(hsva: HsvaColor) {
  return _hsvaToRgbString(hsva);
}

export function hsvaToRgbaString(hsva: HsvaColor) {
  const rgba = hsvaToRgba(hsva);
  return `rgba(${Math.round(rgba.r)}, ${Math.round(rgba.g)}%, ${Math.round(
    rgba.b,
  )}%, ${Number.parseFloat(rgba.a.toFixed(2))})`;
}

export function hsvaToHslaString(hsva: HsvaColor) {
  const hsla = hsvaToHsla(hsva);
  return `hsla(${Math.round(hsla.h)}, ${Math.round(hsla.s)}%, ${Math.round(
    hsla.l,
  )}%, ${Number.parseFloat(hsla.a.toFixed(2))})`;
}
