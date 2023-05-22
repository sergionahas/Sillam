import styled from "styled-components";


const LandingJourney = (props) => {
	return(
		<Container>
			<h1>College-to-career journey in 3 <span>SIMPLE</span> steps!</h1>
			<Scroll>
				<Journey1>
					<p>Step 1</p>
				</Journey1>
				<Journey2>
					<p>Step 2</p>
				</Journey2>
			</Scroll>
		</Container>	
	)
}

const Container = styled.div`
	position: absolute;
	width: 3632px;
	height: 798px;
	left: 0px;
	top: 908px;
	/*overflow-y: scroll;*/
	background: #E7EDFA;

	h1{
		position: absolute;
		width: 570px;
		height: 120px;
		left: 435px;
		top: 100px;

		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 40px;
		line-height: 60px;
		text-align: center;

		color: #000000;
	}
	span{
		color: #4A66FB;
	}
`;

const Scroll = styled.div`
	height: 500px;
	position: relative;
	background-color: grey;
	top: 230px;
	left: 0px;
	width: 3632px;
	display: flex;
	overflow-x: auto;
	overflow-y: auto;

`;

const Journey1 = styled.div`
	p{
		position: absolute;
		width: 223px;
		height: 48px;
		left: 500px;
		top: 0px;

		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 48px;
		/* identical to box height */
		color: #000000;
	}
`;

const Journey2 = styled.div`
	p{
		/*position: absolute;
		width: 223px;
		height: 48px;
		left: 2000px;
		top: 0px;*/

		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 48px;
		/* identical to box height */
		color: #000000;
	}
`;

export default LandingJourney;