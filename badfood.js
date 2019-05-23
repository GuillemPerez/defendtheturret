function food(anim,n,x) {
    this.pos = createVector(x, random(height));
    this.pos_inicial = createVector(this.pos.x,this.pos.y);
    this.vel = p5.Vector.random2D();
    this.col = false;
    this.r = 30;
    this.r2 = 50;
    this.img = anim[n];
    this.destroyed = false;
    
    
    this.update = function(){
        this.pos.add(this.vel);    
    }





    this.render = function() {
        push();
       
       
     
        stroke(255);
        strokeWeight(4);
        //rotate(PI / 180 * 45);
        
        image(this.img,this.pos.x-40,this.pos.y-40);
   

        pop();
    }

    this.timedestroy =function(){
        var d = dist( this.pos_inicial.x,this.pos_inicial.y, this.pos.x, this.pos.y);
        
        if(d>=1100){
            return true;
            
        } 
    }
    this.hitmidle = function(){
        var d2 = dist(this.pos.x, this.pos.y, width/2, height/2);
        if(d2<this.r2 ){
            return true;
        }
    }

      
    
}