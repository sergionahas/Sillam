import styled from "styled-components";

const LandingTeam = (props) => {
	return(
		<Container>
			<h1>Meet the Team</h1>
			<img className="pencil" src="images/pencil.png" alt="" />
			<img className="star1" src="images/star.png" alt="" />
			<img className="star2" src="images/star.png" alt="" />
			<img className="chat" src="images/chat.png" alt="" />
			<img className="star3" src="images/star2.png" alt="" />
			<img className="star4" src="images/star2.png" alt="" />
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 798px;
	top: 1706px;

	h1{
		position: absolute;
		width: 570px;
		height: 60px;
		left: 435px;
		top: 150px;

		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 40px;
		line-height: 60px;
		/* identical to box height */

		text-align: center;

		color: #000000;
	}

	.pencil{
		position: absolute;
		width: 124px;
		height: 134px;
		left: 1144px;
		top: -29px;
	}
	.star1{
		position: absolute;
		width: 57px;
		height: 57px;
		left: 1223px;
		top: 74px;
	}
	.star2{
		position: absolute;
		width: 41px;
		height: 41px;
		left: 1100px;
		top: -26px;
	}
	.chat{
		position: absolute;
		width: 132px;
		height: 132px;
		left: 192px;
		top: 717px;
	}
	.star3{
		position: absolute;
		width: 57px;
		height: 57px;
		left: 262px;
		top: 858px;
	}
	.star4{
		position: absolute;
		width: 41px;
		height: 41px;
		left: 344px;
		top: 800px;
	}
`;

export default LandingTeam;