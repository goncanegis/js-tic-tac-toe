const openPlayerConfig = (e) => {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
};

const savePlayerConfig = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get('playername').trim();

  // form validation
  if (!enteredPlayername) {
    e.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
};
