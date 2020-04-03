// we have door with functions - open and close
// with proxy we save previous func. but add new for being more secure

/*
Door interface :
open()
close()
*/

class Door {
    open() {
        console.log('Opening door')
    }

    close() {
        console.log('Closing the door')
    }
}

// now we implemen proxy-class to make our door more secure

class Security {
    constructor(door) {
        this.door = door
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
        	console.log('It is not possible.')
        }
    }

    authenticate(password) {
        return password === 'secret'
    }

    close() {
        this.door.close()
    }
}

// now no one can open this door wothout secret key

const door = new Security(new Door())
door.open('invalid') // It is not possible.

door.open('secret') // Opening door
door.close() // Closing door