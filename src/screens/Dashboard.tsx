import React from "react";
import Header from "../components/Header.tsx";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import StarIcon from "@mui/icons-material/Star";

const years = [
	{
		number: "01",
		title: "Year 1",
		desc: "Foundation & Core Concepts",
		count: 2,
		icon: <SchoolIcon fontSize="large" />,
		color: "#1976d2",
		highlight: false,
	},
	{
		number: "02",
		title: "Year 2",
		desc: "Advanced Topics & Practice",
		count: 2,
		icon: <EmojiObjectsIcon fontSize="large" />,
		color: "#0288d1",
		highlight: false,
	},
	{
		number: "03",
		title: "Year 3",
		desc: "A/L Examination Preparation",
		count: 2,
		icon: <StarIcon fontSize="large" />,
		color: "#1565c0",
		highlight: false,
	},
];

const Dashboard: React.FC = () => (
	<>
		<Header />
		<Box
			sx={{
				minHeight: "100vh",
				width: "100vw",
				px: 0,
				py: 0,
				background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
			}}
		>
			<Box
				sx={{
					maxWidth: 1400,
					mx: "auto",
					px: 3,
					py: 7,
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						mb: 6,
						backdropFilter: "blur(2px)",
						background: "rgba(255,255,255,0.7)",
						borderRadius: 4,
						py: 1,
						boxShadow: "0 2px 16px 0 rgba(30,136,229,0.07)",
					}}
				>
					<Typography
						variant="h3"
						fontWeight={700}
						color="primary"
						gutterBottom
						sx={{
							letterSpacing: 1,
							textShadow: "0 2px 8px #bbdefb",
						}}
					>
						Select A/L Year
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						sx={{ fontWeight: 500 }}
					>
						Choose the year to view and manage students
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 5,
						mt: 6,
					}}
				>
					{years.map((y) => (
						<Card
							key={y.number}
							elevation={y.highlight ? 8 : 3}
							sx={{
								width: 350,
								borderRadius: 5,
								border: y.highlight
									? "3px solid #1e88e5"
									: "3px solid transparent",
								boxShadow: "0 8px 30px rgba(30, 136, 229, 0.13)",
								transition: "transform 0.3s, box-shadow 0.3s",
								"&:hover": {
									transform: "translateY(-12px) scale(1.04)",
									boxShadow: "0 15px 45px rgba(30, 136, 229, 0.18)",
									borderColor: "#1e88e5",
									background: "linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)",
								},
								cursor: "pointer",
								position: "relative",
								overflow: "visible",
								bgcolor: "#fff",
								backdropFilter: "blur(2px)",
								height: 320, // decreased height
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<CardContent sx={{ textAlign: "center", py: 3 }}>
								<Avatar
									sx={{
										bgcolor: y.color,
										width: 56,
										height: 56,
										mx: "auto",
										mb: 1.5,
										boxShadow: 3,
									}}
								>
									{y.icon}
								</Avatar>
								<Typography
									variant="h2"
									fontWeight={900}
									sx={{
										background: `linear-gradient(135deg, ${y.color}, #42a5f5)`,
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										mb: 0.5,
										letterSpacing: 2,
										fontSize: "2.2rem",
									}}
								>
									{y.number}
								</Typography>
								<Typography
									variant="h6"
									color="primary"
									fontWeight={700}
									gutterBottom
									sx={{ mb: 0.5 }}
								>
									{y.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{ mb: 1, fontWeight: 500 }}
								>
									{y.desc}
								</Typography>
								<Box
									sx={{
										bgcolor: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
										background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
										py: 0.8,
										px: 2,
										borderRadius: 2,
										fontWeight: 700,
										color: "#1565c0",
										fontSize: "1em",
										boxShadow: 1,
										display: "inline-block",
										letterSpacing: 1,
									}}
								>
									{y.count} Students
								</Box>
							</CardContent>
						</Card>
					))}
				</Box>
			</Box>
		</Box>
	</>
);

export default Dashboard;
