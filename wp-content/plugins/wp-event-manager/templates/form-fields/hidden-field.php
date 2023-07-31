<input type="hidden" class="input-text" name="<?php echo esc_attr( isset( $field['name'] ) ? $field['name'] : $key ); ?>"  id="<?php echo isset( $field['id'] ) ? esc_attr( $field['id'] ) :  esc_attr( $key ); ?>" attribute="<?php echo esc_attr( isset( $field['attribute'] ) ? $field['attribute'] : '' ); ?>"  value="<?php echo esc_attr(isset( $field['value'] ) ? esc_attr( $field['value'] ) : ''); ?>" />