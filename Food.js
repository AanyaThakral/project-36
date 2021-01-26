class Food {
    constructor(){
    this.foodStock=foodS;
    this.lastFed;
    this.image = loadImage("images/Milk.png");
    }

  

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   

    display(){
        background(46,139,87);

        fill("white");
        textSize(15);
        if(lastFed>=12){
            text("Last Feed : "+ lastFed%12 + " PM", 200,30);
        }else if(lastFed==0){
            text("Last Feed : 12 AM",200,30);
        }else{
            text("Last Feed : "+ lastFed + " AM", 200,30);
        }
       
        imageMode(CENTER);
        var x = 5
        var y = 20
        
          if(this.foodS!== 0){

            for(var i = 0; i < foodS; i++){
    
                if(i % 10 === 0){
    
                    x = x + 60;
                    y = 20
    
                }
    
                image(this.image, x, y, 50, 50);
                y = y + 60;
    }
          }
        }
    

    bedroom(){
        background(bedroom,550,500);  
    }
      
    garden(){
        background(garden,550,500);  
    } 

    washroom(){
        background(washroom,550,500); 
    }
}