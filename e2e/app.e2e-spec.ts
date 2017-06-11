import { CinemarkPage } from './app.po';

describe('cinemark App', () => {
  let page: CinemarkPage;

  beforeEach(() => {
    page = new CinemarkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
