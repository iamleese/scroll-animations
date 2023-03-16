/*
* Import dependencies
*/
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, RangeControl, TextControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useState } from '@wordpress/element';


import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

        const [ isSticky, setSticky ] = useState(attributes.sticky);

        const offsetUnits = [
          { value: 'px', label: 'px', default: 50 },
          { value: '%', label: '%', default: 10 },
      ];

        const targetToggle = () => {
          if ( isSticky ){
            return (
              <>
                <TextControl 
                  label = "Scroll Target"
                  help = {__('ID or Class of container that determines when sticking starts and stops')}
                  value = { attributes.scroll_target }
                  onChange = {(value) => setAttributes( { scroll_target : value }) }
                />
              </>
            );
          } else {
            return null;
          }
        } 


        const blockProps = useBlockProps();


        return (
          <div { ...blockProps }>
          
          <InspectorControls key="setting">
          <Panel>
            <PanelBody>
              <PanelRow>
                <ToggleControl
                  label = { __('Make Sticky') }
                  value = {isSticky}
                  onChange = { (state) => setSticky(state) }
                />
                {targetToggle}
              </PanelRow>
              <PanelRow>
                <UnitControl
                  label = { __('Bottom Offset') }
                  value = {attributes.offset_bottom}
                  units = { offsetUnits }
                  onChange = {( value ) => setAttributes({ offset_bottom : value })}
                />
              </PanelRow>
            </PanelBody>
             
          </Panel>
          </InspectorControls>

          </div>
        );
}
