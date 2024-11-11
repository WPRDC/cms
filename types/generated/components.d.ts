import type { Struct, Schema } from '@strapi/strapi';

export interface NavbarSubMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_menu_items';
  info: {
    displayName: 'subMenuItem';
    description: '';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', false>;
    deatailLine: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    icon: Schema.Attribute.Media<'images'>;
    subItems: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface NavbarNavbarLogo extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_logos';
  info: {
    displayName: 'navbarLogo';
  };
  attributes: {
    lightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    darkImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    homeURL: Schema.Attribute.String;
    altText: Schema.Attribute.String;
  };
}

export interface NavbarNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navbar_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_metadata';
  info: {
    displayName: 'Metadata';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface HomePageTiles extends Struct.ComponentSchema {
  collectionName: 'components_home_page_tiles';
  info: {
    displayName: 'tiles';
    description: '';
  };
  attributes: {
    tiles: Schema.Attribute.Component<'elements.tile', true>;
  };
}

export interface HomePageSearchSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_search_sections';
  info: {
    displayName: 'searchSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    belowSearchText: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface HomePageLowerSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_lower_sections';
  info: {
    displayName: 'lowerSection';
  };
  attributes: {
    header: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    sideImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageCollaborators extends Struct.ComponentSchema {
  collectionName: 'components_home_page_collaborators';
  info: {
    displayName: 'collaborators';
    description: '';
  };
  attributes: {
    partners: Schema.Attribute.Component<'elements.partner', true>;
    publishers: Schema.Attribute.Component<'elements.partner', true>;
    header: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    callToActionText: Schema.Attribute.String;
    button: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface ElementsTile extends Struct.ComponentSchema {
  collectionName: 'components_elements_tiles';
  info: {
    displayName: 'tile';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ElementsPartner extends Struct.ComponentSchema {
  collectionName: 'components_elements_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    partnerURL: Schema.Attribute.String;
    partnerName: Schema.Attribute.String;
    partnerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    darkImage: Schema.Attribute.Media<'images'>;
    altText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    category: Schema.Attribute.Enumeration<
      ['repo', 'documentation', 'dataset', 'team-member']
    >;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    altText: Schema.Attribute.String;
    caption: Schema.Attribute.RichText;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    highlight: Schema.Attribute.Boolean;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Image Section';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContentBodyText extends Struct.ComponentSchema {
  collectionName: 'components_content_body_texts';
  info: {
    displayName: 'Text Section';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navbar.sub-menu-item': NavbarSubMenuItem;
      'navbar.navbar-logo': NavbarNavbarLogo;
      'navbar.nav-link': NavbarNavLink;
      'shared.seo': SharedSeo;
      'shared.metadata': SharedMetadata;
      'shared.meta-social': SharedMetaSocial;
      'home-page.tiles': HomePageTiles;
      'home-page.search-section': HomePageSearchSection;
      'home-page.lower-section': HomePageLowerSection;
      'home-page.collaborators': HomePageCollaborators;
      'elements.tile': ElementsTile;
      'elements.partner': ElementsPartner;
      'elements.logo': ElementsLogo;
      'elements.link': ElementsLink;
      'elements.image': ElementsImage;
      'elements.button': ElementsButton;
      'content.image': ContentImage;
      'content.body-text': ContentBodyText;
    }
  }
}
