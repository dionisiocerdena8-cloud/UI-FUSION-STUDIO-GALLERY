# UI FUSION STUDIO v5 — Motion Research & Quality Guide

Updated October 15, 2026. The Motion Lab has 26 independently authored browser motion demonstrations, raising the original gallery to 105. HTML, CSS and JS are editable and independently written—not copied from the source sites.

## Curated upstream research

| Family | Upstream projects | Platform |
| --- | --- | --- |
| Typography and scene transitions | https://github.com/motiondivision/motion · https://github.com/juliangarnier/anime | Web / React |
| Spatial 3D and art direction | https://github.com/mrdoob/three.js · https://github.com/pmndrs/react-three-fiber · https://github.com/pmndrs/drei · https://github.com/pmndrs/gltfjsx | Web / React |
| WebGL / shaders and post-processing | https://github.com/oframe/ogl · https://github.com/pmndrs/postprocessing · https://github.com/pmndrs/react-postprocessing | Web / GPU |
| Scrolling storytelling | https://github.com/darkroomengineering/lenis · https://github.com/motiondivision/motion | Web |
| Layout animation | https://github.com/formkit/auto-animate · https://github.com/syntax-syndicate/_Eldora-UI | Web / React |
| Native motion and illustrations | https://github.com/software-mansion/react-native-reanimated · https://github.com/software-mansion/react-native-gesture-handler · https://github.com/Shopify/react-native-skia | React Native / Expo |

The private plugin contains 85 curated external repository references. Links are research leads, not copied third-party code.

## Licenses and assets

Open-source still has license requirements. The authored browser demos in this repository use its own MIT license. React Bits has MIT + Commons Clause restrictions on selling or redistributing components (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md). Theatre.js core is Apache-2.0 while its editor studio is AGPL-3.0 (https://github.com/theatre-js/theatre). Do not assume runtime licenses grant rights to a separate GLB/3D model, image, texture, font, video, or animation asset.

## Creative design gate

1. Define product intent, brand, audience, and the page's one signature moment.
2. Compare two substantially different compositions, not just two accent colors.
3. Specify every effect's trigger, intention, performance cost, and reduced-motion alternative.
4. Keep normal scrolling, touch, and keyboard access intact; do not scatter effects everywhere.
5. Prefer an original art direction and legitimate imagery/models over a generic effects pile.
6. Run code, mobile, keyboard, animation, and performance checks separately.

Expo SDK 57 reference: https://docs.expo.dev/versions/v57.0.0/sdk/reanimated/ — use Expo-aligned Reanimated/Worklets via npx expo install. The six new native examples in the private plugin are syntax-checked samples, not a tested Android APK.

## Verified vs not verified

Authoring smoke checks: 26 new motion demos rendered in isolated Chromium setup and buttons were exercised without uncaught JS errors in those smoke runs; source and registry validators passed. Full end-to-end coverage, Android runtime, GPU thermals, multi-device FPS and successful GitHub Pages deployment have NOT been verified.