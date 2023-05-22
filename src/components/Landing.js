import styled from "styled-components";
import LandingHeader from "./LandingHeader";
import LandingIntro from "./LandingIntro";
import LandingJourney from "./LandingJourney";
import LandingTeam from "./LandingTeam";
import LandingStatements from "./LandingStatements";

const Landing = (props) => {
	return (
		<Container>
			<LandingHeader />
			<LandingIntro />
			<LandingJourney />
			<LandingTeam />
			<LandingStatements />
		</Container>

	)
}

const Container = styled.div`
	position: relative;
	padding: 0px;
	height: 3570px
`;

export default Landing;


