<?php
/**
 * Plugin Settings
 */

function dcs_add_settings_page() {
    add_options_page( 'Smooth Scrolling Settings', 'Scroll Animations', 'manage_options', 'dcs-scroll-animations', 'dcs_render_settings_page' );
}
add_action( 'admin_menu', 'dcs_add_settings_page' );


function dcs_render_settings_page() {
    ?>
    <h1><?php echo __('Scroll Animations Settings'); ?></h1>
    <form action="options.php" method="post">
        <?php 
        settings_fields( 'dcs_scroll_animations_settings');
        do_settings_fields( 'container_settings', 'dcs_scroll_animations_container_section');
        do_settings_sections( 'dcs_scroll_animations' ); ?>
        <input name="submit" class="button button-primary" type="submit" value="<?php esc_attr_e( 'Save' ); ?>" />
    </form>
    <?php
}

function dcs_scroll_animations_register_settings() {
    register_setting( 'dcs_scroll_animations_settings', 'dcs_scroll_animations_container',);
    add_settings_section( 'container_settings',
                         'Scroll Container Settings',
                         'dcs_scroll_animations_section_header',
                         'dcs_scroll_animations' );

    add_settings_field( 'dcs_scroll_animations_settings',
                        'Container Selector',
                        'dcs_scroll_animations_container_settings_cb',
                        'dcs_scroll_animations',
                        'container_settings' );
 
}
add_action( 'admin_init', 'dcs_scroll_animations_register_settings' );



function dcs_scroll_animations_section_header() {
    echo '<p>'.__('This setting allows you to set a specific scroll container throughout the website.<br />
    It is especially useful when you have fixed headers and navigation.<br />
    If the scroll container is not specified, the default scroll container will be ".wp-site-blocks".', PLUGIN_NAME).'</p>';
}

function dcs_scroll_animations_container_settings_cb() {
    $option = get_option( 'dcs_scroll_animations_container' );
    $container = $option ? $option : '.wp-site-blocks';
    ?>
    <input id='dcs_scroll_animations_container_settings' name='dcs_scroll_animations_container' type='text' value="<?php echo $container; ?>"  />
<?php 
}
