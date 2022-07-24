<?php

/**
 * Translations definition
 */
class Translation {
	function __construct() {
		add_action( 'after_setup_theme', [ $this, 'load_theme_translation' ] );
	}

	/**
	 * Load translations for the theme
	 */
	function load_theme_translation() {
		load_theme_textdomain( 'dp', get_stylesheet_directory_uri() . '/languages' );
	}
}
