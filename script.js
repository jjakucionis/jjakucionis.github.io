function play_sound(clicked_id) {
    console.log(clicked_id);
    var audio = new Audio(clicked_id + '.mp3');
    audio.play();
}
