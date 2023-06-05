//Jennys komponent som filtrerar glassar
//utifrån namn, smak, laktos och nötter.

import React, { useState } from 'react';
import styled from 'styled-components'
import RecCards from './RecCards';
import creamcursor from '../assets/smallcreamcursor.png'

//Sätter startvärdet till en tom sträng för att kunna ta bort alla filter.
const initialState = ("");


function FilterComp({glassarna}) {
    const [selectedNamn, setSelectedNamn] = useState(initialState);
    const [selectedSmak, setSelectedSmak] = useState(initialState);
    const [selectedLactos, setSelectedLactos] = useState(initialState);
    const [selectedNut, setSelectedNut] = useState(initialState);
    const [searchQuery, setSearchQuery] = useState(initialState);
    // const [selectedFilter, setSelectedFilter] = useState('');


    function filtreraGlassar(namn, smak, laktos, notter) {
      //Om inga filtreringar har gjorts, visa alla glassar.
        if (namn === '' && smak === '' && !laktos && !notter && setSearchQuery === '') {
            return glassarna;
          }

          //Filtrerar glassarna utifrån olika kriterier
          //och sparar filtreringen i "filtreradeGlassar".
        const filtreradeGlassar = glassarna.filter(glass => {
          return (glass.namn === namn || namn === '')
          && (glass.smak === smak || smak === '')
          && (!laktos || !glass.laktos)
          && (! notter || !glass.notter)
          && (glass.namn.toLowerCase().includes(searchQuery.toLowerCase())
          ||
        // glass.smak.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === '');
    });
    return filtreradeGlassar;
}

//Filtrerar glassarna baserat på searchQuery.
//Ser till att sökt och hittat glassnamn matchas med gemener.
        const filteredBySearchQuery = glassarna.filter(glass=>
            glass.namn.toLowerCase().includes(searchQuery.toLowerCase())
        );

//Funktionen filtreraGlassar anropas med fyra argument.
//Filtrerar glassarna utifrån sökkriterierna.
      const filtreradeGlassar = filtreraGlassar(
        selectedNamn,
        selectedSmak,
        selectedLactos,
        selectedNut)
        .filter(glass=> filteredBySearchQuery.includes(glass));


      function handleNameChange(e) {
        const selectedValue = e.target.value;
        setSelectedNamn(selectedValue === '' ? initialState : selectedValue)

      }
      function handleTasteChange(e) {
        const selectedValue = e.target.value;
        setSelectedSmak(selectedValue === '' ? initialState : selectedValue)

      }
      function handleNutChange() {
        setSelectedNut(prevState => !prevState);
      }

      function handleLactosChange() {
        setSelectedLactos(prevState => !prevState);
      }

      function handleSearchQueryChange(e){
        setSearchQuery(e.target.value)

        }


      const resetState = (event) => {
          setSelectedNamn(initialState);
          setSelectedSmak(initialState);
          setSearchQuery(initialState);
          setSelectedNut(false);
          setSelectedLactos(false);
          event.preventDefault()
      };




    return (
      <>
<FilterHeader>Filtrera</FilterHeader>

<Form>

{/* Sökfält */}
        <Input type="text"
          label="Search"
          placeholder='Sök glass'
          //Det som skrivs in = "searchQuery"
          value={searchQuery}
          //Vid ändring i sökfältet:
          onChange={handleSearchQueryChange}
          className="input"
        />

    <SelectDiv className="select">
          <Select className="arrow"  value={selectedNamn} onChange={handleNameChange}>
          <option value="">Välj en glass</option>
              {Array.from(new Set(glassarna.map((glass)=> glass.namn))).map((namn) => (
              <Option key={namn} className="glass" value={namn}>{namn}</Option>
              ))}
          </Select>
</SelectDiv>

<SelectDiv className="select">
          <Select className="arrow" value={selectedSmak} onChange={handleTasteChange}>
          <option value="">Välj en smak</option>

          {/* Första mapen tar fram alla smaker från "glassarna".
          new Set tar automatiskt bort dubletter.
          Array.from gör settet till en array.
          Den nya arrayen mapas sedan igenom för att enbart visa dessa i min select. */}
              {Array.from(new Set(glassarna.map((glass) => glass.smak))).map((smak) => (
              <Option key={smak} className="glass" value={smak}>{smak}</Option>
              ))}
          </Select>
          </SelectDiv>

<Allergens>

          <Label>Laktosfri
            <input type="checkbox"
            value="laktos"
            id="laktos"
            checked={selectedLactos}
            onChange={handleLactosChange}/>
            <span className="checkmark"></span>
        </Label>

        <Label>Nötfri
        <input type="checkbox"
        checked={selectedNut}
        onChange={handleNutChange}
        value="notter"
        id="notter"/>
        </Label>
</Allergens>
              <Reset onClick={resetState}>Visa alla glassar</Reset>



</Form>
<RecCards recensioner={filtreradeGlassar}></RecCards>

    </>
  );
}

export default FilterComp;

const FilterHeader = styled.h2`
font-size: 2em;
font-family: 'Neucha';
color:white;
margin-left: 2vw;
`
const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #78CDC0;
border: 3px solid white;
border-radius: 5px;
width: 80vw;
height: 100px;
margin: 1vh auto 10vh auto;
@media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    width: auto;
    max-width:50vw;
    padding: 1vh;
  }
