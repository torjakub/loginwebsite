const glob = require( 'glob' );
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const StylelintPlugin = require( 'stylelint-webpack-plugin' );

let dotenv = {
    PROXY_TARGET: null,
    OUTPUT_PORT: null
};

module.exports = ( env, argv ) => {
    const {mode} = argv;

    if ( 'production' !== mode ) {
        dotenv = require( 'dotenv' ).config().parsed;
    }

    const entry = glob.sync( path.resolve( __dirname, './blocks/*/index.js' ) ).reduce( function( obj, el ) {
        const name = el
            .match( /\/blocks\/.*\.js/ )[0]
            .replace( '/blocks/', '' )
            .replace( '\\blocks\\', '' )
            .replace( '/index.js', '' )
            .replace( '\\index.js', '' );

        obj[name] = el;
        return obj;
    }, {});

    entry.common = path.resolve( __dirname, './src/common.js' );

    return {
        entry,
        output: {
            filename: ( elm ) => {
                if ( 'common' === elm.runtime ) {
                    return './../assets/[name].js';
                }
                return './../blocks/[name]/[name].min.js';
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: [ 'babel-loader', 'eslint-loader' ]
                },
                {
                    test: /\.(s?css)$/i,
                    use: [

                        // load extract css to individual files. To not compile everything into single file
                        {
                            loader: MiniCssExtractPlugin.loader
                        },

                        // load css
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },

                        // compile scss to css
                        {
                            loader: 'postcss-loader'
                        },

                        // load scss
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        watchOptions: {
            ignored: [ '**/node_modules' ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: ( chunkData ) => {
                    const name = 'script' === chunkData.chunk.name ? 'style' : '[name]';

                    if ( 'common' === chunkData.chunk.name ) {
                        return `./../assets/${name}.css`;
                    }

                    return `./../blocks/${name}/${name}.css`;
                }
            }),
            new BrowserSyncPlugin({
                proxy: {
                    target: dotenv.PROXY_TARGET
                },
                host: 'localhost',
                files: [ './**/*.php', '../../plugins/**/*.php' ],
                port: dotenv.OUTPUT_PORT
            }),
            new StylelintPlugin({
                files: '**/*.scss',
                failOnError: false,
            })
        ],
        devtool: 'production' === mode ? false : 'source-map',
        resolve: {
            extensions: [ '*', '.js' ]
        },
        externals: {
            jquery: 'jQuery'
        }
    };
};
