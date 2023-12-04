
import { setAuthenticatedUser2 } from '../../utils/auths';
import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';


const SecondPlayerPage = () => {
    clearPage();
    renderSecondPlayerPage();
    const form = document.querySelector('#secondPlayerForm');
    form.addEventListener('submit', onLogin); 
    startGame();
  };

function renderSecondPlayerPage() {
    const main = document.querySelector('main');

    main.innerHTML = `
    <div class="container bg-black px-5 py-4 rounded-5 bg-opacity-50 col-3">
      <button class="btn btn-warning mt-2 col-12 py-2 rounded-5 start-game-btn">
        Play with an anonymous player
      </button>

      <div class="d-flex my-3 col-12 align-items-center">
        <span class="bg-warning col h-4px"></span>
        <b class="text-center text-light col-2 fs-5"> OR</b>
        <span class="bg-warning col h-4px"></span>
      </div>
      
      <form class="text-center text-light" id="secondPlayerForm">
          <div class="d-flex flex-column form-group">
            <label for="username" class="form-label">Username</label>
            <input class="bg-lavender form-control mb-3" type="text"  id="username" name="username" required>
            <label for="password" class="form-label">Password</label>
            <input class="bg-lavender form-control mb-2" type="password"  id="password" name="password" required>
          </div>

          <button type="submit" class="btn btn-warning mt-3 col-10 rounded-5">Play with this second player</button>
      </form>
    </div>
    `;

}


async function onLogin(e) {

  e.preventDefault();


  const username = document.querySelector('#username').value;

  const password = document.querySelector('#password').value;


  const options = {

    method: 'POST',

    body: JSON.stringify({

      username,

      password,

    }),

    headers: {

      'Content-Type': 'application/json',

    },

  };


  const response = await fetch('/api/auths/loginSecondPlayer', options);


  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);


  const authenticatedUser2 = await response.json();


 // console.log('Authenticated user : ', authenticatedUser);


  setAuthenticatedUser2(authenticatedUser2);

  Navbar()
  
  Navigate('/game');
}

function startGame() {
  const btn = document.querySelector('.start-game-btn');
  btn.addEventListener('click', () =>{
    Navigate('/game');
  });
  
}

export default SecondPlayerPage;