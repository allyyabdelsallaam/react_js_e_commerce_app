import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/action/cart-action';
import './collection-item.scss';


const CollectionItem = ({ item }) => {
    const { id, name, price, imageUrl } = item
    const dispatch = useDispatch();
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(item))} inverted>Add to cart</CustomButton>
        </div>
    )
}


export default CollectionItem