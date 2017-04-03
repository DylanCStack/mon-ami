import { MonAmiPage } from './app.po';

describe('mon-ami App', function() {
  let page: MonAmiPage;

  beforeEach(() => {
    page = new MonAmiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
