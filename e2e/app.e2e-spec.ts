import { HogePage } from './app.po';

describe('hoge App', () => {
  let page: HogePage;

  beforeEach(() => {
    page = new HogePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
