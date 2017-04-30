import { DemoRankPage } from './app.po';

describe('demo-rank App', () => {
  let page: DemoRankPage;

  beforeEach(() => {
    page = new DemoRankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
