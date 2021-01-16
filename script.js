const sounds = ['fire','pickle-rick', 'rain', 'sea', 'thunder', 'water']


sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn')

  btn.innerText = sound
  btn.innerHTML = ` <p> <i class="fas fa-play"></i> ${sound} </p>` 

  btn.addEventListener('click', () => {

    stopSongs()

    document.getElementById(sound).play()
  })


  document.getElementById('buttons').appendChild(btn);

})


function stopSongs(){
  sounds.forEach(sound => {

    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;

  })
}