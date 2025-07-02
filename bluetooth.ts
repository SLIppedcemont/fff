//% color=#0082FB weight=100 icon="\uf1eb"
//% block="Bluetooth Connect"
namespace bluetoothconnect {
    /**
     * Mimics pairing animation, then enables Bluetooth with live data.
     */
    //% block
    export function connectBluetooth() {
        pairingAnimation()
        control.inBackground(() => {
            bluetooth.startBluetooth()
            loops.everyInterval(1000, () => {
                datalogger.log(datalogger.createCV("temp", input.temperature()))
                control.eventValue(0x1234, input.temperature())
            })
        })
    }

    function pairingAnimation() {
        for (let i = 0; i <= 4; i++) {
            led.plotBarGraph(i + 1, 5)
            basic.pause(200)
        }
        basic.pause(300)
        basic.clearScreen()
    }
}
