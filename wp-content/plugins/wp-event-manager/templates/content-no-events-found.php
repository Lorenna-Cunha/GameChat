<?php if ( defined( 'DOING_AJAX' ) ) : ?>
	<div class="no_event_listings_found wpem-alert wpem-alert-danger ">
		<?php _e( 'There are no events matching your search.', 'wp-event-manager' ); ?>
	</div>
<?php else : ?>
	<div class="no_event_listings_found wpem-alert wpem-alert-danger wpem-mb-0">
		<?php _e( 'There are currently no events.', 'wp-event-manager' ); ?>
	</div>
<?php endif; ?>