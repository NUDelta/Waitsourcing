var buswait = new Array();


// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens, puppies, flower, tree etc.. 
 *
 * @type {string}
 */
var query = new Array();
query[0] = 'bus';
query[1] = 'cow';
query[2] = 'building';
query[3] = 'car';

var randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0; 

var kittenGenerator = {
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
      'text=' + encodeURIComponent(query[randomnumber]) + '&' +
      'safe_search=1&' +
      'content_type=1&' +
      'sort=interestingness-desc&' +
      'per_page=4',

  /**
   * Sends an XHR GET request to grab photos of lots and lots of photos. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  requestKittens: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnFlickr_, true);
    req.onload = this.showPhotos_.bind(this);
    req.send(null);
  },

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos_: function (e) {
    var kittens = e.target.responseXML.querySelectorAll('photo');
    for (var i = 0; i < kittens.length; i++) {

    buswait[i] = this.constructKittenURL_(kittens[i]);
    $('#pic'+i).attr('src', buswait[i]);
/*
    var img = document.createElement('img');
  img.src = this.constructKittenURL_(kittens[i]);    
    img.setAttribute('alt', kittens[i].getAttribute('title')); 
  img.id = i;
    document.body.appendChild(img); 

    var link = document.getElementById(i);

  console.log("hi" + link);
    // onClick's logic below:
    link.addEventListener('click', function() {
        document.getElementById("demo").innerHTML="Thank you!";
    console.log(i);
    //chrome.extension.getBackgroundPage().window.location.reload();
   }); */

    }
  },

  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
  constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};



$(document).ready(function()
{

  kittenGenerator.requestKittens();
  $('body').hide().fadeIn(1000);
  $('#piconeone').attr('src', buswait[0]);

});





