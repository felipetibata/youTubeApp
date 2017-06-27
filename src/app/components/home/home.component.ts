import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'app/services/youtube.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  video: any;
  constructor(private _ys: YoutubeService) {
    this._ys.getVideos().subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.video = video;
    $('#modelId').modal('show');
  }
  cerrarModal() {
    this.video = null;
    $('#modelId').on('hidden.bs.modal', pararVideo => this.video = null);
  }

  cargarMas() {
    this._ys.getVideos().subscribe(videos => this.videos.push.apply(this.videos, videos));
    console.log(this._ys.nextPageToken);
  }

}
