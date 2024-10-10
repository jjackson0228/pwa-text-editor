const butInstall = document.getElementById('buttonInstall');
console.log(butInstall);
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

// Hide the install button by default until the 'beforeinstallprompt' event is fired
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  console.log('beforeinstallprompt', event);
  // Store the event so it can be triggered later
  window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  console.log('button click');
  if (!promptEvent) {
    // No event, exit early
    return;
  }

  // Show the installation prompt to the user
  promptEvent.prompt();

  // Wait for the user's response to the prompt
  const result = await promptEvent.userChoice;

  console.log('User response to the install prompt:', result);

  // Clear the deferred prompt variable since it can only be used once
  window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully!', event);

  // Clear the deferred prompt
  window.deferredPrompt = null;
});
