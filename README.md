# Hunter Gatherer Game

![Infinite Tech splash logo](logo.png)

A small browser canvas game recovered from the Replit folder originally named
`game`. Based on the sprites and gameplay, this appears to be the hunter-gatherer
presentation game: move a character around a forest, hunt deer, and place blocks
as simple barriers.

## What It Does

- Uses an HTML canvas for rendering.
- Lets the player move with the arrow keys.
- Spawns wandering deer across the map.
- Counts deer hunted until the player reaches `60`.
- Draws trees/bushes and placeable blocks.
- Shows a splash screen with the `Infinite Tech` logo.

## Controls

- Arrow keys: move the player.
- Space: place a block/barrier.

## Project Shape

The game is intentionally small and early. `script.js` contains the gameplay
loop, sprite movement, deer collision checks, and win screen. The PNG files are
the preserved game assets.

## Date Notes

Replit did not export true version history, so commits use preserved file
modified times:

- `2021-10-04`: earliest preserved style placeholder.
- `2021-11-06`: deer and player sprites.
- `2021-11-07`: tree, block, and splash logo assets.
- `2021-11-10`: main gameplay script.
- `2022-09-28`: Replit config.
- `2024-04-13`: later HTML wrapper.

These dates show when files were last modified, not exact original creation
times.

## Recovery Notes

The local Replit `.config` directory was omitted because it is editor/runtime
state. No secrets were found in the preserved project files.
