import { connect } from 'react-redux';

import { handleBrowseItemClicked } from '../../store/browseItems/actions'
import { showAddedToCartToast } from '../../store/toasts/actions'

import Browse from './Browse';

const mapStateToProps = state => {
    return { 
        ...state.browseItems,
        addedToCartToast: {
            ...state.toasts.addedToCart
        }
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleBrowseItemClicked: (id) => dispatch(handleBrowseItemClicked(id)),
        showAddedToCartToast: (message) => dispatch(showAddedToCartToast(message))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);