import chroma from "chroma-js";
import colors  from './colors'
function isValidHex(hexColor: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(hexColor);
}

function hexToRGB(hex: string) {
  if (!isValidHex) {
    return "Wrong hex color value";
  }
  
  const chromaColor = chroma(hex);
  const [r, g, b] = chromaColor.rgb();
  return [r, g, b];
}

export function findNearestTailwindColor(hex: string) {
  for(const [name, hexCode] of Object.entries(colors)){
    if(hex === hexCode){
      return name;
    }
  }

  return ''
}
