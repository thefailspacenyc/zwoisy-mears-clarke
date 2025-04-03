import type { Schema, Struct } from '@strapi/strapi';

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
      'media.credits': MediaCredits;
      'media.video': MediaVideo;
    }
  }
}
