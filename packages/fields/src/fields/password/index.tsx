/**
 * WordPress dependencies
 */
import type { Field } from '@wordpress/dataviews';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import type { BasePost } from '../../types';
import PasswordEdit from './edit';

const passwordField: Field< BasePost > = {
	id: 'password',
	label: __( 'Password' ),
	getValue: ( { item } ) => item.password,
	Edit: PasswordEdit,
	enableSorting: false,
	enableHiding: false,
	isVisible: ( item ) => item.status !== 'private',
};

export default passwordField;
