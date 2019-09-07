/*global $*/
function showNotification(text, type, timer) {
  $.notify({
    message: text
  }, {
    timer: timer,
    type: type,
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: {
      x: 0,
      y: 9
    },
    // based on default template
    // http://bootstrap-notify.remabledesigns.com
    template: `
      <div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" style="border-radius: 5px;" role="alert">
        <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
        <span data-notify="icon"></span>
        <span data-notify="title">{1}</span>
        <span data-notify="message">{2}</span>
        <div class="progress" data-notify="progressbar">
          <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
        </div>
        <a href="{3}" target="{4}" data-notify="url"></a>
      </div>
      `
  });
}

export {showNotification};
