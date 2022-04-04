const { src, dest, watch, series } = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles() {
  return src('./tw3r18_profile_10/build/**/*.*')
    .pipe(dest('./tw3r18-profile-10'))
}

function watchTask() {
  watch('./tw3r18_profile_11/build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);