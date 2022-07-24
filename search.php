<?php
get_header();
?>
	<h1><?= esc_html( __( 'Search page', 'dp' ) ); ?></h1>
	<strong><?= esc_html( __( 'Search for: ', 'dp' ) ); ?></strong>
<?php
echo get_search_query();
?>
	<br>
	<br>
	<br>
	<div>
		<?php
		while ( have_posts() ) {
			the_post();
			echo esc_html( get_template_part( 'template-parts/archive', 'content-row' ) );
		}

		echo esc_html( get_template_part( 'template-parts/pagination', 'infinite-scroll' ) );
		?>
	</div>
<?php
get_footer();
