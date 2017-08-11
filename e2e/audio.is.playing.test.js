import { Selector, ClientFunction } from 'testcafe';

fixture `Super Mario Medley`
    .page `http://localhost:3000`;

test('it plays the theme song', async t => {
    await t.click('button').wait(1000);

    const isPaused = await ClientFunction(() => document.getElementsByTagName('audio')[0].paused)();
    const isPlaying = isPaused === false;

    await t.expect(isPlaying).ok();
});
