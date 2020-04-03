/*
Lion interface :

roar()
*/

class AfricanLion  {
    roar() {}
}

class AsianLion  {
    roar() {}
}

// wa have hunter who can hunt only lions

class Hunter {
    hunt(lion) {
        lion.roar()
        //... 
    }
}

// need to hunt wild dog but it has other interface, 
// we need adapter to adopt dog with hunter

class WildDog {
    bark() {
    }
}

class WildDogAdapter {
    constructor(dog) {
        this.dog = dog;
    }    
    roar() {
        this.dog.bark();
    }
}

// now we can use/hunt wild dog

wildDog = new WildDog()
wildDogAdapter = new WildDogAdapter(wildDog)

hunter = new Hunter()
hunter.hunt(wildDogAdapter)