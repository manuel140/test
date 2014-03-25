cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/com.google.cordova.plugin.AdMobPlugin/www/AdMobPlugin.js",
        "id": "com.google.cordova.plugin.AdMobPlugin.AdMob",
        "clobbers": [
            "window.admob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.socialsharing": "4.0.7",
    "com.google.cordova.plugin.AdMobPlugin": "0.0.2"
}
// BOTTOM OF METADATA
});