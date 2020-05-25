import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import LabelBottomNavigation from './Footer'

const Main = ({ children }) => (
	<div>
		<Header />
		<Grid container justify="center">
			<Grid item xs={12} sm={6} style={{ marginTop: 150 }}>
				{children}
			</Grid>
		</Grid>
		<LabelBottomNavigation />
	</div>
)

export default Main