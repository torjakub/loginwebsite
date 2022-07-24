<?php
/**
 * $title
 * $description
 */


if ( ! empty( $block['id'] ) ) {
	extract( get_fields( $block['id'] ) );
} else {
	extract( $block['data'] );
}
?>

<section>
	<?php
	if ( ! empty( $title ) ) :
		?>
		<h1><?= esc_html( $title ); ?></h1>
	<?php endif; ?>

	<?php
	if ( ! empty( $description ) ) :
		?>
		<div><?= esc_html( $description ); ?></div>
	<?php endif; ?>
</section>
