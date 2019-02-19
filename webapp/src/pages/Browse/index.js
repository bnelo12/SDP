import { connect } from 'react-redux';

import Browse from './Browse';

const mapStateToProps = state => {
    return { 
        ...state.browseItems
    };
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);