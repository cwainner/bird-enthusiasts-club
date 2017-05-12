import { BirdEnthusiastsClubPage } from './app.po';

describe('bird-enthusiasts-club App', () => {
  let page: BirdEnthusiastsClubPage;

  beforeEach(() => {
    page = new BirdEnthusiastsClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
