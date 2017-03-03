import { ApptablePage } from './app.po';

describe('apptable App', () => {
  let page: ApptablePage;

  beforeEach(() => {
    page = new ApptablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
