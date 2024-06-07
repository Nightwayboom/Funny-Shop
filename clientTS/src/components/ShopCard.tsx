import * as React from 'react'
// import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
// import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
// import FavoriteIcon from '@mui/icons-material/Edit'
// import ShareIcon from '@mui/icons-material/DeleteForeverOutlined'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
import axiosInstance from '../axiosInstance'
import { newCardType, newUsersType } from './app.type'

// const ExpandMore = styled(props => {
// 	const { expand, ...other } = props
// 	return <IconButton {...other} />
// })(({ theme, expand }) => ({
// 	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// 	marginLeft: 'auto',
// 	transition: theme.transitions.create('transform', {
// 		duration: theme.transitions.duration.shortest,
// 	}),
// }))

type ShopCardPropsType = {
	card: newCardType,
	
	setCards: React.Dispatch<React.SetStateAction<newCardType>>,
	cards: newCardType[],
}


export default function ShopCard({ card, setCards, cards } : ShopCardPropsType ) : JSX.Element {
	const [expanded, setExpanded] = React.useState(false)

	async function deleteCard(): Promise<void> {
		const response = await axiosInstance.delete(`/cards/${card.id}`)
		if (response.data) {
			console.log('Удалено')
			const newCard = cards.filter(nCard => nCard?.id !== card.id)
			setCards([...newCard])
		} else {
			alert('ЧТо-то пошло не так!!!!!')
		}
	}

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card sx={{ maxWidth: 345, marginBottom: '15px' }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[900] }} aria-label='recipe'>
					</Avatar>
				}
				title={card.name} // название
				subheader={card.createdAt} // время добавления
			/>
			<CardMedia
				component='img'
				style={{ objectFit: 'contain', height: '200px', width: '260px' }}
				image={card.img} // картинка
				alt='Paella dish'
			/>
			<CardContent>
				<Typography gutterBottom variant='h6' component='div'>
					Стоимость : {card.price} $
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Button
					color='success'
					style={{ margin: '0 15px 0 0' }}
					variant='outlined'
				>
					Изменить
				</Button>
				<Button color='error' variant='outlined' onClick={() => deleteCard()}>
					Удалить
				</Button>
			</CardActions>
		</Card>
	)
}
