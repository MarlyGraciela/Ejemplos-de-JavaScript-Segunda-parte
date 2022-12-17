class Start {
  constructor(albumView) {
    this.albumView = albumView;
    this.photos = [];
    this.loadPhotos();
  }

  loadPhotos(){
    for(let index in PHOTO_LIST){
      const animal = new AlbumView(this.albumView, PHOTO_LIST[index]);
      this.photos.push(animal);
    }
  }
}
