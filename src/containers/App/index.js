import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';
import App from './App';

const mapStateToProps = state => ({
  selectedImgUrl: state.selectedImgUrl,
  isVisible: state.isVisible,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { toggleModal },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
