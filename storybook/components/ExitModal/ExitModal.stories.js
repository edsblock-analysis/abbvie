import exitModalStyles from './ExitModal.css?raw';

export default {
  title: 'Components/ExitModal',
};

export const DefaultModal = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <style>${exitModalStyles}</style>
    <div class="exit-modal-overlay" style="position: relative; min-height: 400px;">
      <div class="exit-modal-dialog">
        <h2 class="exit-modal-title">You are now leaving this site</h2>
        <p class="exit-modal-body">
          You are about to leave this website. The site you are navigating to is not owned or controlled by us. We are not responsible for the content or privacy practices of the linked site. Do you wish to continue?
        </p>
        <div class="exit-modal-buttons">
          <button class="exit-modal-btn-disagree">Stay on this site</button>
          <button class="exit-modal-btn-agree">Continue</button>
        </div>
      </div>
    </div>
  `;
  return wrapper;
};
