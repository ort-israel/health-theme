<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function everest_child_scripts() {

    /* Force css reload when file change. For some reason the site crushes on mobile without it */
    $css_update_time = filemtime( get_stylesheet_directory().'/assets/css/style.css' );
    wp_dequeue_style( 'pojo-style' );
    wp_enqueue_style( 'pojo-style', get_stylesheet_directory_uri().'/assets/css/style.css', array('pojo-a11y'), $css_update_time );

    wp_enqueue_script( 'scripts', get_theme_file_uri() . '/assets/js/scripts.js', array( 'jquery' ), time(), true );

    wp_localize_script( 'scripts', 'everest_child',
        array(
            'url' => get_theme_file_uri()
        )
    );


}
add_action( 'wp_enqueue_scripts', 'everest_child_scripts' );

function my_child_theme_setup() {
    load_child_theme_textdomain( 'everest-child', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'my_child_theme_setup' );