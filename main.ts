controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (kitkat.vy == 0) {
        kitkat.vy = -150
    }
})
let kitkat: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`38001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000c00000d00000e00000f0000110f00000000000000000011111100001111111100001111110000111111000000040000000000000b0100000100000100000100000100000102000000000000000011010303000003030303000003030300000303020000000400000000000b0100000006000006000006000006000004050000000000000013010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0500000004070b0b0b0b010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04050000000000000e010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a051111080403030303030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04050b120c0d100f010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a09030303090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04050303030303010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
    .......................................................2
    .......................................................2
    .......................................................2
    .......................................................2
    .......................................................2
    .......................................................2
    .......................................................2
    .......2..2..2..2..2..22.........222..2222..222..222...2
    ......22..2..2..2..2..22........22.................2...2
    .....2................22.......22..................2...2
    22222.................22......22...................22222
    ......................222222222.........................
    ......................22.....2..........................
    ......................22................................
    ........................................................
    ........................................................
    `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,myTiles.tile2,sprites.dungeon.chestClosed,sprites.castle.tilePath5,sprites.dungeon.hazardLava0,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd6,sprites.builtin.crowd5,sprites.builtin.crowd4,sprites.builtin.crowd8,sprites.builtin.crowd1,sprites.builtin.crowd7], TileScale.Sixteen))
kitkat = sprites.create(img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(kitkat, 100, 0)
scene.cameraFollowSprite(kitkat)
kitkat.ay = 300
tiles.placeOnRandomTile(kitkat, myTiles.tile2)
game.onUpdate(function () {
    if (kitkat.y > 200) {
        game.over(false, effects.melt)
    }
})
