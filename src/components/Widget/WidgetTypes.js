import ImageWidget from './ImageWidget';
import MiniGameWidget from './MiniGameWidget';
import TextWidget from './TextWidget';
import VideoWidget from './VideoWidget';

const WIDGET_TYPES = {
  Description: {
    WidgetComponent: TextWidget,
    label: 'متن',
    backendType: 'Description',
  },
  Image: {
    WidgetComponent: ImageWidget,
    label: 'عکس',
    backendType: 'Image',
  },
  Video: {
    WidgetComponent: VideoWidget,
    label: 'فیلم',
    backendType: 'Video',
  },
  Game: {
    WidgetComponent: MiniGameWidget,
    label: 'بازی',
    backendType: 'Game',
  },
};

export default WIDGET_TYPES;
