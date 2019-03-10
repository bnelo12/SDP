import { connect } from 'react-redux';
import { withToastManager  } from 'react-toast-notifications';

import { handleBrowseItemClicked } from '../../store/browseItems/actions'

import Browse from './Browse';

const mapStateToProps = state => {
    return {
        ...state.browseItems,
        user: state.user.userRecord.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleBrowseItemClicked: (id, item, user) => dispatch(handleBrowseItemClicked(id, item, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withToastManager(Browse));