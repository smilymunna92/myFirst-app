import { An2Page } from './app.po';

describe('an2 App', () => {
  let page: An2Page;

  beforeEach(() => {
    page = new An2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
