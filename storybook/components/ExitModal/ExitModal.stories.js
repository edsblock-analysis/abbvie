import './ExitModal.css';

export default {
  title: 'Components/ExitModal',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** All pages — triggered by clicking external links on [abbvie.com](https://www.abbvie.com/)\n\nModal dialog warning users they are leaving AbbVie website. "No, I disagree" closes modal, "Yes, I agree" navigates to external URL. Present on all 321 pages.',
      },
    },
  },
};

export const DefaultModal = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="exit-modal-overlay" style="position: relative; min-height: 400px;">
      <div class="exit-modal-dialog">
        <h2 class="exit-modal-title">You are about to leave the AbbVie website</h2>
        <p class="exit-modal-body">
          The link you clicked will take you to a site maintained by a third party, who is solely responsible for its content. AbbVie Inc. does not control, influence, or endorse this site, and the opinions, claims, or comments expressed on this site should not be attributed to AbbVie Inc.
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
    window.alert('Navigating to external site...');
  });

  return wrapper;
};
