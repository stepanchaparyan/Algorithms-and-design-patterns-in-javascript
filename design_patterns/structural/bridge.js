// we have webpage
// wa want to add theming to the page
// we dont want to add many copies of page with many themes 
// we use bridge
/*
Webpage interface :

constructor(theme)
getContent()
*/

// theme one
class About{ 
    constructor(theme) {
        this.theme = theme
    }
    
    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

// theme two
class Careers{
   constructor(theme) {
       this.theme = theme
   }
   
   getContent() {
       return "Careers page in " + this.theme.getColor()
   } 
}

/*
Theme interface :
getColor()
*/

class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme{
    getColor() {
        return 'Off white'
    }
}
class AquaTheme{
    getColor() {
        return 'Light blue'
    }
}

const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent() )// "About page in Dark Black"
console.log(careers.getContent() )// "Careers page in Dark Black"