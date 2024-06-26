import type { Meta } from '@storybook/react';
import { FullProductInfo, FullProductInfoProps } from './FullProductInfo';

const meta: Meta<typeof FullProductInfo> = {
  title: 'features/FullProductInfo',
  component: FullProductInfo,
  tags: ['autodocs'],
  argTypes: {
    cost: {
      type: 'number',
      description: 'Стоимость товара',
    },
    images: {
      description: 'Изображения товара',
    },
    categoryName: {
      type: 'string',
      description: 'Наименование категории',
    },
    title: {
      type: 'string',
      description: 'Наименование товара',
    },
    description: {
      type: 'string',
      description: 'Описание товара',
    },
  },
};

export default meta;

export const Primary: { args: FullProductInfoProps } = {
  args: {
    cost: 1140,
    images: [
      'https://www.podpisnie.ru/upload/resize_cache/iblock/ec5/1263_576_1/l53d55o3h11s8wp9gqti6w2417cmh187.jpg',
      'https://www.podpisnie.ru/upload/resize_cache/iblock/1b1/1263_576_1/obxlgcdq7n63kghcnnj8cop2o2p34d4z.jpg',
      'https://www.podpisnie.ru/upload/resize_cache/iblock/a9b/1263_576_1/22vlhjzo2jhnmxfb8j8vrta9syzq1skx.jpg',
    ],
    title: 'Лисьи Броды: роман',
    categoryName: 'Художественная литература',
    description:
      '«Лисьи Броды» — новый роман Анны Старобинец, приключенческий мистический триллер про затерянное на русско-маньчжурской границе проклятое место, ' +
      'в котором китайские лисы-оборотни встречаются с советскими офицерами, а беглые зэки — с даосом, владеющим тайной бессмертия. ' +
      'Захватывающее и страшное путешествие в сердце тьмы, где каждый находит то, что он заслужил: кто-то — любовь, иные — смерть, ' +
      'и абсолютно все — свою единственно верную, предначертанную то ли богом, то ли чертом судьбу.',
  },
};
