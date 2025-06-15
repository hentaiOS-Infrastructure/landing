import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig, CollectionConfig } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { UsersIcon } from '@heroicons/react/24/outline'

// Removed import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: process.env.NEXT_PUBLIC_SERVER_URL,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

const FeaturedBuilds: CollectionConfig = {
  slug: 'featured-builds',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Everyone can read
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title (for internal CMS use and optional display)',
    },
    {
      name: 'image', // Renamed from imageSrc for clarity with upload type
      type: 'upload',
      relationTo: 'media', // Relate to the 'media' collection
      label: 'Featured Image',
      required: true,
    },
    {
      name: 'isFullImageHighlight',
      type: 'checkbox',
      label: 'Full Image Highlight Mode',
      admin: {
        description: 'If checked, this build will display as a full image link, hiding description and button.',
      },
      required: true,
      defaultValue: false,
    },
    // Removed altText field as it's now part of the Media collection
    {
      name: 'description',
      type: 'richText',
      label: 'Description Content (for Standard mode)',
      // required: true, // No longer required for fullImageHighlight
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Link URL (for whole card in Full Image mode, or button in Standard mode)',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text (for Standard mode)',
      defaultValue: 'Learn More',
      // required: true, // No longer required for fullImageHighlight
    },
  ],
};

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    read: () => true, // Everyone can read uploaded files
  },
  upload: {
    staticDir: 'media', // Directory to store files locally
    // If you want to serve files from a CDN or different URL, configure staticURL here
    // staticURL: '/media',
    imageSizes: [ // Optional: define image sizes for automatic resizing
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving it out, Payload will auto-scale the height to maintain aspect ratio
        height: undefined,
        position: 'centre',
      },
      {
        name: 'banner',
        width: 1280,
        height: 520,
        position: 'centre',
      }
    ],
    adminThumbnail: 'thumbnail', // Which image size to use for admin panel thumbnails
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'], // Allowed MIME types
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
    },
    // You can add more fields here if needed, like a caption
  ],
};

const ContentCards: CollectionConfig = {
  slug: 'content-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'cardIdentifier', 'sortOrder', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'cardIdentifier',
      type: 'text',
      label: 'Card Identifier (e.g., "blog", "wiki")',
      required: true,
      unique: true,
      admin: {
        description: 'A unique slug to identify this card programmatically.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link URL',
      required: true,
    },
    {
      name: 'cardIcon',
      label: 'Card Icon (Optional)',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional icon to display at the top of the card.',
      },
    },
    {
      name: 'backgroundImage',
      label: 'Background Image (Optional)',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional background image for the card.',
      },
    },
    // Optional styling fields - can be expanded
    {
      name: 'backgroundColorClass',
      type: 'text',
      label: 'Background Color Class (e.g., bg-hosPink)',
      admin: {
        description: 'Tailwind CSS class for the card background.',
      },
    },
    {
      name: 'textColorClass',
      type: 'text',
      label: 'Text Color Class (e.g., text-white)',
      admin: {
        description: 'Tailwind CSS class for the card text.',
      },
    },
    {
      name: 'borderColorClass',
      type: 'text',
      label: 'Border Color Class (e.g., border-hosPink)',
      admin: {
        description: 'Tailwind CSS class for the card border.',
      },
    },
    {
      name: 'buttonCustomClasses',
      type: 'text',
      label: 'Button Custom CSS Classes',
      admin: {
        description: 'Additional Tailwind CSS classes for the button, e.g., border-hosPink text-hosPink group-hover:bg-hosPink group-hover:text-white',
      }
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sort Order',
      admin: {
        position: 'sidebar',
        description: 'A number to determine the display order. Lower numbers appear first.',
      },
      defaultValue: 0,
    }
  ],
};

const Banners: CollectionConfig = {
  slug: 'banners',
  admin: {
    useAsTitle: 'identifier',
    defaultColumns: ['identifier', 'heading', 'enabled', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'identifier',
      type: 'text',
      label: 'Identifier',
      required: true,
      unique: true,
      admin: {
        description: 'A unique slug to identify this banner (e.g., "main-landing-banner").',
      },
    },
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading (Optional)',
    },
    {
      name: 'description', // Corresponds to 'desc' in banner.ts
      type: 'textarea',
      label: 'Description (Optional)',
    },
    {
      name: 'bannerImage',
      label: 'Banner Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the image for this banner. Recommended size: 1280x520.',
      },
    },
    {
      name: 'linkURL',
      type: 'text',
      label: 'Link URL (Optional)',
      admin: {
        description: 'If provided, the banner image will be a link to this URL.',
      },
    }
  ],
};

const NavigationLinks: CollectionConfig = {
  slug: 'nav-links',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'order', 'href'],
    description: 'Manage navigation links for different parts of the site like navbar or footer.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Link Title',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      label: 'Link URL (href)',
      required: true,
      admin: {
        description: 'Enter the full URL for external links (e.g., https://example.com) or a relative path for internal links (e.g., /about).',
      },
    },
    {
      name: 'location',
      type: 'select',
      label: 'Link Location',
      options: [
        { label: 'Navbar', value: 'navbar' },
        { label: 'Footer - Column 1', value: 'footer_col1' }, // Example for footer
        { label: 'Footer - Column 2', value: 'footer_col2' }, // Example for footer
        // Add other locations as needed
      ],
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sort Order',
      admin: {
        description: 'A number to determine the display order within its location. Lower numbers appear first.',
        position: 'sidebar',
      },
      defaultValue: 0,
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in New Tab?',
      defaultValue: false,
    },
    {
      name: 'isColumnHeader',
      type: 'checkbox',
      label: 'Is this a Column Header?',
      admin: {
        description: 'If checked, this item will be styled as a header for a list of links (e.g., in the footer). The "Link URL" will be ignored.',
        position: 'sidebar',
      },
      defaultValue: false,
    }
  ],
};

const ActionCards: CollectionConfig = {
  slug: 'action-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'href', 'order', 'updatedAt'],
    description: 'Manage small action cards with an icon and a link.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Link Title',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      label: 'Link URL (href)',
      required: true,
    },
    {
      name: 'icon',
      label: 'Icon (Optional)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sort Order',
      admin: {
        position: 'sidebar',
        description: 'A number to determine the display order. Lower numbers appear first.',
      },
      defaultValue: 0,
    },
  ],
};

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  // Define and configure your collections in this array
  collections: [Pages, FeaturedBuilds, Media, ContentCards, Banners, NavigationLinks, ActionCards], // Added ActionCards
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  admin: {
    importMap: {
      baseDir: "@", // use whatever your Next.js src/ alias is set to
    },
  },
  plugins: [
    seoPlugin({
      collections: ['pages', 'featured-builds', 'content-cards', 'banners'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `The helluvaOS Project | ${doc?.meta?.title?.value ?? ''}`,
      generateURL: ({ doc }) => `https://helluvaOS.com/${doc?.slug?.value ?? ''}`,
    }),
  ],
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})
