import { registerPlugin } from '@wordpress/plugins';
import Animation_Plugin from './plugins';

registerPlugin('scroll-animations', {
    render: Animation_Plugin
});