class Game{
    constructor() {

    }

  getState() {
      var ref= database.ref('GameState') ;
      ref.on("value" , function(data) {
        GameState = data.val();
      });
  }

  update(State) {
    database.ref('/').update({
        GameState:State
    });
  }

  start(){
      if(GameState === 0) {
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
    };
}
