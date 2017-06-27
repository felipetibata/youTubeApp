import { YoutubePage } from './app.po';

describe('youtube App', () => {
  let page: YoutubePage;

  beforeEach(() => {
    page = new YoutubePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
