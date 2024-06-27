'use strict';
(() => {
  kintone.events.on('app.record.detail.show', function (event) {
    const message = event.record.会社名.value;
    console.log(message);
  });
})();
