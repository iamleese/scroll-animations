import { registerPlugin } from '@wordpress/plugins';
import Animation_Plugin from './plugins';
//import './filters.js';

registerPlugin('scroll-animations', {
    render: Animation_Plugin
});

