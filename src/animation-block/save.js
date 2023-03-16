
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './style.scss';

export default function save( {attributes} ) {
	let scrollAtts = [];
	let dataOffset = [];
	

	if( attributes.offset_bottom != ''){

		var topOffset = attributes.offset_top ? ','+ attributes.offset_top : '';

		 dataOffset = {'data-scroll-offset' : attributes.offset_bottom + topOffset};
	} else {
		dataOffset = '';
	}

	for (const [key, value] of Object.entries(attributes)) {

		if( key != 'offset_bottom' && key != 'offset_top' && value != '' ){
			scrollAtts[ 'data-scroll-'+key ] = value;
		}

	}

	const blockProps = useBlockProps.save({
		'data-scroll':'' 
	});


 
	return (
		<div {...blockProps} {...dataOffset} {...scrollAtts}  >
			<InnerBlocks.Content />
		</div>
	);

}
