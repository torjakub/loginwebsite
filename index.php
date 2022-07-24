<?php
get_header();
?>

<?php the_content(); ?>

<?php
echo esc_html( get_template_part( 'template-parts/pagination', 'infinite-scroll' ) );
?>

<?php
get_footer();
