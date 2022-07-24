<?php
get_header();
?>
	<div>
		<?php
		while ( have_posts() ) {
			the_post();
			?>
			<h1>
				<?php the_title(); ?>
			</h1>
			<div>
				<?php echo wp_get_attachment_image( get_post_thumbnail_id() ); ?>
			</div>
			<?php
			echo esc_html( get_template_part( 'template-parts/metabox-details' ) );
			?>
			<div>
				<?php the_content(); ?>
			</div>
			<?php
		}
		?>
	</div>
<?php echo esc_html( get_template_part( 'template-parts/pagination' ) ); ?>
	<div>
		<?php previous_post_link(); ?> | <?php next_post_link(); ?>
	</div>
<?php
get_footer();
