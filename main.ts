controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (kitkat.vy == 0) {
        kitkat.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        otherSprite.destroy(effects.fire, 100)
    } else {
        game.over(false, effects.melt)
    }
})
let kitkat: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`4600100000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000a0900000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000b0c000000000000000200000000000000000003030303030300000300000300000000000000000000000000000303000000000000000000000000030600000e000000000d00000000000000000000020000000000000000030000000000000000000000000000000000000000000000000003030300000000000000000000000003010101010101010101010707010101010101010200000000000000030300000000000000000000000000030000030003000300030003030303000000000000000000000000030303030303030303030308080303030303030303000000000000030300000000000000000000000000030300000300030003000300030303030000000000000000000000000303030303030303030303080803030303030303030303030000030300000000000000030000030000030303000003000300030003000303030300000000000000000000050503030303030303030303030808030303000000000000000000000000000000000003000300000300000303030000030003000300030003030303000003030300000003030303030303030303030303030308080000000000000000000000000000000003030303030003000003000003030300000300030003000300030303030000030303000000030303030303030303030303030303080800000000000000000000000000000003030303030300030000030000030303000003000300030003000303030300000303030000000303030303030303030303030303030303030303040403030404030304040303030303030303040304040304040303030404030403040304030403030303040403030304040403030303030303030303030303030303030303030404030304040303040403030303030303030403040403040403030304040304030403040304030303030404030303040404030303030303030303030303030303030303030304040303040403030404030303030303030304030404030404030303040403040304030403040303030304040303030404040303030303030303030303030303030303030303040403030404030304040303030303030303040304040304040303030404030403040304030403030303040403030304040403030303030303030303030303030303030303030404030304040303040403030303030303030403040403040403030304040304030403040304030303030404030303040404030303030303030303030303030303030303030304040303040403030404030303030303030304030404030404030303040403040304030403040303030304040303030404040303030303`, img`
    .....................................................................2
    .....................................................................2
    .............................222222..2..2..............22............2
    ............................2.........................222............2
    2222222222..2222222........22.............2..2.2.2.2.2222............2
    2222222222..22222222......22.............22..2.2.2.2.2222............2
    2222222222..22222222222..22.......2..2..222..2.2.2.2.2222............2
    2222222222..222.................2.2..2..222..2.2.2.2.2222..222...22222
    2222222222..................22222.2..2..222..2.2.2.2.2222..222...22222
    2222222222.................222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    222222222222222..22..22..22222222.2..2..222..2.2.2.2.2222..222...22222
    `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.builtin.forestTiles10,sprites.castle.tilePath5,sprites.dungeon.hazardLava0,sprites.dungeon.chestClosed,myTiles.tile3,sprites.dungeon.hazardWater,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile10,myTiles.tile11,myTiles.tile1,myTiles.tile5], TileScale.Sixteen))
kitkat = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f f f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 3 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(kitkat, myTiles.tile3)
controller.moveSprite(kitkat, 100, 0)
kitkat.ay = 300
scene.cameraFollowSprite(kitkat)
let gost = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnRandomTile(gost, myTiles.tile1)
gost.x += 14
game.onUpdate(function () {
    if (kitkat.y > 200) {
        game.over(false, effects.melt)
    }
    if (gost.tileKindAt(TileDirection.Right, myTiles.tile5)) {
        gost.vx = 50
        gost.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (gost.tileKindAt(TileDirection.Left, myTiles.tile1)) {
        gost.vx = -50
        gost.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `)
    }
})
