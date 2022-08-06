var playBtn = document.getElementbyId("playBtn");

var wavesurfer = wavesurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#ff006c',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4
});

wavesurfer.load('media/Good-Day-Wake-Up-NEFFEX.mp3');

playBtn.onclick = function(){
    wavesurfer.playpause();
}