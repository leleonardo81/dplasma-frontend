import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { showLoginModal } from "store/general";
import Home from './Home';

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapActionToProps = {
  push,
  showLoginModal: () => showLoginModal(true)
}
export default connect(mapStateToProps, mapActionToProps)(Home);