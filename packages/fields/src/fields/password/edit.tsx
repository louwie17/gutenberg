/**
 * WordPress dependencies
 */
import {
	CheckboxControl,
	__experimentalVStack as VStack,
	TextControl,
	BaseControl,
	VisuallyHidden,
} from '@wordpress/components';
import type { DataFormControlProps } from '@wordpress/dataviews';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import type { BasePost } from '../../types';

function PasswordEdit( {
	data,
	onChange,
	field,
	hideLabelFromVision,
}: DataFormControlProps< BasePost > ) {
	const { label } = field;
	const [ showPassword, setShowPassword ] = useState( !! data.password );

	const handleTogglePassword = ( value: boolean ) => {
		setShowPassword( value );
		if ( ! value ) {
			onChange( { password: '' } );
		}
	};

	return (
		<VStack
			as="fieldset"
			spacing={ 4 }
			className="dataviews-controls__password"
		>
			{ ! hideLabelFromVision && (
				<BaseControl.VisualLabel as="legend">
					{ label }
				</BaseControl.VisualLabel>
			) }
			{ hideLabelFromVision && (
				<VisuallyHidden as="legend">{ label }</VisuallyHidden>
			) }
			<CheckboxControl
				__nextHasNoMarginBottom
				label={ __( 'Password protected' ) }
				help={ __( 'Only visible to those who know the password' ) }
				checked={ showPassword }
				onChange={ handleTogglePassword }
			/>
			{ showPassword && (
				<div className="editor-change-status__password-input">
					<TextControl
						label={ __( 'Password' ) }
						onChange={ ( value ) =>
							onChange( {
								password: value,
							} )
						}
						value={ data.password || '' }
						placeholder={ __( 'Use a secure password' ) }
						type="text"
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						maxLength={ 255 }
					/>
				</div>
			) }
		</VStack>
	);
}
export default PasswordEdit;
