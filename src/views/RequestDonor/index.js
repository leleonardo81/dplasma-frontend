import { connect } from "react-redux";
import RequestDonor from "./RequestDonor";

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, null)(RequestDonor)