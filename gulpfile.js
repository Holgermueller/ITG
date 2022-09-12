const gulp = require("gulp");
const livereload = require("gulp-livereload");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("gulp-cssnano");

gulp.task("serve", ["css"], function () {
  gulp.watch("./css/*.css", ["css"]);
});

gulp.task("css", function () {
  const plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("./src/*.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dest"));
});

gulp.task("default", ["serve"]);
