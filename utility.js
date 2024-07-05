function hideElementById(ElementId)
    {
        const element = document.getElementById(ElementId);
        element.classList.add('hidden');
    }
function showElementById(ElementId)
    {
        const element = document.getElementById(ElementId);
        element.classList.remove('hidden');
    }
    
function setBackgroundColorById(elementId)
    {
        const element = document.getElementById(elementId)
        element.classList.add('bg-orange-400');
    }

function getARandomAlphabet()
    {
        // get or Create an alphabet array
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');

        // get a random index between 0-25
        const randomNumber = Math.random()*25;
        const index = Math.round(randomNumber);


        const alphabet = alphabets[index];
        return alphabet;

    }