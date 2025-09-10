document.addEventListener('DOMContentLoaded', function() {
  const forgotPasswordLink = document.getElementById('forgot-password-link');

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      showResetPasswordModal();
    });
  }

  function showResetPasswordModal() {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'reset-password-modal-overlay';
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.background = 'linear-gradient(135deg, #4d0553, #5a087a)';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.width = '90%';
    modalContent.style.maxWidth = '400px';
    modalContent.style.color = '#fcf5f5';
    modalContent.style.boxShadow = '0 0 15px rgba(240, 237, 237, 0.7)';
    modalContent.style.position = 'relative';

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '15px';
    closeBtn.style.fontSize = '28px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#ff4e50';
    closeBtn.addEventListener('click', function() {
      document.body.removeChild(modalOverlay);
    });

    const title = document.createElement('h2');
    title.textContent = 'Reset Password';

    const form = document.createElement('form');
    form.id = 'reset-password-form';

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'reset-email');
    emailLabel.textContent = 'Enter your email address:';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'reset-email';
    emailInput.name = 'reset-email';
    emailInput.required = true;
    emailInput.style.width = '100%';
    emailInput.style.padding = '10px';
    emailInput.style.margin = '10px 0 20px 0';
    emailInput.style.borderRadius = '5px';
    emailInput.style.border = 'none';
    emailInput.style.fontSize = '16px';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Reset Link';
    submitBtn.style.background = 'linear-gradient(90deg, #ff4e50, #f9d423)';
    submitBtn.style.border = 'none';
    submitBtn.style.borderRadius = '25px';
    submitBtn.style.color = '#1a0529';
    submitBtn.style.fontWeight = '700';
    submitBtn.style.fontSize = '16px';
    submitBtn.style.padding = '12px 0';
    submitBtn.style.cursor = 'pointer';
    submitBtn.style.width = '100%';
    submitBtn.style.boxShadow = '0 4px 15px rgba(255, 78, 80, 0.7)';
    submitBtn.style.transition = 'background 0.3s ease';

    submitBtn.addEventListener('mouseover', () => {
      submitBtn.style.background = 'linear-gradient(90deg, #f9d423, #ff4e50)';
    });
    submitBtn.addEventListener('mouseout', () => {
      submitBtn.style.background = 'linear-gradient(90deg, #ff4e50, #f9d423)';
    });

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(submitBtn);

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        alert('If this email is registered, a reset link will be sent.');
        document.body.removeChild(modalOverlay);
      } else {
        alert('Please enter a valid email address.');
      }
    });

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(form);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
  }

  function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
