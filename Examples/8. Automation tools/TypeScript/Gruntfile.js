/**
 * Created by pavelpat on 07.06.14.
 */

module.exports = function (grunt)
{
    // Load the task.
    grunt.loadNpmTasks('grunt-ts');

    // Configure grunt here.
    grunt.initConfig({
        ts: {
            // A specific target.
            build: {
                // The source TypeScript files, http://gruntjs.com/configuring-tasks#files.
                src: ['src/**/*.ts'],

                // If specified, generate an out.js file which is the merged js file.
                out: 'build/out.js',

                // Use to override the default options, http://gruntjs.com/configuring-tasks#options.
                options: {
                    target: 'es5',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    // Set default task.
    grunt.registerTask('default', ['ts:build']);
};