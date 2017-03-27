import { DIDemoPage } from './app.po';

describe('di-demo App', () => {
  let page: DIDemoPage;

  beforeEach(() => {
    page = new DIDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
