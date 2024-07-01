'use strict';
(() => {
  kintone.events.on('app.record.detail.show', function (event) {
    const record = event.record;
    let message = record.TEL.value;
    message = record.FAX.value;
    console.log(message);
  });
})();
