module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-npm-release");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('dts-generator');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.initConfig({

        // Creates a minified version of the library
        uglify: {
            dev: {
                files: {
                    "typedcontract.min.js": "./typedcontract.js"
                }
            }
        },
        // Copies the files over to the directory used to deploy to NPM
        copy:{
            library: {
                cwd: './',
                src: [
                    "typedcontract.js",
                    "package.json",
                    "typedcontract.js.map",
                    "typedcontract.min.js",
                    "typedcontract.d.ts",
                    "LICENSE-MIT"],
                dest: './typed-contract',
                expand: true,
                nonull: true
            },
            readme:
            {
                cwd: '../',
                src: [
                    "ReadMe.md"
                ],
                dest: './typed-contract',
                expand: true,
                nonull: true
            }
        },
        // Generate the TypeScript .d.ts file
        dtsGenerator: {
            options: {
                name: "typedcontract",
                project: "./TypedContract",
                out: "typedcontract.d.ts"
            },
            default: {
                src: [ "/TypedContract/**/*.ts" ]
            }
        },
        // Merge all of the the TypeScript files into a single, transpiled file
        webpack: {
            default: require("./webpack.config.js")
        },
        // Merge the library (from WebPack) and the bootstrapper
        concat: {
            options: {

            },
            dist: {
                src: ['./TypedContract/typedcontract-lib.js', './TypedContract/typedcontract-bootstrapper.js'],
                dest: 'typedcontract.js',
                sourceMap: true,
                sourceMapName: "typedcontract.js.map",
            },
            definition: {
                src: ['./typedcontract.d.ts','./TypedContract/TypeValidators.d.ts'],
                dest: 'typedcontract.d.ts'
            }
        },
        // Clean up any generated files
        replace: {
            // Clean up the generated typescript definition
            dts: {
                src: 'typedcontract.d.ts',
                overwrite: true,
                replacements: [{
                    // To fix TSLint issues
                    from: "\'",
                    to: "\""
                }, {
                    // To make the definition match the JS file generated by webpack
                    from: /from "typedcontract\/.*"/g,
                    to: "from \"typedcontract\""
                }, {
                    // To make the definition match the JS file generated by webpack
                    from: /declare module "typedcontract\/.*"/g,
                    to: "declare module \"typedcontract\""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"..\/TypeValidators\/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"..\/IContract.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"IContract.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"TypeValidators/TypeValidators.d.ts\" \/>",
                    to: ""
                }
                ]
            },js: {
                src: 'typedcontract.js',
                overwrite: true,
                replacements: [{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"..\/TypeValidators\/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"TypeValidators.d.ts\" \/>",
                    to: ""
                }
                ]
            }
        }
    });

    // Run all grunt tasks required to build the solution and get it ready for deployment
    grunt.task.registerTask("default", ["webpack", "dtsGenerator", "concat", "replace", "uglify", "copy"]);
};