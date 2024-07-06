
function handleKeyboardButtonPress(event)
    {
        const playerPressed = event.key;
        console.log(event.key);


        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLowerCase();

        if(playerPressed === expectedAlphabet)
            {
                // Update Score 
                const currentScore = getElementTextById('current-score');
                const newScore = currentScore + 1;

                setElementTextById('current-score',newScore);



                removeBackgroundColorById(expectedAlphabet);
                continueGame();
            }
        else
            {
                // update life
                const currentLife = getElementTextById('current-life');
                const newLife = currentLife -1;
                setElementTextById('current-life',newLife);
                if(newLife === 0)
                    {
                        gameOver();
                        const totalScore = getElementTextById('current-score');
                        setElementTextById('total-score',totalScore);
                        const hightScore = getElementTextById('hight-score');
                        if(hightScore < totalScore)
                            {
                                setElementTextById('hight-score',totalScore);
                            }
                        else
                            {
                                setElementTextById('hight-score',hightScore);
                            }
                    }
            }
    }
document.addEventListener('keyup',handleKeyboardButtonPress);


function continueGame()
    {
        const alphabet = getARandomAlphabet();


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
function gameOver()
    {
        hideElementById('play-ground');
        showElementById('final-score');
    }
function playAgain()
    {
        hideElementById('final-score');
        showElementById('play-ground');

        setElementTextById('current-life', 3);
        setElementTextById('current-score', 0);

        const currentAlphabet =getElementTextById('current-alphabet');
        removeBackgroundColorById(currentAlphabet);
        continueGame();
    }