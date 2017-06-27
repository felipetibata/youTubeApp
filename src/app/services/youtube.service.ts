import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {
  youtubeURL: string = 'https://www.googleapis.com/youtube/v3';
  apiKey: string = 'AIzaSyCq2UgTCAFllzluPIyuCoDpjdFApQtcKHU';
  listId: string = 'UUrUaEUx0_xn9dvSnEDiqDyQ';
   nextPageToken: string = '';

  constructor(public http: Http) {

  }

  getVideos() {
    let url = `${this.youtubeURL}/playlistItems`;
    let parametros = new URLSearchParams();
    parametros.set('part', 'snippet');
    parametros.set('maxResults', '10');
    parametros.set('playlistId', this.listId);
    parametros.set('key', this.apiKey);

    if (this.nextPageToken) {
      parametros.set('pageToken', "CAoQAA");
    }

    return this.http.get(url, { search: parametros }).map(respuesta => {
      this.nextPageToken = respuesta.json().nextPageToken;
      console.log(respuesta.json());
      let videos: any[] = [];
      for (let video of respuesta.json().items) {
        let snippet = video.snippet;
        videos.push(video);
      }
      return videos;
    });
  }
}
