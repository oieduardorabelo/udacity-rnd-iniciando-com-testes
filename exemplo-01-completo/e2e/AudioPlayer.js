import { Selector } from 'testcafe';
import { getAudioAttr } from './__helpers__';

fixture('AudioPlayer')
    .page('http://localhost:3000');

test('clicking play button', async t => {
    const playButton = Selector('button').nth(0);
    await t.click(playButton).wait(1000);

    const isPaused = await getAudioAttr('paused');
    const isPlaying = isPaused === false;

    await t.expect(isPlaying).ok();
});

test('clicking pause button', async t => {
    const playButton = Selector('button').nth(0);
    await t.click(playButton).wait(1000);

    const isPausedWhenClickedPlay = await getAudioAttr('paused');
    const isPlaying = isPausedWhenClickedPlay === false;

    await t.expect(isPlaying).ok();

    const pauseButton = Selector('button').nth(1);
    await t.click(pauseButton).wait(1000);

    const isPausedWhenClickedPause = await getAudioAttr('paused');

    await t.expect(isPausedWhenClickedPause).ok();
});
