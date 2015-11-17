import $ from 'jquery';

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'YzuFDxy3Cq6E69tCvgkB0t3Zzbt0MoIZWQ6J56s9');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'nAtfdK3VtK2ecY302h2MRRAW1QHZV1T1OOglkVFP');
      
    }
  }
});
