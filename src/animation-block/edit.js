/*
* Import dependencies
*/
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, ToggleControl, RangeControl, TextControl, DropZone } from '@wordpress/components';
import { useState } from '@wordpress/element';

import icons from './icons.js'
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
        const blockProps = useBlockProps(
          {
            'data-scroll' : '',
          }
        );

        const [ isSticky, setIsSticky ] = useState(attributes.sticky);
        let blockDataAtts = [];

        function targetToggle( ){
          if ( isSticky == true ){
            return (
              <>
              <PanelRow>
                <TextControl 
                  label = "Scroll Target"
                  help = {__('ID or Class of container that determines when sticking starts and stops')}
                  value = { attributes.target }
                  onChange = {(value) => setAttributes( { target : value }) }
                />
                </PanelRow>
              </>
            );
          }
        }

        function stickyVal( stickyToggle ){
           if(stickyToggle == true) {
            setIsSticky( true )
            setAttributes( { sticky : true } );
           } else {
            setIsSticky( false )
            setAttributes( { sticky : false } );
           }
        }
       
        const BlockInserter = () => {
          const [ hasDropped, setHasDropped ] = useState( false );
      
          return (
              <div>
                  { hasDropped ? 'Dropped!' : 'Drop something here' }
                  <DropZone
                      onFilesDrop={ () => setHasDropped( true ) }
                      onHTMLDrop={ () => setHasDropped( true ) }
                      onDrop={ () => setHasDropped( true ) }
                  />
              </div>
          );
      }
        

       

        return (
          <div { ...blockProps } >
            <BlockInserter />
          
          <InspectorControls key="setting">
            <Panel>
              <PanelBody title={ __('Positioning') }>
              <PanelRow>
                  <TextControl
                    label = { __('Bottom Offset') }
                    help = { __('use % if using percentage') }
                    value = { attributes.offset_bottom }
                    onChange = {( value ) => setAttributes({ offset_bottom : value }) }
                  />
                  </PanelRow>
                  <PanelRow>
                  <TextControl
                    label = { __('Top Offset (optional)') }
                    help = { __('use % if using percentage') }
                    value = { attributes.offset_top }
                    onChange = {( value ) => setAttributes({ offset_top : value })}
                  />
                  </PanelRow>
                  <PanelRow>
                    <SelectControl
                      label = { __('Scroll Direction' )}
                      value = {attributes.direction}
                      options = { [
                        { label: __('Vertical'), value: 'vertical'},
                        { label: __('Horizontal'), value: 'horizontal'}
                      ] }
                      onChange = {( dir ) => { setAttributes({direction : dir}) }}
                    />
                  </PanelRow>
              </PanelBody>
            </Panel>
            <Panel>
              <PanelBody title={ __('Speed / Movement') }>
                <PanelRow>
                  <RangeControl
                    label= { __('Speed') }
                    help = { __('Negative numbers will animate in reverse')}
                    value={ attributes.speed }
                    initialPosition = { attributes.speed }
                    step = { 1 }
                    onChange={ ( value ) => setAttributes({speed : value} ) }
                    min={ -8 }
                    max={ 8 }
                    withInputField = { false }
                    afterIcon = { icons.foward }
                    beforeIcon = { icons.backward }
                  />
                </PanelRow>
                <PanelRow>
                  <RangeControl
                    label= { __('Delay (Lerp)') }
                    value={ attributes.delay }
                    initialPosition = { attributes.delay }
                    step = { .01 }
                    onChange={ ( value ) => setAttributes({ delay : value} ) }
                    min={ 0 }
                    max={ 1 }
                  />
                </PanelRow>
              </PanelBody>
            </Panel>
            <Panel>
              <PanelBody title= { __('Interactivity' )} initialOpen = {false}>
                <PanelRow>
                  <ToggleControl
                    label = { __('Make Sticky') }
                    checked = {isSticky}
                    onChange = { (val) => { stickyVal(val) } }
                  />
                </PanelRow>
                {targetToggle()}
                <PanelRow>
                  <SelectControl
                      label="Window Position"
                      value={ attributes.position }
                      help = { __('Window position of in-view trigger')}
                      options={ [
                          { label: '', value: '' },
                          { label: __('Top'), value: 'top' },
                          { label: __('Bottom'), value: 'bottom' },
                          { label: __('Left'), value: 'left' },
                          { label: __('Right'), value: 'right' },
                      ] }
                      onChange={ ( pos ) => setAttributes({ position : pos}) }
                  />
                  </PanelRow>
                  <PanelRow>
                      <TextControl
                        label = { __( 'Scroll Class ' ) }
                        help = { __('In-view Class') }
                        value = { attributes.class }
                        onChange = { (val) => setAttributes( { class : val } ) }
                      />
                  </PanelRow>

                  <PanelRow>
                      <TextControl
                        label = { __( 'Scroll ID (Optional)' ) }
                        help = { __( 'For scoping your element or tracking progress' ) }
                        value = { attributes.id }
                        onChange = { (val) => setAttributes( { id : val } ) }
                      />
                  </PanelRow>

                  <PanelRow>
                      <TextControl
                        label = { __( 'Scroll Call' ) }
                        help = { __( 'Calls a function when the element is in-view' ) }
                        value = { attributes.call }
                        onChange = { (val) => setAttributes( { call : val } ) }
                      />
                  </PanelRow>

              </PanelBody>
            </Panel>
          </InspectorControls>
          <InnerBlocks />

          </div>
        ); 
}
