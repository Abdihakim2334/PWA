const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-info bar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Show the button for installing the PWA
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the button after the prompt has been shown
  butInstall.style.display = 'none';
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User dismissed the installation prompt');
    }
    // Clear the deferredPrompt variable
    deferredPrompt = null;
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});
