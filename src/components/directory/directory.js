import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item';
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import '../menu-item/menu-item.scss';
import './directory.scss';


const Directory = () => {

    const { sections } = useSelector(createStructuredSelector({ sections: selectDirectorySections }))

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}

export default Directory