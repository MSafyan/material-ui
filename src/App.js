import './App.css';
import { Button, Grid } from '@material-ui/core';
import Header from './components/Header.jsx';
import SecCard from './components/SecCard';
import SecCardRight from './components/SecCardRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		justifyContent: 'center',
		padding: '1.2rem',
		backgroundImage:
			'linear-gradient(135deg, rgba(159, 159, 159, 0.46) 0%, rgba(159, 159, 159, 0.46) 14.286%,rgba(165, 165, 165, 0.46) 14.286%, rgba(165, 165, 165, 0.46) 28.572%,rgba(171, 171, 171, 0.46) 28.572%, rgba(171, 171, 171, 0.46) 42.858%,rgba(178, 178, 178, 0.46) 42.858%, rgba(178, 178, 178, 0.46) 57.144%,rgba(184, 184, 184, 0.46) 57.144%, rgba(184, 184, 184, 0.46) 71.43%,rgba(190, 190, 190, 0.46) 71.43%, rgba(190, 190, 190, 0.46) 85.716%,rgba(196, 196, 196, 0.46) 85.716%, rgba(196, 196, 196, 0.46) 100.002%),linear-gradient(45deg, rgb(252, 252, 252) 0%, rgb(252, 252, 252) 14.286%,rgb(246, 246, 246) 14.286%, rgb(246, 246, 246) 28.572%,rgb(241, 241, 241) 28.572%, rgb(241, 241, 241) 42.858%,rgb(235, 235, 235) 42.858%, rgb(235, 235, 235) 57.144%,rgb(229, 229, 229) 57.144%, rgb(229, 229, 229) 71.43%,rgb(224, 224, 224) 71.43%, rgb(224, 224, 224) 85.716%,rgb(218, 218, 218) 85.716%, rgb(218, 218, 218) 100.002%)',
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className='App'>
			<Grid container direction='column'>
				<Grid item>
					<Header />
				</Grid>
				<Grid item container max direction='row' className={classes.root}>
					<Grid item xm={0}></Grid>
					<Grid item>
						<SecCard />
						<SecCardRight />
						<SecCard />
					</Grid>
					<Grid item xm={0}></Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
