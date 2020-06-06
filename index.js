interface Padder {
        getPaddingString(): string
    }
     
    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }
     
    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }
     
    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }
     
    // Тип - 'SpaceRepeatingPadder | StringPadder'
    let padder: Padder = getRandomPadder();
     
    if (padder instanceof SpaceRepeatingPadder) {
        padder; // type narrowed to 'SpaceRepeatingPadder'
        padder; // тип ограничен к 'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // type narrowed to 'StringPadder'
        padder; // тип ограничен к 'StringPadder'
    }