function Letter (letter) {
    this.letter = letter;
    this.isUncovered = false;
    this.displayLetter = function () {
        if (this.isUncovered) {
            return this.letter;
        }
        return "_";
    }
    this.checkLetter = function(aLetter) {
        if (this.letter === aLetter) {
            this.isUncovered = true;
        }
        
    }
}

module.exports = Letter;