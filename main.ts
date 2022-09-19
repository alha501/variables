input.onButtonPressed(Button.A, function () {
    num += -0.5
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltLeft, function () {
    pic.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    num += -0.5
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltRight, function () {
    pic.change(LedSpriteProperty.X, 1)
})
let pic: game.LedSprite = null
let num = 0
basic.showIcon(IconNames.Pitchfork)
num = 0
basic.showNumber(0)
pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
