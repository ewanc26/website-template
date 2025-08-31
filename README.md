# AT Protocol Website Template

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

A versatile website template built with SvelteKit for creating personal websites powered by the AT Protocol. This template provides a clean, customisable foundation for building data aggregation platforms that pull content from various AT Protocol services whilst maintaining full control over presentation and functionality.

Originally derived from commit [ff402f3](https://github.com/ewanc26/website/commit/ff402f3460d86c40ead13294ae1ff5d8605f741c) of [my personal website](https://github.com/ewanc26/website), which itself was forked from [WhiteBreeze](https://github.com/hugeblank/whitebreeze).

## Purpose

This template serves as a starting point for creating personal websites that aggregate and display content from the AT Protocol ecosystem. Rather than being a content management system where you create posts directly, it acts as a unified display layer for your distributed content across various AT Protocol applications.

### Key Features

- **Blog Integration**: Display WhiteWind blog posts with full markdown support
- **Social Content**: Aggregate Bluesky posts and interactions
- **Link Management**: Showcase curated links from Linkat
- **Profile Management**: Unified profile display across platforms
- **Cross-Platform Compatibility**: Optional ActivityPub compatibility for improved content sharing
- **Privacy-First**: No tracking or analytics by default - only uses localStorage for user preferences
- **Customisable**: Clean codebase ready for personalisation and extension

## Installation

To get started with this template, ensure you have Node.js and npm installed.

### Prerequisites

- Node.js (LTS version recommended)  
- npm (comes with Node.js)
- Docker and Docker Compose (for containerised deployment)

### Technology Stack

This template is built with modern web technologies:

- **SvelteKit**: Full-stack web framework
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Typed JavaScript for better development experience
- **Vite**: Fast build tool and development server
- **AT Protocol**: Decentralised social networking protocol
- **Docker**: Containerisation for deployment

### Environment Variables

Before running the application, configure the following environment variables in a `.env` file in the project root:

```ini
PUBLIC_ATPROTOCOL_USER="myhandle.bsky.social" # Your AT Protocol handle or DID
```

#### AT Protocol Handle Setup

If you want to use your domain as your AT Protocol handle, add your DID to the `.static/.well-known/atproto-did` file.

#### Optional Environment Variables

- `PUBLIC_LASTFM_USERNAME`: Required for the Now Playing (Last.fm) feature displaying recent tracks
- `PUBLIC_ACTIVITYPUB_USER=@user@server.tld`: Enables limited ActivityPub compatibility for improved content sharing on platforms like Mastodon

#### Social Media Embed Images

The `./static/embed/` directory is provided for social media embed images. By default, the system will look for `blog.png` or `main.png` within this directory. For optimal display, these images should have dimensions of 630×1200 pixels.

## Usage

### Development

To run the project in development mode:

```sh
npm install
npm run dev
```

### Data Sources

This template aggregates data from your AT Protocol repository. For optimal functionality, ensure you have the following record types in your [AT Protocol repository](https://atproto.com/specs/repository):

#### Required Records

- `app.bsky.actor.profile`: Your profile information
- `com.whtwnd.blog.entry`: Your blog posts (created via WhiteWind)  
- `blue.linkat.board`: Your curated links (created via Linkat)

### Deployment

#### Standalone

To build and run the project as a standalone application:

```sh
npm install
npm run build
node index.js
```

Environment variables can be set before the last command, and the port can be configured with the `PORT` variable.

#### Containerised

To deploy using Docker:

1. Modify `compose.yaml` to change the host port if necessary
2. Run the following command:

```sh
docker compose up -d
```

#### SvelteKit Prerendering

For optimal performance and SEO, this template is configured to prerender all pages by default. This is managed in `svelte.config.js` within the `prerender` object:

```javascript
prerender: {
	entries: ['*'], // Prerenders all routes
	origin: process.env.PUBLIC_ORIGIN || 'http://localhost:5713' // Can be set to your deployment origin if known
},
```

If you have dynamic routes or content that should not be prerendered, you may need to adjust the `entries` array to specify which routes should be prerendered, or disable prerendering for specific pages.

## Content Management

**Important**: This is a data aggregation and display platform, not a content management system. You cannot create or edit content directly through this website. Instead, content is created through the respective AT Protocol applications:

- **Blog Posts**: Create via [WhiteWind](https://whtwnd.com/)
- **Social Posts**: Create via [Bluesky](https://bsky.app/)
- **Links**: Manage via [Linkat](https://linkat.blue/)
- **Profile**: Update via [Bluesky](https://bsky.app/) or other AT Protocol clients

The website automatically pulls and displays this content from your AT Protocol repository.

## Customisation

This template provides a solid foundation that you can customise for your needs:

- Modify the design and layout in the Svelte components
- Add custom lexicons for additional functionality
- Integrate with additional AT Protocol services
- Customise the styling with Tailwind CSS
- Add your own branding and content

## Privacy & Data Collection

This template is designed with privacy in mind:

- **No Tracking**: No analytics or tracking by default
- **Local Storage Only**: Only uses localStorage for user preferences like theme settings
- **No Data Collection**: No personal data collection built into the template
- **Transparent**: Open source codebase allows for full inspection

## Related Services

This template integrates with several AT Protocol and web services:

- **[WhiteWind](https://whtwnd.com/)**: AT Protocol powered markdown blog service
- **[Bluesky](https://bsky.app/)**: Social platform for content sharing and discovery  
- **[Linkat](https://linkat.blue/)**: Link aggregation service using AT Protocol
- **[Last.fm](https://last.fm/)**: Optional music tracking service for displaying recent tracks

## Licensing

This project is a template based on WhiteBreeze and maintains its open-source nature under the AGPL 3.0 licence. Please refer to the `LICENSE` file in the repository for complete licensing information.