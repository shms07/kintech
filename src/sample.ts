interface Event {
  appId: number;
  recordId: number;
  record: kintone.types.SavedFields;
}

(() => {
  kintone.events.on('app.record.detail.show', function (event: Event) {
    const message = event.record.会社名.value;
    console.log(message);
  });
})();
