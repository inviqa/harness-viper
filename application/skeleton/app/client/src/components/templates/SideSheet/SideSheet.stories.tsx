import React from 'react';
import { Button } from 'theme-ui';
import SideSheet, { Props } from './SideSheet';

const Content = (): JSX.Element => (
  <div>
    <p>
      <Button type="button">Focusable button</Button>
    </p>
    <p>
      &quot;As I knew that he wanted to get back to Transylvania, I felt sure that he must go by the Danube mouth; or by
      somewhere in the Black Sea, since by that way he come. It was a dreary blank that was before us. Omne ignotum pro
      magnifico; and so with heavy hearts we start to find what ships leave for the Black Sea last night. He was in
      sailing ship, since Madam Mina tell of sails being set. These not so important as to go in your list of the
      shipping in the Times, and so we go, by suggestion of Lord Godalming, to your Lloyd&apos;s, where are note of all
      ships that sail, however so small. There we find that only one Black-Sea-bound ship go out with the tide. She is
      the Czarina Catherine, and she sail from Doolittle&apos;s Wharf for Varna, and thence on to other parts and up the
      Danube. &apos;Soh!&apos; said I, &apos;this is the ship whereon is the Count.&apos; So off we go to
      Doolittle&apos;s Wharf, and there we find a man in an office of wood so small that the man look bigger than the
      office. From him we inquire of the goings of the Czarina Catherine. He swear much, and he red face and loud of
      voice, but he good fellow all the same; and when Quincey give him something from his pocket which crackle as he
      roll it up, and put it in a so small bag which he have hid deep in his clothing, he still better fellow and humble
      servant to us. He come with us, and ask many men who are rough and hot; these be better fellows too when they have
      been no more thirsty. They say much of blood and bloom, and of others which I comprehend not, though I guess what
      they mean; but nevertheless they tell us all things which we want to know.
    </p>

    <p>
      &quot;They make known to us among them, how last afternoon at about five o&apos;clock comes a man so hurry. A tall
      man, thin and pale, with high nose and teeth so white, and eyes that seem to be burning. That he be all in black,
      except that he have a hat of straw which suit not him or the time. That he scatter his money in making quick
      inquiry as to what ship sails for the Black Sea and for where. Some took him to the office and then to the ship,
      where he will not go aboard but halt at shore end of gang-plank, and ask that the captain come to him. The captain
      come, when told that he will be pay well; and though he swear much at the first he agree to term. Then the thin
      man go and some one tell him where horse and cart can be hired. He go there and soon he come again, himself
      driving cart on which a great box; this he himself lift down, though it take several to put it on truck for the
      ship. He give much talk to captain as to how and where his box is to be place; but the captain like it not and
      swear at him in many tongues, and tell him that if he like he can come and see where it shall be. But he say
      &apos;no&apos;; that he come not yet, for that he have much to do. Whereupon the captain tell him that he had
      better be quick--with blood--for that his ship will leave the place--of blood--before the turn of the tide--with
      blood. Then the thin man smile and say that of course he must go when he think fit; but he will be surprise if he
      go quite so soon. The captain swear again, polyglot, and the thin man make him bow, and thank him, and say that he
      will so far intrude on his kindness as to come aboard before the sailing. Final the captain, more red than ever,
      and in more tongues tell him that he doesn&apos;t want no Frenchmen--with bloom upon them and also with blood--in
      his ship--with blood on her also. And so, after asking where there might be close at hand a ship where he might
      purchase ship forms, he departed.
    </p>
    <p>
      <Button type="button">Another focusable button</Button>
    </p>
  </div>
);

export default {
  component: SideSheet,
  title: 'templates/SideSheet'
};

export const Default = (args: Props): JSX.Element => (
  <>
    <p>Background content</p>
    <p>
      <Button type="button">Background focusable button</Button>
    </p>
    <SideSheet {...args}>
      <Content />
    </SideSheet>
    <Content />
  </>
);
Default.argTypes = {
  alignment: { control: { type: 'inline-radio', options: ['left', 'right'] } }
};
