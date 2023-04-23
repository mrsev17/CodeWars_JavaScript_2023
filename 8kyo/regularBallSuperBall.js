// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

"use strict";

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}
