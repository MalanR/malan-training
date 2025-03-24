// Interface Segregation Principle 

// Simulate a Bird Hierarchy where different birds have different abilities.

// Some birds can fly, some can swim, and some can both.
// Avoid forcing all birds to implement both flying and swimming methods.

class Bird{
    constructor(name){
        this.name = name;
    }
}