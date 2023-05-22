import styled from "styled-components";

const LandingHeader = (props) => {
	return(
		<Nav>
				<a href="/">
					<img src="/images/logo.png" alt="" />
				</a>
				<div>
					<Students>Students</Students>
					<Employers>Employers</Employers>
					<LogIn>Log in</LogIn>
					<SignUp>Sign Up</SignUp>
				</div>
		</Nav>
	)
}

const Nav = styled.nav`
	max-width: 1528px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
	flex-wrap: nowrap;
	border-radius: 20px;
	& > a {
		width: 150px;
		height: 50px;
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	img{
		position: relative;
		top: -20px;
		left: 30px;
		background: transparent;
	}
	}
`;

const Students = styled.div`
	position: absolute;
	width: 104px;
	height: 24px;
	left: 987px;
	top: 30px;

	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	/* identical to box height */

	text-align: center;

	color: #78808A;
`;

const Employers = styled.div`
	position: absolute;
	width: 85px;
	height: 24px;
	left: 858px;
	top: 30px;

	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	/* identical to box height */

	text-align: center;

	color: #78808A;
`;

const SignUp = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 28px;
	position: absolute;
	width: 118px;
	height: 48px;
	left: 1264px;
	top: 18px;
	background: #FEBA2C;
	border-radius: 40px;
	border: none;
	font-weight: 600;
	font-size: 16px;
	font-family: Poppins;

`;

const LogIn = styled.button`
	position: absolute;
	width: 100px;
	height: 24px;
	right: 200px;
	top: 30px;

	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	/* identical to box height */

	text-align: center;

	color: #EFA201;

	background-color: white;
	border: none;


	/* Inside Auto Layout */

	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 10px;
`;

export default LandingHeader;