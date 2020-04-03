// Every time when we turn on computer we press on one button
// but in real inside of computer goes on many operations
// facade help us to use/create simple interface for many operations


class Computer {
    getElectrition() {
        console.log('I got electrition')
    }
    makeSound() {
        console.log('I have sound')
    }
    showLoadingScreen() {
        console.log('Loading..')
    }
    makeVideo() {
        console.log('I am ready to use video')
    }
    closeVideo() {
        console.log('I am going to leave you')
    }
    closeEverything() {
      console.log('Good-By')
  }
}

// now simple facade for these operations

class ComputerFacade
{
    constructor(computer) {
        this.computer = computer
    }

    turnOn() {
        this.computer.getElectrition()
        this.computer.makeSound()
        this.computer.showLoadingScreen()
        this.computer.makeVideo()
    }

    turnOff() {
        this.computer.closeVideo()
        this.computer.closeEverything()
    }
}

const computer = new ComputerFacade(new Computer())
computer.turnOn()
computer.turnOff()