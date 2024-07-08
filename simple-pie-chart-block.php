<?php
/**
 * Plugin Name:       Simple Pie Chart Block for WP
 * Description:       Simple Pie Chart Block allows you to create elegant and minimal pie charts using the ChartJS library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.4
 * Author:            Chee Studio
 * Author URI:        https://chee.studio
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-simple-pie-chart-block
 *
 * @package WP Simple Pie Chart Block
 */

 if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

function simple_pie_chart_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'simple_pie_chart_block_init' );
