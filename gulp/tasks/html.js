import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(fileInclude()) // Get files from src
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    // .pipe(
    //     app.plugins.if(
    //         app.isBuild,
    //         webpHtmlNosvg()
    //     )
    // )
    .pipe(app.plugins.replace(/img.webp\//g, 'img/jpg/'))
    .pipe(
        app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json',
                }
            })
        )
    )
    .pipe(app.gulp.dest(app.path.build.html)) // Add files from src to build
    .pipe(app.plugins.browserSync.stream())
}