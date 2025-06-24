# toggle-relative-line-num

Toggles relative line numbers in VS Code, useful for users of Vim mode or anyone
who prefers switching between relative and absolute line numbers.

## Features

- Toggle between `relative` and `on` (absolute) line numbers globally with a
  single command.
- Default keybinding: `Ctrl+Alt+L` (when editor text is focused).
- Command palette: `Toggles Relative Line Number`.

## Usage

1. Press `Ctrl+Alt+L` in the editor to toggle line numbers between relative and
   absolute.
2. Or, open the Command Palette (`Ctrl+Shift+P`), search for
   `Toggles Relative Line Number`, and run the command.

## Requirements

- Visual Studio Code v1.101.0 or higher.

## Extension Settings

This extension does not contribute any settings.

## Known Issues

- The toggle applies globally to all editors.
- Only toggles between `relative` and `on` (absolute) line numbers.

## Release Notes

See [CHANGELOG.md](./CHANGELOG.md) for details.

---

### Development

- Run `npm install` to install dependencies.
- Use `npm run watch` to compile in watch mode.
- Press `F5` to launch an Extension Development Host.
- Tests are in `src/test/extension.test.ts`.

---

**Enjoy using toggle-relative-line-num!**
