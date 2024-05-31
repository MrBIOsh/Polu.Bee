export const copy = () => {
    return app.gulp.src(app.path.src.files) // Get files from src
        .pipe(app.gulp.dest(app.path.build.files)) // Add files from src to build
}