import { connect } from 'react-redux';
import Login from '../components/Login';


const mapStateToProps = (state, ownProps) => {
    return {};
};

const LoginContainer = connect(
    mapStateToProps
)(Login);

export default LoginContainer;
