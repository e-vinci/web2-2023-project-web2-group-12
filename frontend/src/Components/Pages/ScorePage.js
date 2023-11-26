import { clearPage } from '../../utils/render';

const ScorePage = () => {
    clearPage();
    renderScoreForm();
  };

function renderScoreForm() {
const main = document.querySelector('main');

main.innerHTML = `
<div class="container col-3 bg-black px-5 py-4 rounded-5 bg-opacity-50 text-center justify-content-center">
    <div class="bg-warning p-2 rounded mt-2 mb-4 fs-2 ">Scores</div>
    <div>
        <div class="mt-5">
            <div class="d-flex justify-content-between fs-5">
                <p class="col-sm-6 py-1 rounded-3 text-white">Username</p>
                <p class="bg-lavender col-5 rounded-3">Ishou</p>
            </div>
            <div class="d-flex justify-content-between fs-5">
            <p class="col-sm-6 py-1 rounded-3 text-white">Games played</p>
            <p class="bg-lavender col-5 rounded-3">100</p>
            </div>
            <div class="d-flex justify-content-between fs-5">
            <p class="col-sm-6 py-1 rounded-3 text-white">Games won</p>
            <p class="bg-lavender col-5 rounded-3">0</p>
            </div>
            <div class="d-flex justify-content-between fs-5">
            <p class="col-sm-6 py-1 rounded-3 text-white">Games lost</p>
            <p class="bg-lavender col-5 rounded-3">100</p>
        </div>
        </div>
    </div>
</div>`;
}

export default ScorePage;
