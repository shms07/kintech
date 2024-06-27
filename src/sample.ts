interface Event {
  appId: number;
  recordId: number;
  record: kintone.types.SavedFields;
}

(() => {
  kintone.events.on('app.record.detail.show', function (event: Event) {
    const record = event.record;
    const message = record.TEL.value;
    console.log(message);
  });
})();
