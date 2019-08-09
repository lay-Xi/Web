let libIt = () => {
  let story = document.getElementById('story');
  let plural1 = document.getElementById('plural1').value;
  let plural2 = document.getElementById('plural2').value;
  let plural3 = document.getElementById('plural3').value;
  let adjective = document.getElementById('adjective1').value;
  let verb = document.getElementById('verb1').value;

  story.innerHTML = `What happened was not about ${plural1}, it was about
    ${plural2}. It was about ${adjective} ${plural3} and that is why we ${verb}.`;
};

let libButton = document.getElementById('generate');
libButton.addEventListener('click', libIt);
