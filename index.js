function theBeatlesPlay(musicians, instruments) {
  var music = [];
    for (var i = 0; i < musicians.length; i += 1) {
        music.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return music;
}