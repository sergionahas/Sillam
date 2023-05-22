import styled from "styled-components";

const LandingStatements = (props) => {
	return(
		<Container>
			<img className="apostrophe" src="images/apostrophe.png"
			alt="" />
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	width: 1440px;
	height: 451px;
	left: 0px;
	top: 2827px;
	background-color: #F3EC87;

	.apostrophe{
		position: absolute;
		width: 120px;
		height: 98px;
		left: 1108px;
		top: -49px;
	}
`;

export default LandingStatements;