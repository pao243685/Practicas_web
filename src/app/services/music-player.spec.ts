import { TestBed } from '@angular/core/testing';

import { MusicPlayer } from './music-player';

describe('MusicPlayer', () => {
  let service: MusicPlayer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicPlayer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
