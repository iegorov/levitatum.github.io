const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const path = require("path");

(async () => {
    const files = await imagemin(["assets/img/*.jpg"], {
        destination: "assets/img",
        plugins: [imageminMozjpeg({ progressive: true })],
    });

    console.log("Images optimized:", files);
})();
