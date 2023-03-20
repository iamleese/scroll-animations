import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';


import metadata from './block.json';

const enableScrollSectionOnBlocks = [
    'core/group',
];

const filterBlocks = (settings) => {
    
    if (settings.name !== 'core/group') {
        return settings
    }

    const newSettings = {
          ...settings, attributes : {...settings.attributes, isScrollSection: { type: 'boolean' } } ,
    }

    return newSettings; 
}

addFilter(
    'blocks.registerBlockType', 
    metadata.name, 
    filterBlocks 
)



const withScrollSection = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // Do nothing if it's another block than our defined ones.
        if ( ! enableScrollSectionOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const {
            attributes: { isScrollSection },
            setAttributes,
        } = props;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title="Scroll Settings" initialOpen={ true }>
                        <PanelRow>
                            <ToggleControl
                                label = "make scroll section"
                                checked = {!!isScrollSection}
                                onChange = {(val) => {setAttributes({isScrollSection: val})}}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withScrollSection' );

addFilter( 'editor.BlockEdit', 'scroll-animations/with-scroll-section', withScrollSection );

function saveScrollSection(extraProps, blockType, attributes) {
    
    const { isScrollSection } = attributes;
    
    if (blockType.name === 'core/group' && isScrollSection == true) {
        return {
            ...extraProps,
            'data-scroll-section' : '',
        };
    }

    return extraProps;
}

addFilter(
    'blocks.getSaveContent.extraProps',
    'scroll-animations/save-scroll-section',
    saveScrollSection
);