<?php
get_header();
?>
<?php
$posts_args = [];
while ( have_posts() ) {
	the_post();

	$thumbnail_url = get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' )
		? get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' )
		: get_template_directory_uri() . '/assets/img/placeholder.jpg';

	array_push(
		$posts_args,
		[
			'id'        => get_the_ID(),
			'title'     => get_the_title(),
			'thumbnail' => $thumbnail_url,
			'excerpt'   => get_the_excerpt(),
			'permalink' => get_permalink(),
		]
	);
}
echo esc_html( get_template_part( 'template-parts/archive', 'content-rows', $posts_args ) );
echo esc_html( get_template_part( 'template-parts/pagination', 'infinite-scroll' ) );
?>
<?php
get_footer();
