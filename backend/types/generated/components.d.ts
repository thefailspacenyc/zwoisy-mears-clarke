import type { Schema, Struct } from '@strapi/strapi';

export interface AccessibilityAccessibilityIcons
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_accessibility_icons';
  info: {
    displayName: 'Accessibility_Icons';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediaCredits extends Struct.ComponentSchema {
  collectionName: 'components_media_credits';
  info: {
    displayName: 'Credits';
    icon: 'bulletList';
  };
  attributes: {
    Credit: Schema.Attribute.String;
    Creditee: Schema.Attribute.Blocks;
  };
}

export interface MediaDgsWidget extends Struct.ComponentSchema {
  collectionName: 'components_media_dgs_widgets';
  info: {
    displayName: 'DGS_Widget';
    icon: 'command';
  };
  attributes: {
    Video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_media_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Project_Gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface MediaText extends Struct.ComponentSchema {
  collectionName: 'components_media_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Rich_Text: Schema.Attribute.Blocks;
  };
}

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'Video';
    icon: 'cast';
  };
  attributes: {
    Video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accessibility.accessibility-icons': AccessibilityAccessibilityIcons;
      'media.credits': MediaCredits;
      'media.dgs-widget': MediaDgsWidget;
      'media.gallery': MediaGallery;
      'media.text': MediaText;
      'media.video': MediaVideo;
    }
  }
}
