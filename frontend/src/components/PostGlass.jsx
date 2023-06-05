import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import nollbetyg from '../assets/betyg/nollbetyg.png'
import ettbetyg from '../assets/betyg/ettbetyg.png'
import creamcursor from '../assets/smallcreamcursor.png'


function PostGlass() {
    const [glassId, setGlassId] = useState('');
    const [recensent, setRecensent] = useState('');
    const [betyg, setBetyg] = useState('');
    const [rec, setRec] = useState('');
    const [glassarna, setGlassarna] = useState([])

    useEffect(() => {
        fetchGlassarna()
    }, [])

    const fetchGlassarna = async () => {
        try {
            const response = await axios.get('http://localhost:8800/glassarna')
            setGlassarna(response.data)
        } catch (error) {
            console.error('error fetching glassar:', error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recensentValue = recensent || 'Glassätaren'

        try {await axios.post('http://localhost:8800/recensioner', {
            glass_id: glassId,
            recensent: recensentValue,
            betyg,
            rec
        })

        setGlassId('');
        setRecensent('');
        setBetyg('');
        setRec('')

        console.log('Recension submited');
    } catch (error) {
        console.error('Error submitting recension:', error.response || error);
    }
    }

    const refresh = () => {
        window.location.reload()
    }

    const BetygImages = [
        nollbetyg,
        ettbetyg
      ];

  return (
    <Container>
        <RecTitle>Skriv en recension</RecTitle>
        <FormWrapper>
        <form onSubmit={handleSubmit}>
        <Row>
        <TopLeftGroup>
        <GlassLabel htmlFor="glassId">Glass:</GlassLabel>
        <GlassSelect
            id="glassId"
            value={glassId}
            onChange={(e) => setGlassId(e.target.value)}
        >
        <option value="">Välj en glass</option>
        {Array.isArray(glassarna) &&
            glassarna.map((glass) => (
            <option key={glass.id} value={glass.id}>
                {glass.namn}
            </option>
            ))}
        </GlassSelect>
        </TopLeftGroup>



            <TopRightGroup>
            <BetygLabel htmlFor="betyg">Betyg:</BetygLabel>
            <BetygInputWrapper>
            {[1, 2, 3, 4, 5].map((value) => (
              <BetygOption
                key={value}
                selected={betyg === value}
                onClick={() => setBetyg(value)}
              >
                <img src={value <= betyg ? ettbetyg : nollbetyg} alt={`Betyg ${value}`} />
              </BetygOption>
            ))}
            </BetygInputWrapper>
            </TopRightGroup>
            </Row>

            <Row>
            <MiddleGroup>
            <RecLabel htmlFor="rec">Recension:</RecLabel>
            <RecTextarea id="rec" value={rec} onChange={(e) => setRec(e.target.value)}/>
            </MiddleGroup>
            </Row>

            <Row>
            <BottomLeftGroup>
            <RecensentLabel htmlFor="recensent">Ange namn (valfritt)</RecensentLabel>
            <RecensentInput type="text"
            id="recensent"
            value={recensent}
            onChange={(e) => {
                console.log('Recensent', e.target.value);
                setRecensent(e.target.value)}} />
            </BottomLeftGroup>

            <BottomRightGroup>
            <SubmitButton type="submit" onClick={refresh}>Skicka</SubmitButton>
            </BottomRightGroup>
            </Row>
        </form>
        </FormWrapper>
    </Container>
  )
}

export default PostGlass

const RecTitle = styled.h2`
font-family: 'Neucha';
font-size: 3.5rem;
color: white;
letter-spacing: 0.1em;
text-align: center;

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 70vh;
  border: solid white 3px;
  border-radius: 1% / 1%;
  padding: 2vw;
  background-color: #78cdc0;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 80%;
    height: auto;
    border-radius: 2% / 2%;
    padding: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 80%;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`

const TopLeftGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const TopRightGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
`

const MiddleGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const BottomLeftGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const BottomRightGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const GlassLabel = styled.label`
padding-right: 1vw;
font-family: 'Neucha';
color: white;
font-size: 1.5rem;
`

const GlassSelect = styled.select`
    background-color: white;
    border: solid white;
    color: #78CDC0;
    font-family: 'Neucha';
    font-size: 1.4rem;
    border-radius: 5px;
    height: 5vh;
    width: 25vw;

    @media (max-width: 500px) {
    width: 100%;

    option {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }

`

const BetygLabel = styled.label`
color: white;
font-family: 'Neucha';
font-size: 1.8rem;
text-align: center;
margin-bottom: 1vh;

@media (max-width: 500px) {
    margin-top: 5vh;
  }
`

const BetygInputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;

`

const BetygOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 8vh;
  cursor: pointer;

  &:hover {
    img {
      filter: brightness(0.7);
    }
  }

  img {
    width: 95%;
    height: 95%;
    object-fit: contain;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

`

const RecensentLabel = styled.label`
font-family: 'Neucha';
color: white;
font-size: 1.5rem;
margin-top: 5vh;
margin-bottom: 1vh;

`

const RecensentInput = styled.input`
    background-color: white;
    border: solid white;
    color: #78CDC0;
    font-family: 'Neucha';
    font-size: 1.4rem;
    border-radius: 3px;
    height: 5vh;
    width: 25vw;

    @media (max-width: 500px) {
    width: 100%;
  }
`

const RecLabel = styled.label`
text-align: center;
font-family: 'Neucha';
font-size: 2rem;
color: white;

`

const RecTextarea = styled.textarea`
width: 60vw;
height: 30vh;
background-color: white;
border-radius: 3%;
border: solid white;

@media (max-width: 500px) {
    width: 100%;
  }
`

const SubmitButton = styled.button`
background-color: #31898a;
color: #ffffff;
font-family: 'Neucha';
font-size: 1.8rem;
height: 10vh;
width: 15vw;
border: solid #ffffff;
border-radius: 7%;
margin-top: 5vh;
margin-left: 17vw;
margin-bottom: 3vh;
cursor: url(${creamcursor}), auto;

&:hover {
    background-color: #194748;
}

@media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`
