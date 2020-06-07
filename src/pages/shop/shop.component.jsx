import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) =>(
            <div className='shope-page'>
           <Route exact path={`${match.path}`} component={CollectionOverview}/>
           <Route path={`${match.path}/:collecctionId`}  component={CollectionPage}/>
            </div>);
    

export default ShopPage;