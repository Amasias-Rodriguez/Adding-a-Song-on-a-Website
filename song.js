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
    wavesurfer.playPause();
    if(playBtn.src.includes("play.png")){
        playBtn.src = "media/pause.png";
    }else{
        playBtn.src = "media/play.png";
    }

    wavesurfer.on('finsh', function(){
        playBtn.src = "media/play.png";
        wavesurfer.stop();
    })
}
