var soundClipId = 'fca0f8181c05ed9068334996fce96c9396974277bf8bf066bd7dd104a11b4ac2';
var soundClipDuration;

Scene.loadSound(soundClipId, function(soundClip) {
  soundClipDuration = soundClip.duration();
  Space.log(soundClipDuration); // 82.520813
  soundClip.play();
});
