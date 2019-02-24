import { connect } from 'react-redux';

import { handleBrowseItemClicked } from '../../store/browseItems/actions'
import { showAddedToCartToast } from '../../store/toasts/actions'

import Browse from './Browse';

const mapStateToProps = state => {
    return {
        ...state.browseItems,
        addedToCartToast: {
            ...state.toasts.addedToCart
        },
        user: state.user.userRecord.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleBrowseItemClicked: (id, item, user) => dispatch(handleBrowseItemClicked(id, item, user)),
        showAddedToCartToast: (message) => dispatch(showAddedToCartToast(message))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);