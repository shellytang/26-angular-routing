require('./gallery.html');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('GalleryController');

  this.title = 'gallery';
}