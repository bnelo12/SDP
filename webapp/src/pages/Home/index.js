import { connect } from 'react-redux';

import authenticatedPage from '../authenticatedPage';

import { subscribeToBrowseItemsData, unsubscribeToBrowseItemsData, handleBrowseItemClicked } from '../../store/browseItems/actions'

import Home from './Home';

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        browseItemsDispatch: {
            subscribeToBrowseItemsData: function() {
                dispatch(subscribeToBrowseItemsData());
            },
            unsubscribeToBrowseItemsData: () => dispatch(unsubscribeToBrowseItemsData()),
            handleBrowseItemClicked: () => dispatch(handleBrowseItemClicked())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authenticatedPage(Home));