import { Themes } from "@geist-ui/core"

import light from "@/themes/presets/light";
import dark from "@/themes/presets/dark";

export const coolLight = Themes.createFromLight(light);

export const coolDark = Themes.createFromDark(dark);