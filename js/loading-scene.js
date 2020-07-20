export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoadingScene'
        });
    }

    preload() {
        const LARGURA_JOGO = this.sys.canvas.width;
        const PROGRESS_BAR = this.add.graphics();
        const LARGURA_BARRA = 0.7 * LARGURA_JOGO;
        
        this.load.on('progress', (value) => {
            PROGRESS_BAR.clear();
            PROGRESS_BAR.fillStyle(0xFFFFFF, 1);
            PROGRESS_BAR.fillRect((LARGURA_JOGO - LARGURA_BARRA) / 2, this.sys.game.config.height / 2, LARGURA_BARRA * value, 20);
            PROGRESS_BAR.lineStyle(4, 0x00FFFF, 1);
            PROGRESS_BAR.strokeRect((LARGURA_JOGO - LARGURA_BARRA) / 2, this.sys.game.config.height / 2, LARGURA_BARRA, 20);
        });
        
        this.load.on('complete', () => {
            this.scene.start('GameScene');
        });
        
        this.load.image('room', 'lenda-do-heroi.png');
        this.load.image('floor1', 'floor1.png');
        this.load.image('floor2', 'floor2C.png');
        this.load.image('floor3', 'floor3.png');
        this.load.image('platforminha', 'platformB_1x3.png');
        this.load.image('platform', 'platformB_1x6.png');
        // this.load.music();
        // this.load.sound();
        this.load.spritesheet('sprite', 'sad-one.png', { frameWidth: 59, frameHeight: 118 });
    }

    create() {

    }

    update() {

    }
}
