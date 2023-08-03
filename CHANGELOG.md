<!--
IMPACTO
### Added: for new features.
### Changed: for changes in existing functionality.
### Deprecated: for soon-to-be removed features.
### Removed: for now removed features.
### Fixed: for any bug fixes.
### Security: in case of vulnerabilities.

Versionamiento
A.B.C

A: Cambio sustancial en la estructura o en la manera de operar la aplicación.
B: Nuevas características, nuevas funcionalidades y conjunto de grandes correcciones.
C: Correcciones de bugs de la serie B.
-->

## [2.1.1] 03/08/2023

### Fixed

- Fixed bug with dark mode where dark mode was set by default, but the toggle theme icon was set to light mode.

## [2.1.0] 03/08/2023

### Added

- Added 404 page.

### Changed

- Added typescript missing types in some functions and components.

### Fixed

- Fixed typescript error with prismjs.

## [2.0.0] 02/08/2023

### Added

- Added error details.
- Added button to toggle between JSON to String and String to JSON.
- Added toolbar with the following buttons:
  - Beautify: In JSON to String mode, formats JSON.
  - Uglify: In JSON to String mode, removes indentation and extra spaces.
  - Clear: Deletes content.
  - Copy: Copies content to clipboard.
- Added JSON linting.
- Added About page.

### Changed

- Implemented new UI design.
- Changed title from "Simple JSON Stringify" to "Simple JSON Stringifier".
- Improved mobile version.

### Fixed

- Fixed bug that causes a flash of light mode when page loads and dark mode is enabled.

## [1.1.0] 08/04/2023

### Added

- Added button to toggle light/dark mode.

## [1.0.0] 08/04/2023

### Added

- Added feature to convert a JSON formated string to a valid stringified JSON.
