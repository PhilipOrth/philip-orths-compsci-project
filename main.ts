sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
scene.setBackgroundColor(2)
info.startCountdown(20)
let Monkey = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. . f f f f f e e e e e f . f f 
. . f d b f e e f f e e f . e f 
. f f d d f e f f e e e f . e f 
. f f f f f f e b b f e f f e f 
. f d d f e e e d d b e f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
controller.moveSprite(Monkey)
let Human = sprites.create(img`
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 2 2 f f f . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
. . f e 2 f f f f f f 2 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . c c c . 
. f f e f b f 4 4 f b f e f f . . . . c d d c . 
. f f e f b f 4 4 f b f e f f . . . c d d c . . 
. f e e 4 d d d d d 3 4 e e f . c c d d c . . . 
f d f e e d d 3 3 d 3 e e f f e c d d c . . . . 
f b f f e e 4 4 3 3 e e 4 f d d c c c . . . . . 
f b f 4 f 2 2 2 2 3 2 f 1 e d d e . . . . . . . 
f c f . f 2 2 2 2 2 2 f 4 4 e e . . . . . . . . 
. f f . f 4 4 5 5 4 4 f . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Human.follow(Monkey, 65)
Human.setVelocity(20, 20)
Monkey.setVelocity(50, 50)
Human.x = 5
game.showLongText("Use keypad to avoid the human", DialogLayout.Bottom)
