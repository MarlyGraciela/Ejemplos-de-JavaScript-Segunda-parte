class AlbumView {
  constructor(album, photosSrc){
    this.album = album;
    this.photosSrc = photosSrc;
    this.imageAlbum = null;
    this.imageModal = null;
    this.enlargePhoto = this.enlargePhoto.bind(this);
    this.shortenPhoto = this.shortenPhoto.bind(this);

    this.modalView = document.querySelector('#modal-view');

    this.createImage();

    this.imageAlbum.addEventListener('click', this.enlargePhoto);
    this.modalView.addEventListener('click', this.shortenPhoto);
  }

  createImage(){
    this.imageAlbum = document.createElement('img');
    this.imageAlbum.src = this.photosSrc;

    this.album.appendChild(this.imageAlbum);
  }

  enlargePhoto(event){
    document.body.classList.add('no-scroll');

    this.imageModal = document.createElement('img');
    this.imageModal.src = this.photosSrc;

    this.modalView.appendChild(this.imageModal);
    this.modalView.classList.remove('hidden');
  }

  shortenPhoto(event){
    document.body.classList.remove('no-scroll');
    this.modalView.classList.add('hidden');
    this.modalView.innerHTML = '';
  }
}
