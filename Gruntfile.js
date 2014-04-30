module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		less: {
			options: {
				yuicompress:false
			},
			front: {
				files: {
					"public/asset/css/main-<%= pkg.version%>.css":[
						"css/index.less"
					]
				}
			}
		},
		watch: {
			css: {
				files: ["css/*.less"],
				tasks: ["less"]
			}
		},
		connect: {
			yng: {
				options:{
					hostname:"127.0.0.1",
					base: ".",
					port: 8080
				}
			}
		
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default",["less"]);
	grunt.registerTask("dev",["less","watch"]);
	grunt.registerTask("site",["connect:yng:keepalive"]);
}
