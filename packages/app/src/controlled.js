if ('serviceWorker' in navigator) {
  navigator.serviceWorker.onmessage = function onmessage(evt) {
    const message = JSON.parse(evt.data);

    if (message.type !== 'refresh') return;

    window.location.reload(true);
  };
}
