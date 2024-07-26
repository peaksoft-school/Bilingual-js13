import { useState } from "react";
import {
	Box,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	SelectChangeEvent,
} from "@mui/material";
import AddOptionsModal from "./AddOptionsModal";
import OptionsList from "./OptionsList";

const MainPage: React.FC = () => {
	const [options, setOptions] = useState<Option[]>([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedType, setSelectedType] = useState("");
	const [buttonsVisible, setButtonsVisible] = useState(false);
  const [adiModal,setAdiModal] = useState(false)

	interface Option {
		id: number;
		text: string;
		isTrue: boolean;
	}

	const handleAddOption = (option: Option) => {
		setOptions([...options, option]);
		if (!buttonsVisible) {
			setButtonsVisible(true);
		}
	};

	const handleDeleteOption = (id: number) => {
		setOptions(options.filter((option) => option.id !== id));
	};

	const handleUpdateOption = (updatedOption: Option) => {
		setOptions(
			options.map((option) =>
				option.id === updatedOption.id ? updatedOption : option
			)
		);
	};

	const handleTypeChange = (event: SelectChangeEvent<string>) => {
		setSelectedType(event.target.value as string);
	};

	return (
		<Box sx={{ paddingTop: "50px" }}>
			<FormControl sx={{ width: "500px" }}>
				<InputLabel>Type</InputLabel>
				<Select value={selectedType} onChange={handleTypeChange}>
					<MenuItem value="selectRealWords">Select real English words</MenuItem>
				</Select>
			</FormControl>
			{selectedType === "selectRealWords" && (
				<Button variant="contained" onClick={() => setAdiModal(true)}>
					+ ADD OPTIONS
				</Button>
        
			)}
			<AddOptionsModal
				open={modalOpen}
				handleClose={() => setModalOpen(false)}
				addOption={handleAddOption}
			/>
			<OptionsList
				options={options}
				deleteOption={handleDeleteOption}
				updateOption={handleUpdateOption}
			/>
			{buttonsVisible && (
				<Box>
					<Button variant="contained">GO BACK</Button>
					<Button variant="contained">SAVE</Button>
				</Box>
			)}
		</Box>
	);
};

export default MainPage;


// setModalOpen(true)