let emogiPlayer1 = 0;
let emogiPlayer2 = 0;

document.addEventListener("keyup", (event) => {
  const player1 = document.querySelectorAll("#emogi-player1 td")
  const player2 = document.querySelectorAll("#emogi-player2 td")

  if (event.code === 'KeyA') {
    player1[emogiPlayer1].classList.toggle("active")
    player1[emogiPlayer1 + 1].classList.toggle("active")
    emogiPlayer1 += 1
  }

  if (event.code === 'KeyB') {
    player2[emogiPlayer2].classList.toggle("active")
    player2[emogiPlayer2 + 1].classList.toggle("active")
    emogiPlayer2 += 1
  }

  if (emogiPlayer1 === 11 || emogiPlayer2 === 11) {
    const hide = document.querySelector(".hide-modal")
    hide.classList.toggle("hide-modal") // -> Como existe se esta ocultando

    const again = document.querySelector(".btn")
    again.addEventListener("click" , () => {
      hide.classList.add("hide-modal") // -> agrega la class
    })

    const winner =  document.getElementById("winner")
    const emojiWinner =  document.getElementById("emoji-winner")

    if (emogiPlayer1 === 11) {
      winner.innerHTML = "happiness"
      emojiWinner.setAttribute('src', './images/Happy.svg') //  setAttribute -> for image
    }
    else {
      winner.innerHTML = "laugh"
      emojiWinner.setAttribute('src', './images/Laugh.svg') //  setAttribute -> for image
    }

    player1[emogiPlayer1].classList.toggle("active")
    player2[emogiPlayer2].classList.toggle("active")
    player1[0].classList.toggle("active")
    player2[0].classList.toggle("active")
    emogiPlayer1 = 0
    emogiPlayer2 = 0
  }
});