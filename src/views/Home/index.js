import { connect } from 'react-redux';
import { showLoginModal } from "store/general";
import Home from './Home';

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapActionToProps = {
  showLoginModal: () => showLoginModal(true)
}

export default connect(mapStateToProps, mapActionToProps)(Home);