@media (max-width: 550px) {
    max-width:80vw;
  }
`

const SelectDiv = styled.div`
position: relative;
width: 20%;
background-color: #78CDC0;
margin-right: 1vw;
border-radius: 5px;
@media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
  }

  &::after {
    content: '\\25BD';
    position: absolute;
    /* top: 10px; */
    right: 0;
    bottom: 0;
    font-size: 35px;
    color: #78cdc0;
    padding-right: 15px;
    pointer-events: none;
}
&:focus {
    border: 2px solid red;
}
`


//Select fields
const Select = styled.select`
    appearance: none;
    width: 100%;
    padding: 5px;
position: relative;
border: 1px solid white;
border-radius: 5px;
height: 6vh;
margin-top: 1vh;
font-size: 1.5rem;
color:grey;
font-family: 'Neucha';
@media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    margin-bottom:2vh;
  }
`



//Search bar
const Input = styled.input`
background-color: white;
border: 1px solid white;
border-radius: 5px;
height: 5.5vh;
width:20%;
font-size: 1.5em;
font-family: 'Neucha';
margin-right: 1vw;
margin-top: 1vh;

@media (max-width: 1000px) {
    flex-direction: column;
    height: 4vh;
    width: 87%;
    max-width:90vw;
    font-size: 1.5em;
    padding: 1vh;
    margin-bottom:2vh;

  }

`


const Allergens = styled.div`
display: flex;
flex-direction: column;
padding-left: 1vw;
@media (max-width: 1000px) {
flex-direction: row;
  }
`
const Label = styled.label`
font-size: 1.5vw;
font-family: 'Neucha';
padding-bottom: 1vh;
/* display: inline-block; */
@media (max-width: 1000px) {
font-size: 1.5em;
flex-direction: row;
  }
`

const Option = styled.option`
background-color: white;
border: 3px solid white;
border-radius: 5px;
width: 10vw;
height: 60%;
padding-top: 1vh;
@media (max-width: 1000px) {
    height: auto;
    width: 80%;
    max-width:90vw;

  }
`
const Reset = styled.button`
background-color: #31898a;
border: 2px solid white;
border-radius: 5px;
height: 5vh;
font-size: 1.5vw;
font-family: 'Neucha';
margin: 2vw;
cursor: url(${creamcursor}), auto;
@media (max-width: 1000px) {
font-size: 1.5em;
  }
`
