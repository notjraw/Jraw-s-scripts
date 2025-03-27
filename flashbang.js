function effect() {
  const sorryMessage = document.createElement('div');
  sorryMessage.style.position = 'fixed';
  sorryMessage.style.top = '50%';
  sorryMessage.style.left = '50%';
  sorryMessage.style.transform = 'translate(-50%, -50%)';
  sorryMessage.style.fontSize = '30px';
  sorryMessage.style.color = 'black';
  sorryMessage.style.zIndex = '9999';
  sorryMessage.style.backgroundColor = 'white';
  sorryMessage.style.padding = '20px';
  sorryMessage.style.borderRadius = '10px';
  sorryMessage.innerText = 'Theres no way out';

  document.body.appendChild(sorryMessage);

  setTimeout(() => {
    document.body.removeChild(sorryMessage);

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'white';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'opacity 0.05s ease-out';

    document.body.appendChild(overlay);

    setInterval(() => {
      overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
    }, 50);

    setInterval(() => {
      document.body.removeChild(overlay);
      overlay.style.opacity = '1';
      document.body.appendChild(overlay);
    }, 500);
  }, 2000); 
}

effect();
