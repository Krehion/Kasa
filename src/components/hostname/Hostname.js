const HostName = ({ name }) => {
	const getFormattedName = (name) => {
		// Split the name into words
		const nameParts = name.trim().split(" ");
		if (nameParts.length > 1) {
			// Separate first name and last name
			const firstName = nameParts.slice(0, -1).join(" ");
			const lastName = nameParts[nameParts.length - 1];
			return (
				<>
					{firstName}
					<br />
					{lastName}
				</>
			);
		}
		// Return name unchanged if only one word
		return name;
	};

	return <p>{getFormattedName(name)}</p>;
};

export default HostName;
