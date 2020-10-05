import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';
import './collections-overview.scss';


const CollectionsOverView = () => {
    const { collections } = useSelector(createStructuredSelector({ collections: selectCollectionsForPreview }))
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default CollectionsOverView