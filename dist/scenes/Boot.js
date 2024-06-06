"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boot = void 0;
const phaser_1 = require("phaser");
class Boot extends phaser_1.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.image('background', 'assets/bg.png');
    }
    create() {
        this.scene.start('Preloader');
    }
}
exports.Boot = Boot;
//# sourceMappingURL=Boot.js.map