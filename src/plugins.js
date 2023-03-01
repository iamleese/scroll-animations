import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { ToggleControl, PanelRow } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';


const Animation_Plugin = ({setPostMeta, postMeta}) => {
   
    return(
		<PluginDocumentSettingPanel title={ __( 'Smooth Scrolling', 'scroll-animations') }  initialOpen="true">
			<PanelRow>
           
            <ToggleControl
             label="Activate smooth scrolling"
             checked={ postMeta.smooth_scroll }
             onChange={ (val) => { setPostMeta( { smooth_scroll: val } ) } }
            />

			</PanelRow>
		</PluginDocumentSettingPanel>
	);
}

export default compose([
    withSelect(( select )=>{
        return {
			postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
            savedMeta: select( 'core/editor' ).getCurrentPostAttribute( 'meta' )
		};
    }),
    withDispatch( ( dispatch ) => {
        return{
            setPostMeta( newMeta ) {
				dispatch( 'core/editor' ).editPost( { meta: newMeta } );
			}
        };
    })
])(Animation_Plugin);
