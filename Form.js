class Form {
    constructor(){

    }

    display(){
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(250 , 20);
        
        var input = createInput("Name");
        var button = createButton("PLAY");
        var greeting = createElement("h3");
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var Name = input.value();
            console.log(Name);

            PlayerCount = PlayerCount+ 1;
            console.log(PlayerCount);
            
            player.update(Name);
            player.updateCount(PlayerCount);
            
            greeting.html("Hello" + Name);
            greeting.position(250 , 250);
        });

    }

}