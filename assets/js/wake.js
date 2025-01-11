const wakeDropdown = document.getElementById("wake-setting");
let wakeLock = null;

async function wakesOn() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    console.error(`wake lock acquisition failed: ${err.name}, ${err.message}`);
  }
  console.log('wake on (or silent failure)');
  console.log(wakeLock);
}

function wakesOff() {
  wakeLock.release().then(() => {
    wakeLock = null;
  });
  window.localStorage.removeItem('_ljrWake');
  console.log('wake off (or silent failure)');
  console.log(wakeLock);
}

function wakesOnSitewide() {
  window.localStorage.setItem('_ljrWake', '1');
  wakesOn();
}

if(window.localStorage.getItem('_ljrWake') === '1') {
  wakesOn();
  wakeDropdown.value = 'on-sitewide';
}

wakeDropdown.addEventListener("change", function() {
  switch (this.value) {
    case 'off':
      wakesOff();
      break;
    case 'on-local':
      wakesOn();
      window.localStorage.removeItem('_ljrWake');
      break;
    case 'on-sitewide':
      wakesOnSitewide();
      break;
    default:
      console.log('unknown wake option ' + this.value);
      break;
  }
});

document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakesOn();
  }
});