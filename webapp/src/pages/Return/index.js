import { connect } from 'react-redux';
import { withToastManager  } from 'react-toast-notifications';

import Return from './Return';


const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withToastManager(Return));