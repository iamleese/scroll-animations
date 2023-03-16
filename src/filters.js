import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent, compose } from '@wordpress/compose';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { select } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

/*
//ADD DATA ATTRIBUTES FOR SCROLL SECTION
addFilter(
    'blocks.registerBlockType',
    'scroll-animations/scroll-section',
    ( settings, name ) => {
        if( name = 'core/group'){
            return  {...settings, attributes : {...settings.attributes, isScrollSection: { type: 'boolean' } } };
        }
        return settings;
    }
);


const makeScrollSection = createHigherOrderComponent( ( BlockEdit ) => {
      
        return (props) => {
            const {
                attributes: { isScrollSection },
                setAttributes,
                name,
            } = props;
    
            if (name == 'core/group') {
                
                return (
                    <Fragment>  
                        <InspectorControls group="block">
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
                        <BlockEdit { ...props } />
                    </Fragment>
                );
            };
        }
        
}, 'withInspectorControl');

addFilter(
    'editor.BlockEdit',
    'scroll-animations/scroll-section',
    makeScrollSection
);

const withScrollSection = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! props.name != 'core/group') {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { isScrollSection } = attributes;


        if ( isScrollSection && 'custom' === isScrollSection ) {
            return <BlockListBlock { ...props } dataScrollSection = '' />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withInspectorControls' );



wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-scroll-section',
    withScrollSection
);




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
*/