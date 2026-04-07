import './ExitModal.css';

export default {
  title: 'Components/ExitModal',
};

export const DefaultModal = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="exit-modal-overlay" style="position: relative; min-height: 400px;">
      <div class="exit-modal-dialog">
        <h2 class="exit-modal-title">You are about to leave the AbbVie website</h2>
        <p class="exit-modal-body">
          The link you clicked will take you to a site maintained by a third party, which is solely responsible for its content. AbbVie does not control, influence, or endorse this site, and the opinions, claims, or comments expressed on this site should not be attributed to AbbVie. AbbVie accepts no responsibility for the content of any third-party site or for the use of any personal information you may provide while visiting this site.
        </p>
        <div class="exit-modal-buttons">
          <button class="exit-modal-btn-disagree">No, I disagree</button>
          <button class="exit-modal-btn-agree">Yes, I agree</button>
        </div>
      </div>
    </div>
  `;

  const overlay = wrapper.querySelector('.exit-modal-overlay');
  const disagreeBtn = wrapper.querySelector('.exit-modal-btn-disagree');
  const agreeBtn = wrapper.querySelector('.exit-modal-btn-agree');

  disagreeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  agreeBtn.addEventListener('click', () => {
    window.alert('You have agreed to leave the AbbVie website. In a live environment, you would now be redirected to the third-party site.');
  });

  return wrapper;
};
