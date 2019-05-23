function player(name) {
    this.name = name;
    this.score = 0;
    this.numShots = 5;
    this.live = 1;

    this.SumScore = function(sco){
        this.score+=sco;
    }

}