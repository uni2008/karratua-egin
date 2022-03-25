input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(2500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(700)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        basic.pause(700)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
