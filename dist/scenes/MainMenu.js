"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
const phaser_1 = require("phaser");
class MainMenu extends phaser_1.Scene {
    constructor() {
        super('MainMenu');
    }
    create() {
        this.background = this.add.image(512, 384, 'background');
        this.logo = this.add.image(512, 300, 'logo');
        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=MainMenu.js.map