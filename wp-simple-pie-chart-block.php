<?php
/**
 * Plugin Name:       WP Simple Pie Chart Block
 * Description:       A block for creating simple and easy pie charts
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

function wp_simple_pie_chart_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wp_simple_pie_chart_block_init' );
