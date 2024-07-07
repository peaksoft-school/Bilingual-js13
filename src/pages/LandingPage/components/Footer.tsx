import { useState } from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import IconsBilingual from "./assets/Icons.svg";
import IconsYouTube from "./assets/YouTube.svg";
import IconsFacebook from "./assets/Facebook.svg";
import IconsInstagram from "./assets/Instagram.svg";

const Footer: React.FC = () => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div>
			<Box
				sx={{
					width: "100%",
					maxWidth: "1440px",
					height: "100%",
					minHeight: "1110px",
					backgroundColor: "#262626",
					padding: "120px 109px 12px 110px",
				}}>
				<Box
					sx={{
						width: "100%",
						maxWidth: "1220px",
						height: "100%",
						minHeighteight: "728px",
						margin: "0 auto",
					}}>
					{/* Accordion №1 */}
					<Typography
						sx={{
							color: "white",
							fontSize: "40px",
							marginBottom: "38px",
							fontWeight: "bold",
						}}>
						FAQ:
					</Typography>
					<Accordion
						sx={{
							backgroundColor: "#262626",
							boxShadow: "none",
							borderTop: "1px solid gray",
							padding: "34px 0",
						}}
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}>
						<AccordionSummary
							expandIcon={
								expanded === "panel1" ? (
									<CloseIcon sx={{ color: "white" }} />
								) : (
									<AddIcon sx={{ color: "white" }} />
								)
							}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography sx={{ color: "white", fontSize: "20px" }}>
								What is Bilingual?{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ color: "white", fontSize: "18px" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					{/* Accordion №2 */}
					<Accordion
						sx={{
							backgroundColor: "#262626",
							boxShadow: "none",
							borderTop: "1px solid gray",
							padding: "34px 0",
						}}
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}>
						<AccordionSummary
							expandIcon={
								expanded === "panel2" ? (
									<CloseIcon sx={{ color: "white" }} />
								) : (
									<AddIcon sx={{ color: "white" }} />
								)
							}
							aria-controls="panel2a-content"
							id="panel2a-header">
							<Typography sx={{ color: "white", fontSize: "20px" }}>
								How can I show what I am typing during the test?{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ color: "white", fontSize: "18px" }}>
								Please take the test in a separate, quiet room. Close all other
								windows and close all other programs before starting the test.{" "}
								<br />
								An external USB keyboard or mouse can be used during the test.
								However, when answering test questions, you should only type on
								one keyboard and use one mouse. Don't switch between multiple
								keyboards or mice.
							</Typography>
						</AccordionDetails>
					</Accordion>

					{/* Accordion №3 */}
					<Accordion
						sx={{
							backgroundColor: "#262626",
							boxShadow: "none",
							borderTop: "1px solid gray",
							padding: "34px 0",
						}}
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}>
						<AccordionSummary
							expandIcon={
								expanded === "panel3" ? (
									<CloseIcon sx={{ color: "white" }} />
								) : (
									<AddIcon sx={{ color: "white" }} />
								)
							}
							aria-controls="panel3a-content"
							id="panel3a-header">
							<Typography sx={{ color: "white", fontSize: "20px" }}>
								Why should I take the Bilingual English Test?{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ color: "white", fontSize: "18px" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					{/* Accordion №4 */}
					<Accordion
						sx={{
							backgroundColor: "#262626",
							boxShadow: "none",
							borderTop: "1px solid gray",
							padding: "34px 0",
						}}
						expanded={expanded === "panel4"}
						onChange={handleChange("panel4")}>
						<AccordionSummary
							expandIcon={
								expanded === "panel4" ? (
									<CloseIcon sx={{ color: "white" }} />
								) : (
									<AddIcon sx={{ color: "white" }} />
								)
							}
							aria-controls="panel4a-content"
							id="panel4a-header">
							<Typography sx={{ color: "white", fontSize: "20px" }}>
								How can I make sure my microphone picks up my voice clearly?{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ color: "white", fontSize: "18px" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					{/* Accordion №5 */}
					<Accordion
						sx={{
							backgroundColor: "#262626",
							boxShadow: "none",
							borderTop: "1px solid gray",
							borderBottom: "1px solid gray",
							padding: "34px 0",
						}}
						expanded={expanded === "panel5"}
						onChange={handleChange("panel5")}>
						<AccordionSummary
							expandIcon={
								expanded === "panel5" ? (
									<CloseIcon sx={{ color: "white" }} />
								) : (
									<AddIcon sx={{ color: "white" }} />
								)
							}
							aria-controls="panel4a-content"
							id="panel5a-header">
							<Typography sx={{ color: "white", fontSize: "20px" }}>
								How can I allow a test to record my computer's screen?{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ color: "white", fontSize: "18px" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Box sx={{ marginTop: "140px" }}>
						<img src={IconsBilingual} alt="Icons-Bilingual" />
						<Box
							sx={{
								display: "flex",
								justifyContent: "end",
								gap: "15px",
								position: "relative",
								top: "-40px",
							}}>
							<a href="https://youtube.com/@peaksofthouse?si=0GFR3PW5QAyV3QnM">
								<img src={IconsYouTube} alt="YouTube" />
							</a>
							<a href="https://www.facebook.com/">
								<img src={IconsFacebook} alt="Facebook" />
							</a>
							<a href="https://www.instagram.com/peaksoft.house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
								<img src={IconsInstagram} alt="Instagram" />
							</a>
						</Box>
					</Box>
					<Typography sx={{ color: "#98A2B3", textAlign: "center" }}>
						© Copyright PeakSoft. All Rights Reserved
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default Footer;
