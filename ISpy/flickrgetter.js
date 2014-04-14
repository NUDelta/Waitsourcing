var buswait = new Array();


// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr.
 *
 * @type {string}
 */
var query = new Array();
query[0] = 'car';
query[1] = 'car';
query[2] = 'car';
query[3] = 'car';
query[4] = 'car';
query[5] = 'car';
query[6] = 'car';
query[7] = 'car';
query[8] = 'bmw';


var randomnumber = Math.floor(Math.random() * (6 - 0 + 2)) + 0;

var PhotoGenerator = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * See http://www.flickr.com/services/api/flickr.photos.search.html for
   * details about the construction of this URL.
   *
   * @type {string}
   * @private
   */
  searchOnFlickr_: 'https://secure.flickr.com/services/rest/?' +
      'method=flickr.photos.search&' +
      'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
      'text=' + encodeURIComponent(query[8]) + '&' +
      'safe_search=1&' +
      'content_type=1&' +
      'sort=interestingness-desc&' +
      'per_page=10',

  /**
   * Sends an XHR GET request to grab photos of lots and lots of photos. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  requestPhotos: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnFlickr_, true);
    req.onload = this.showPhotos_.bind(this);
    req.send(null);
  },

  /**
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos_: function (e) {
	var Photos = e.target.responseXML.querySelectorAll('photo');
	//$('#lookup').html(query[8]);
	for (var i = 0; i < Photos.length; i++) {
		buswait[i] = this.constructPhotoURL_(Photos[i]);
		$('#pic' + i).attr('src',buswait[i]);
    }
  },


  constructPhotoURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};



$(document).ready(function()
{
	PhotoGenerator.requestPhotos();
	$('body').hide().fadeIn(1000);

});