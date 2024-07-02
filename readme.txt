# === Block Editor Pie Chart === #
Author:            Chee Studio
Author URI:        https://chee.studio
Tags:              block, pie chart, chartjs
Tested up to:      6.1
Stable tag:        1.4
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

## Description

WP Simple Pie Chart Block is a WordPress plugin that provides a Gutenberg block for creating simple and customizable pie charts. This block allows users to add, edit, and visualize pie chart slices with ease.

## Features

- Create and customize pie charts directly within the WordPress block editor.
- Add, update, and remove slices with specific titles, values, percentages, and colors.
- Toggle the display of legends and customize their styles and background colors.
- Choose between Pie and Doughnut chart types.
- Responsive and accessible design.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/wp-simple-pie-chart-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.

## Usage

1. In the WordPress block editor, add the "Simple Pie Chart" block to your post or page.
2. Use the block settings to customize your pie chart:
   - Add slices with titles, values, percentages, and colors.
   - Toggle the legend display and customize its style and background color.
   - Choose between Pie and Doughnut chart types.
   - Adjust the chart width.

## Development

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
2. Navigate to the plugin directory.
3. Run `npm install` to install the dependencies.

### Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the plugin for production.
- `npm run format`: Format the code.
- `npm run lint:css`: Lint the CSS files.
- `npm run lint:js`: Lint the JavaScript files.
- `npm run packages-update`: Update the packages.
- `npm run plugin-zip`: Create a zip file of the plugin.

### File Structure

- `src/`: Contains the source code for the block.
  - `components/`: Contains React components used in the block.
  - `lib/`: Contains utility functions for the block.
  - `style.scss`: Contains the styles for the block.
  - `editor.scss`: Contains the styles for the block editor.
  - `index.js`: Registers the block with the block editor.
  - `edit.js`: Contains the block's edit component.
  - `view.js`: Contains the block's view component.
  - `block.json`: Contains the block metadata.
  - `render.php`: Contains the server-side rendering logic for the block.


## License

This plugin is licensed under the GPL-2.0-or-later license. See the [LICENSE](https://www.gnu.org/licenses/gpl-2.0.html) file for more information.