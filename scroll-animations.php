<?php
/**
 * Plugin Name:       Scroll Animations
 * Description:       Uses Locomotive Scroll attributes to blocks to create smooth scrolling and parallax effects.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:          1.0.0
 * Author:            Melissa Hiatt
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       scroll-animations
 */

 define( 'DCS_SCROLL_ANIMATIONS_VERSION', '0.1.0' );


function locomotive_styles(){
	wp_enqueue_style('locomotive', plugin_dir_url(__FILE__).'css/locomotive.css', DCS_SCROLL_ANIMATIONS_VERSION );
	wp_enqueue_style('animations', plugin_dir_url(__FILE__).'css/animations.css', DCS_SCROLL_ANIMATIONS_VERSION );

}

add_action('init', 'locomotive_styles');

//Register block
function dcs_scroll_animations_block_init() {
	//Animation Block
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/animation-block/' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/animation-filters/' );


}
add_action( 'init', 'dcs_scroll_animations_block_init' );


//Enqueue front-end scripts

function dcs_smooth_scroll(){
	wp_enqueue_script('dcs_smooth_scroll', plugin_dir_url(__FILE__).'build/index.js', array(), DCS_SCROLL_ANIMATIONS_VERSION, true );
}

add_action('wp_enqueue_scripts', 'dcs_smooth_scroll');