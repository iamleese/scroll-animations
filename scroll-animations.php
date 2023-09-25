<?php
/**
 * Plugin Name:       Scroll Animations
 * Description:       Uses Locomotive Scroll attributes to blocks to create smooth scrolling and parallax effects.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.3
 * Author:            Melissa Hiatt
 * Author URI:        https://designcodespace.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       scroll-animations
 */

 define( 'DCS_SCROLL_ANIMATIONS_VERSION', '1.0.3' );
 define( 'PLUGIN_NAME', 'dcs-scroll-animations');


function locomotive_styles(){
	wp_enqueue_style('locomotive', plugin_dir_url(__FILE__).'css/locomotive.css', DCS_SCROLL_ANIMATIONS_VERSION );
	//wp_enqueue_style('animations', plugin_dir_url(__FILE__).'css/animations.css', DCS_SCROLL_ANIMATIONS_VERSION );

}

add_action('init', 'locomotive_styles');

//Register block
function dcs_scroll_animations_block_init() {
	//Animation Block
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/animation-block/' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'build/animation-filters/' );


}
add_action( 'init', 'dcs_scroll_animations_block_init' );

//Add Settings
require_once 'includes/settings.php';


//Enqueue front-end scripts

function dcs_smooth_scroll_scripts(){

	
	wp_enqueue_script('dcs_smooth_scroll', plugin_dir_url(__FILE__).'build/index.js', array(), DCS_SCROLL_ANIMATIONS_VERSION, true );

	$option = get_option('dcs_scroll_animations_container');
	$container = $option ? $option : '.wp-site-blocks'; //set default

	$scrollSettings = ['container' => $container];

	wp_localize_script( 'dcs_smooth_scroll', 'scrollSettings', $scrollSettings );

}

add_action('wp_enqueue_scripts', 'dcs_smooth_scroll_scripts', 30);

