let recognizing = false;
let recognition = new webkitSpeechRecognition();
recognition.continuous = true;

recognition.onstart = function() {
    recognizing = true;
};

recognition.onresult = function(event) {
    let result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    
    if (result.includes('play music')) {
        playMusic();
    } else if (result.includes('toggle microphone')) {
        toggleMic();
    } else if (result.includes('pause music')) {
        pauseMusic();
    } else if (result.includes('previous music')) {
        prevMusic();
    } else if (result.includes('next music')) {
        nextMusic();
    } else if (result.includes('mute sound')) {
        mute_sound();
    } else if (result.includes('change volume to')) {
        let volumeValue = result.match(/\d+/)[0];
        changeVolume(volumeValue);
    }
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

function toggleMic() {
    if (recognizing) {
        recognition.stop();
        recognizing = false;
    } else {
        recognition.start();
    }
}

function changeVolume(value) {
    recent_volume.value = value;
    volume_show.innerHTML = value;
    mainAudio.volume = value / 100;
}
