import contentful from 'contentful'

export interface RainbowCard {
    rainbowImage: any;
    rainbowTitle: any;
    rainbowMeasurementText: any;
    rainbowMeasurementValue: any;
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
})
