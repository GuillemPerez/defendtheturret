function Laser(spos, angle, img) {
    this.pos = createVector(spos.x, spos.y);
    this.pos_inicial = createVector(this.pos.x,this.pos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(10);
    this.img = img;

    this.update = function(){
        this.pos.add(this.vel);
    }
    this.render = function() {
        push();
        
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        
        //image(this.img, this.pos.x, this.pos.y)
        pop();
    }

    this.hits =function(badfood,j){
        var d = dist(this.pos.x, this.pos.y, badfood.pos.x, badfood.pos.y);
        
        if(d<badfood.r){
            
            return true;
        } 
    }

    this.timedestroy =function(){
        
        if(this.pos.x>width || this.pos.y>height || this.pos.x<0 || this.pos.y<0){
            console.log("destroyed")
            return true;
            
        } 
    }

    
}
