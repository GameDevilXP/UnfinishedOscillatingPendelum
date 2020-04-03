class Chain {
    constructor(testBodyA,testBodyB) {
        var options ={
            bodyA: testBodyA,
            bodyB: testBodyB,
            stiffness: 0.04,
            length: 5,
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }

    display() {
        var pointA = this.chain.testBodyA.position;
        var pointB = this.chain.testBodyB.position;
        Constraint.damping(1243);
        strokeWeight(5);
        stroke("white");
        //adding the line
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}