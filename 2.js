class Greeter {
    greeting: strung;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate 
    greet(@required name: String) {
        return "иди нахуй" + name + " ," + this.greeting;
    }
}