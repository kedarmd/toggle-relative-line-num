# VS Code Extension Quickstart: toggle-relative-line-num

Welcome to the development guide for the **toggle-relative-line-num** extension!

This extension toggles between relative and absolute line numbers in VS Code,
which is especially useful for Vim users or anyone who prefers switching line
number modes.

## Features

- Toggle between `relative` and `on` (absolute) line numbers globally.
- Default keybinding: `Ctrl+Alt+L` (when editor text is focused).
- Command palette: `Toggles Relative Line Number`.

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start development mode:**

   ```sh
   npm run watch
   ```

3. **Launch Extension Development Host:**
   - Press `F5` in VS Code to open a new window with the extension loaded.

## Usage

- Press `Ctrl+Alt+L` in the editor to toggle line numbers.
- Or, open the Command Palette (`Ctrl+Shift+P`), search for
  `Toggles Relative Line Number`, and run the command.

## Testing

- Tests are located in `src/test/extension.test.ts`.
- Run tests using the VS Code test runner or your preferred method.

## Project Structure

- `src/extension.ts`: Main extension activation and command logic.
- `src/test/extension.test.ts`: Extension tests.
- `README.md`: User-facing documentation.
- `CHANGELOG.md`: Release notes.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

---

**Happy coding with toggle-relative-line-num!**
