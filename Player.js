class Player{
    constructor(){

    }

    getCount(){
       var PlayerCountref = database.ref('PlayerCount');
       PlayerCountref.on("value" , function(data){
           PlayerCount = data.val;
       });
    }

    updateCount(Count) {
        database.ref('/').update({
            PlayerCount:Count
        });
    }

    update(name){
        var PlayerIndex = "Player" + PlayerCount;
        database.ref(PlayerIndex).set({
            Name: name
        });

    }



}