var lion = Scene.createItem('LP_Lion', 0, 0, 0);
var horse = Scene.createItem('LP_Horse', 3, 5, 0);

var distance = lion.distanceToItem(horse);

lion.moveToItem(horse, distance - 2, function() {
  lion.say('Gotcha!');
});
