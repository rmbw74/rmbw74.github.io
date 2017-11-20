module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["**/*.js"],
                tasks: ["uglify"],
                options: {
                    spawn: false,
                },
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "projects/scripts",
                    src: "*.js",
                    dest: "projects/build",
                    ext: ".min.js"
                },{
                    expand: true,
                    cwd: "blog/scripts",
                    src: "*.js",
                    dest: "blog/build",
                    ext: ".min.js"
                },{
                    expand: true,
                    cwd: "contact/scripts",
                    src: "*.js",
                    dest: "contact/build",
                    ext: ".min.js"
                },{
                    expand: true,
                    cwd: "resume/scripts",
                    src: "*.js",
                    dest: "resume/build",
                    ext: ".min.js"
                }]
            },
                
        },eslint: {
            src: ["./blog/scripts/*.js", "./contact/scripts/*.js", "./resume/scripts/*.js", "./projects/scripts/*.js", "./admin/scripts/*.js"]
        }
    })
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("gruntify-eslint")
        
    
    // Default task(s).
    grunt.registerTask("default", ["uglify","eslint","watch"])
    
};