import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21',

    useCdn: process.env.NODE_ENV === 'production',

    /* token: '<sanity access token>',
     EventSource:  provide your own event source implementation. Required in browsers to support the above token parameter. */
}

//Set up the client for fetching data in the getProps page func
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
