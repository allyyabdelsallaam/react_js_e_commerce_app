import { createSelector } from 'reselect';

const selectCollections = state => state.shop

export const selectDirectoryCollections = createSelector(
    [selectCollections],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCategory = collectionUrlParam =>
    createSelector(
        [selectDirectoryCollections],
        collections => collections[collectionUrlParam]
    );