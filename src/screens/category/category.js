import React from 'react';
import { useSelector, connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCategory } from '../../redux/shop/shop-selector';
import './category.scss';



const Category = ({ collection }) => {

    // const { category } = useSelector((state, ownProps) => ({
    //     category: selectCategory(ownProps.match.params.categoryId)(state)
    // }))

    const { title, items } = collection;
    return (
        <div className='category'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(Category)