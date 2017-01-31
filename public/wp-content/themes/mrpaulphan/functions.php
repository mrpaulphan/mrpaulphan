<?php


/*
 * Load assets
 */
function assets()
{
  // Load theme css
  wp_enqueue_style('mrpaulphan_theme_css', get_template_directory_uri().'/dist/css/screen.css');

  // Load them js
  wp_enqueue_script( 'mrpaulphan_theme_js', get_template_directory_uri() . '/dist/js/script.js');
}

add_action('wp_enqueue_scripts', 'assets');

/*
 * Custom Post type
 */
add_action( 'init', 'myProject' );
function myProject() {
	$labels = array(
		'name'               => 'Projects',
		'singular_name'      => 'Project',
		'menu_name'          => 'Projects',
		'name_admin_bar'     => 'Projects',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Project',
		'new_item'           => 'New Project',
		'edit_item'          => 'Edit work',
		'view_item'          => 'View work',
		'all_items'          => 'All Projects',
		'search_items'       => 'Search Projects',
		'parent_item_colon'  => 'Parent Projects:',
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
	register_post_type( 'projects', $args );
}

/*
 * Theme Support
 */
add_theme_support('post-thumbnails');
