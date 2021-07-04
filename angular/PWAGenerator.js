const pwaAssetGenerator = require('pwa-asset-generator');

(async() => {
    const { savedImages, htmlMeta, manifestJsonContent } = await pwaAssetGenerator.generateImages(
        './src/assets/pic.png',
        "./src/assets/favicon", {
            background: "linear-gradient(40deg, #f0c5cf 0%, #9bccd0 100%)",
            scrape: true,
            manifest: "./src/assets/manifest.json",
            favicon: true,
            splashOnly: false,
            portraitOnly: false,
            log: true
        });
})();

// Access to static data for Apple Device specs that are used for generating launch images
const appleDeviceSpecsForLaunchImages = pwaAssetGenerator.appleDeviceSpecsForLaunchImages;