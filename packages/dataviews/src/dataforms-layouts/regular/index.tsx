/**
 * WordPress dependencies
 */
import { __experimentalVStack as VStack } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { normalizeFields } from '../../normalize-fields';
import { getVisibleFields } from '../get-visible-fields';
import type { DataFormProps } from '../../types';
import DataFormFieldVisibility from '../../components/dataform-field-visibility';

export default function FormRegular< Item >( {
	data,
	fields,
	form,
	onChange,
}: DataFormProps< Item > ) {
	const visibleFields = useMemo(
		() =>
			normalizeFields(
				getVisibleFields< Item >(
					fields,
					form.fields,
					form.combinedFields
				)
			),
		[ fields, form.fields, form.combinedFields ]
	);

	return (
		<VStack spacing={ 4 }>
			{ visibleFields.map( ( field ) => {
				return (
					<DataFormFieldVisibility
						key={ field.id }
						data={ data }
						field={ field }
					>
						<field.Edit
							data={ data }
							field={ field }
							onChange={ onChange }
						/>
					</DataFormFieldVisibility>
				);
			} ) }
		</VStack>
	);
}
