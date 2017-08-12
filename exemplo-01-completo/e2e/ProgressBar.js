import { Selector } from 'testcafe';
import { getAudioAttr } from './__helpers__';

fixture('ProgressBar')
    .page('http://localhost:3000');

test('manipulating progress bar changes song time', async t => {
    const Progress = Selector('.Progress');

    await t.click(Progress).wait(1000);
    const firstClick = await getAudioAttr('currentTime');

    await t.click(Progress, { offsetX: 40 }).wait(1000);
    const secondClick = await getAudioAttr('currentTime');

    const assertion = secondClick < firstClick;
    await t.expect(assertion).ok();
});
