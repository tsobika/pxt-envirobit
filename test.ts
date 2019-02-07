serial.redirectToUSB()
envirobit.setLEDs(1)

let led_state: boolean = false

let clap_toggle: boolean = false

let clap_count: number = 0

basic.forever(() => {
    serial.writeString(" R:")
    serial.writeNumber(envirobit.getRed())
    serial.writeString(" G:")
    serial.writeNumber(envirobit.getGreen())
    serial.writeString(" B:")
    serial.writeNumber(envirobit.getBlue())

    envirobit.setLEDs(led_state ? 1 : 0)
    led_state = !led_state

    basic.pause(2000)
})
