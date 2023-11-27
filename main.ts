enum RadioMessage {
    message1 = 49434,
    Go = 39728
}
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("A B A B A B A B ", 300), music.PlaybackMode.UntilDone)
    servos.P1.setAngle(90)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 C5 G G C5 C5 G G ", 500), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
loops.everyInterval(3000, function () {
    servos.P1.setAngle(0)
})
