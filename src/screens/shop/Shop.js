import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionsOverView from '../../components/collections-overview/collections-overview';
import Category from '../category/category';


const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverView} />
            <Route path={`${match.path}/:collectionId`} component={Category} />
        </div>
    )
}

export default ShopPage