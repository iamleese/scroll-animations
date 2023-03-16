
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save( {attributes} ) {

  const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
		</div>
	);

}
