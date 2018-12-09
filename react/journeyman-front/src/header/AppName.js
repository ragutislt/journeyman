import React from 'react';
import Typography from "@material-ui/core/Typography";

const appNameStyle = {
	color: 'inherit',
	fontSize: "1.7rem",
	padding: "0px 10px 0px 10px"
};

function AppName(props) {
	const style = {
		...appNameStyle,
		...props.style
	};
	return <Typography variant={"body1"} style={style}>{props.children}</Typography>;
}

export default AppName;