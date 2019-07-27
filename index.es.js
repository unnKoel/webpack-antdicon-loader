import {getOptions} from 'loader-utils';

/**
 * loader config:
 * {
 *  test: require.resolve('@ant-design/icons/lib/dist'),
 *  loader: 'webpack-antdicon-plugin',
 *  options:{
 *     chunkName:'antd-icons'
 *  }
 * }
 */
export default function () {
  const options = getOptions (this);
  const chunkName = options.chunkName || 'antd-icons';
  
  return `
        import {WrapAntIcon} from 'webpack-antdicon-plugin/runtime.js';

        // create script tag will block main thread, resolve it by creating new task.
        const dynamicLoadAntIcons = () => {
          import (
            /* webpackChunkName: "${chunkName}" */ '@ant-design/icons/lib/dist'
          ).then (allIcons => {
            WrapAntIcon.loadAll (allIcons);
          });
        };

        setTimeout (dynamicLoadAntIcons, 0);

        export default {
          name:'add',
          theme:'fill' 
        }`;
}
