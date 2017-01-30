<?php


/*
 * Load assets
 */
function assets()
{
    // Load theme css
  wp_enqueue_style('mrpaulphan_theme_css', get_template_directory_uri().'/dist/screen.css');

  // Load them js
  //wp_enqueue_script( 'mrpaulphan_theme_css', get_template_directory_uri() . '/dist/screen.css');
}
add_action('wp_enqueue_scripts', 'assets');

/*
 * Custom Post type
 */
add_action( 'init', 'myWork' );
function myWork() {
	$labels = array(
		'name'               => 'Works',
		'singular_name'      => 'Work',
		'menu_name'          => 'Works',
		'name_admin_bar'     => 'Works',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Work',
		'new_item'           => 'New Work',
		'edit_item'          => 'Edit work',
		'view_item'          => 'View work',
		'all_items'          => 'All Works',
		'search_items'       => 'Search Works',
		'parent_item_colon'  => 'Parent Works:',
		'not_found'          => 'No works found.',
		'not_found_in_trash' => 'No works found in Trash.'
	);

	$args = array(
		'labels'		=> $labels,
		'public'		=> true,
		'rewrite'		=> array( 'slug' => 'work' ),
		'has_archive'   => true,
		'menu_position' => 20,
		'menu_icon'     => 'dashicons-portfolio',
		'taxonomies'		=> array( 'post_tag', 'category' ),
		'supports'      => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'comments' )
	);
	register_post_type( 'my_recipe', $args );
}

/*
 * Theme Support
 */
add_theme_support('post-thumbnails');
