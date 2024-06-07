import React, { useEffect, useState } from 'react'
import ShopCard from '../components/ShopCard'
import axiosInstance from '../axiosInstance'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { newCardType, UserProps } from '../components/app.type'
import { loadCard } from '../components/api'

type addCardType = {
  name : string,
  img: string,
  price : string
}
type UserPropsWithoutSetUser = Omit<UserProps, "setUser">

function MainPage({user}: UserPropsWithoutSetUser) {
	const [cards, setCards] = useState<newCardType[]>([])
	const [addCard, setAddCard] = useState<addCardType>({
		name: "",
		img : "",
		price: ""
	})

	useEffect(() => {
    loadCard()
      .then((data) => setCards(data)
      )
      .catch(console.error);
  }, []);

	async function createCard() {
    try {
      const response = await axiosInstance.post('/cards', addCard);
      setAddCard({
        img: '',
        name: '',
        price: '',
      });
      setCards((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('что-то не так', error);
    }
  }

	return (
		<>
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
			>
				<Typography variant='h4' style={{margin: "20px 0 20px 0"}}>Подогреть</Typography>
				<TextField
					id='outlined-basic'
					label='Название'
					color='warning'
					variant='outlined'
					value={addCard.name}
					onChange={(e) => setAddCard({ ...addCard, name: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='URL'
					color='warning'
					variant='outlined'
					value={addCard.img}
					onChange={(e) => setAddCard({ ...addCard, img: e.target.value })}
				/>
				<TextField
					id='outlined-basic'
					label='Цена'
					color='warning'
					variant='outlined'
					value={addCard.price}
					onChange={(e) => setAddCard({ ...addCard, price: e.target.value })}
				/>
				<Button
					variant='outlined'
					color='warning'
					sx={{ height: '55px', marginTop: '7px' }}
					onClick={createCard}
				>
					Добавить
				</Button>
			</Box>

			<Typography variant='h4' style={{margin: "20px 0 20px 0"}}>Покупай честной народ</Typography>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				{cards &&
					cards.map(card => {
						return <ShopCard key={card.id} card={card} cards={cards} setCards={setCards} />
					})}
			</div>
		</>
	)
}

export default MainPage
