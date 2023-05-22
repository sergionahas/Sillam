import styled from "styled-components";

const LandingIntro = (props) => {
	return(
		<div>
			<Intro>
				<h1>Kickstart your CAREER. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Explore your interests. 
				Find top &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;TALENT</h1>
				<Vector>
					<img src="images/vector.png" alt="" />
				</Vector>
				<Talent>
					<img className="talent1" src="images/talent1.png" 
					alt="" />
					<img className="talent2" src="images/talent2.png" 
					alt="" />
					<img className="talent3" src="images/talent3.png" 
					alt="" />
				</Talent>
				<p>Sillam is an operator of an online job 
				marketplace designed to connect students and recent 
				grads with job and internship opportunities.
				</p>
			</Intro>
			<Transition>
				<img src="images/transition.png" alt="" />
				<p>In-demand employers for every career path</p>
			</Transition>
		</div>
	)
}

const Intro = styled.section`
	h1 {
		position: absolute;
		width: 1006px;
		height: 156px;
		left: 217px;
		top: 276px;

		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 52px;
		line-height: 78px;
		text-align: center;

		color: #000000;
	}

	p {
		position: absolute;
		width: 756px;
		height: 68px;
		left: 342px;
		top: 462px;

		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 34px;
		/* or 170% */

		text-align: center;

		color: #78808A;

	}
`;

const Vector = styled.div`
	img{
		position: absolute;
		left: 830px;
		top: 283px;
		width: 60px;
	}
`;

const Talent =styled.div`
	.talent1{
		position: absolute;
		width: 44px;
		height: 44px;
		left: 810px;
		top: 370px;
	}
	.talent2{
		position: absolute;
		width: 44px;
		height: 44px;
		left: 842px;
		top: 370px;
	}
	.talent3{
		position: absolute;
		width: 44px;
		height: 44px;
		left: 874px;
		top: 370px;
	}
`;

const Transition = styled.div`
	p{position: absolute;
	width: 360px;
	height: 28px;
	left: 538px;
	top: 740px;

	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 28px;
	/* identical to box height, or 175% */

	text-align: center;

	color: #000000;
	}
	img{
		position: absolute;
		width: 63.39px;
		height: 140.98px;
		left: 669.14px;
		top: 566.42px;
	}
`;

export default LandingIntro;