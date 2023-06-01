import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
            const response = await axios.get('http://localhost:8800/glassar')
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


  return (
    <Container>
        <h2>Skriv en recension</h2>
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
                {value}
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
            <RecensentLabel htmlFor="recensent">Namn:</RecensentLabel>
            <RecensentInput type="text"
            id="recensent"
            value={recensent}
            onChange={(e) => {
                console.log('Recensent', e.target.value);
                setRecensent(e.target.value)}} />
            </BottomLeftGroup>

            <BottomRightGroup>
            <SubmitButton type="submit">Skicka</SubmitButton>
            </BottomRightGroup>
            </Row>
        </form>
        </FormWrapper>
    </Container>
  )
}

export default PostGlass

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  border: solid 4px;
  border-radius: 3%;
  padding: 2vw;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 80%;
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
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const GlassSelect = styled.select`
    background-color: white;
    border: solid;
    color: #1b72bf;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-radius: 5%;
    height: 2rem;
    width: 25vw;
`

const BetygLabel = styled.label`
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center;
margin-bottom: 1vh;
`

const BetygInputWrapper = styled.div`
display: flex;
`

const BetygOption = styled.label`
    background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
`

const RecensentLabel = styled.label`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`

const RecensentInput = styled.input`
    background-color: white;
    border: solid;
    color: #1b72bf;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-radius: 5%;
    height: 1.8rem;
    width: 25vw;
`

const RecLabel = styled.label`
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`

const RecTextarea = styled.textarea`
width: 50vw;
height: 20vh;
background-color: white;
border-radius: 3%;
border: solid;
`

const SubmitButton = styled.button`
background-color: white;
color: #26b7ad;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
height: 4.4vh;
width: 12vw;
border: solid;
border-radius: 7%;
margin-top: 2.9vh;
margin-left: 8vw;
`
