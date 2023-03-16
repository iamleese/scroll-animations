<?php
/**
 * Plugin Name:       Scroll Animations
 * Description:       Uses Locomotive Scroll attributes to blocks to create smooth scrolling and parallax effects.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Melissa Hiatt
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       scroll-animations
 */

 define( 'DCS_SCROLL_ANIMATIONS_VERSION', '0.1.0' );



//REGISTER META
function post_animations_meta(){
	$args = ['type' => 'boolean',
			'single' => 'true',
			'show_in_rest' => 'true'
			];

	register_post_meta('', 'smooth_scroll', $args );
}

add_action('init', 'post_animations_meta');

//ENQUEUE SCRIPTS
function dcs_scroll_animations() {
	wp_enqueue_script('smooth-scrolling', plugin_dir_url(__FILE__).'build/index.js', [ 'wp-edit-post' ], DCS_SCROLL_ANIMATIONS_VERSION, false);
}

add_action('enqueue_block_editor_assets', 'dcs_scroll_animations');

function locomotive_styles(){
	wp_enqueue_style('locomotive', plugin_dir_url(__FILE__).'css/locomotive.css', DCS_SCROLL_ANIMATIONS_VERSION );
}

add_action('init', 'locomotive_styles');

//REGISTER BLOCK
function dcs_scroll_animations_block_init() {
	//Animation Block
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/animation-block/' );

}
add_action( 'init', 'dcs_scroll_animations_block_init' );
