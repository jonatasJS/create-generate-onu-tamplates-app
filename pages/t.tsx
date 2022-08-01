//import { Base } from '../templates/Base';

// const Index = () => <Base />;
const Index = () => {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
		@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

		* {
			box-sizing: border-box;
			font-family: "Ubuntu";
		}

		body {
			padding: 0;
			margin: 0;
			height: 100vh;
			display: grid;
			place-items: center;
			background: #E9A6A6;
		}

		.frame {
			width: 300px;
			height: 300px;
			border: solid 1px #1C0C5B;
			position: relative;
			background: #916BBF;
		}

		.face {
			position: absolute;
			bottom: 0;
			right: 80px;
			width: 200px;
			border-bottom: 120px solid #444444;
			border-left: 40px solid transparent;
			border-right: 40px solid transparent;
		}

		.face .stripes {
			width: 8px;
			height: 12px;
			position: absolute;
			background: pink;
			top: 2px;
		}

		.face .stripes:nth-child(1) {
			left: 42%;
		}

		.face .stripes:nth-child(2) {
			right: 42%;
		}

		.face .l-ear {
			position: absolute;
			top: 0;
			transform: translateY(-100%);
			width: 55px;
			border-bottom: 25px solid #444444;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
		}

		.face .l-ear:after {
			content: "";
			position: absolute;
			top: 0;
			transform: translateY(-40%);
			display: inline-block;
			background: #444444;
			width: 39px;
			height: 39px;
			border-radius: 100%;
		}

		.face .r-ear {
			position: absolute;
			top: 0;
			right: 0;
			transform: translateY(-100%);
			width: 55px;
			border-bottom: 25px solid #444444;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
		}

		.face .r-ear:after {
			content: "";
			position: absolute;
			top: 0;
			transform: translateY(-40%);
			display: inline-block;
			background: #444444;
			width: 39px;
			height: 39px;
			border-radius: 100%;
		}

		.face .l-eye {
			position: absolute;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: #222;
			left: 22%;
			top: 25px;
		}

		.face .r-eye {
			position: absolute;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: #222;
			right: 22%;
			top: 25px;
		}

		.face .whiskers {
			width: 6px;
			height: 40px;
			background: #222;
			position: absolute;
			top: 25px;
		}

		.face .whiskers:nth-child(7) {
			transform: rotate(70deg);
			right: 0;
		}

		.face .whiskers:nth-child(8) {
			transform: translateY(50%) rotate(110deg);
			right: 0;
		}

		.face .whiskers:nth-child(9) {
			transform: rotate(-70deg);
			left: 0;
		}

		.face .whiskers:nth-child(10) {
			transform: translateY(50%) rotate(-110deg);
			left: 0;
		}

		.face .nose {
			background: #222;
			width: 15px;
			height: 20px;
			position: absolute;
			left: 50%;
			top: 50px;
			transform: translateX(-50%);
			border-radius: 50% 50% 50% 50%/26% 26% 74% 74%;
		}

		.speech {
			width: 150px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 60px;
			border-radius: 20px;
			background: #eee;
			text-align: center;
			font-size: 1.5em;
			padding-top: 0.25em;
			position: absolute;
			right: 10%;
			top: 20%;
		}

		.speech:after {
			content: "";
			position: absolute;
			bottom: 0;
			transform: translate(15px, 8px) rotate(-40deg);
			display: block;
			left: 40px;
			width: 0;
			height: 0;
			border-top: 5px solid transparent;
			border-right: 30px solid #eee;
			border-bottom: 5px solid transparent;
		}

		.speech span {
			color: red;
			margin: 0 5px;
		}
		`,
				}}
			></style>
			<div className="frame">
				<div className="face">
					<div className="stripes"></div>
					<div className="stripes"></div>
					<div className="l-ear"></div>
					<div className="r-ear"></div>
					<div className="l-eye"></div>
					<div className="r-eye"></div>
					<div className="whiskers"></div>
					<div className="whiskers"></div>
					<div className="whiskers"></div>
					<div className="whiskers"></div>
					<div className="nose"></div>
				</div>
				<div className="speech">
					Hi! I <span>❤</span> You!
				</div>
			</div>
		</>
	);
};

export default Index;
