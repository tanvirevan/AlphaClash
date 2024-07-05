function continueGame()
    {
        const alphabet = getARandomAlphabet();
        console.log('Your alphabet ', alphabet);

        const currentAlphabetElement = document.getElementById('current-alphabet');
        currentAlphabetElement.innerText = alphabet;

        setBackgroundColorById(alphabet);

    }

function play()
    {
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
    }