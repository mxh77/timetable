const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'src': path.resolve(root, 'src'),
      timetable: path.resolve(__dirname, '../lib/module'),
    },
  },
  watchFolders: [
    path.resolve(root, 'src'),
    root,
  ],
};