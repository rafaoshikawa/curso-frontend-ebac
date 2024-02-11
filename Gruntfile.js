module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./build/styles/main.css": "source/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "./build/styles/main.min.css": "source/styles/main.less",
        },
      },
    },
    uglify: {
      options: {
        mangle: true,
        compress: {
          drop_console: true,
        },
      },
      production: {
        files: [{
          expand: true,
          cwd: "./source/scripts/", // diretório base
          src: ["*.js"], // padrão de nomenclatura dos arquivos JavaScript
          dest: "./build/scripts/",
          ext: ".min.js",
          extDot: "last",
        }],
        nonull: true, // garantir que o Uglify seja executado mesmo que não haja arquivos
      },
    },
    watch: {
      styles: {
        files: ["source/styles/**/*.less"],
        tasks: ["less:development"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["less", "uglify", "watch"]);
};
