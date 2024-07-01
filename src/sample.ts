interface Event {
  appId: number;
  recordId: number;
  record: kintone.types.SavedFields;
}

(() => {
  kintone.events.on('app.record.detail.show', function (event: Event) {
    const record = event.record;
    let message = record.TEL.value;
    message = record.FAX.value;
    console.log(message);
  });
})();
