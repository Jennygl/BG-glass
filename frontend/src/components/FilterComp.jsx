import React, { useState } from 'react';
import styled from 'styled-components'
const initialState = ("");
function FilterComp({glassarna, recensioner}) {
    const [selectedNamn, setSelectedNamn] = useState(initialState);
    const [selectedSmak, setSelectedSmak] = useState(initialState);
    const [selectedLactos, setSelectedLactos] = useState(initialState);
    const [selectedNut, setSelectedNut] = useState(initialState);
    const [searchQuery, setSearchQuery] = useState(initialState);
    const [selectedFilter, setSelectedFilter] = useState('');


    function filtreraGlassar(namn, smak, laktos, notter) {
        // laktos, notter
        if (namn === '' && smak === '' && !laktos && !notter && setSearchQuery === '') {
            return glassarna;
          }

        const filtreradeGlassar = glassarna.filter(glass => {
          return (glass.namn === namn || namn === '') &&
          (glass.smak === smak || smak === '') &&
           (!laktos || !glass.laktos) &&
           (! notter || !glass.notter) &&
           (glass.namn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        glass.smak.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === '');
        });
        return filtreradeGlassar;}

        const filteredBySearchQuery = glassarna.filter(glass=>
            glass.namn.toLowerCase().includes(searchQuery.toLowerCase())
        );


      const filtreradeGlassar = filtreraGlassar(
        selectedNamn,
        selectedSmak,
        selectedLactos,
        selectedNut,
        selectedFilter)
        .filter(glass=> filteredBySearchQuery.includes(glass));
    //   console.log(filtreradeGlassar);

      function handleNameChange(e) {
        const selectedValue = e.target.value;
        setSelectedNamn(selectedValue === '' ? initialState : selectedValue)
        // return filtreraGlassar
      }
      function handleTasteChange(e) {
        const selectedValue = e.target.value;
        setSelectedSmak(selectedValue === '' ? initialState : selectedValue)
        // return filtreraGlassar
      }
      function handleNutChange() {
        setSelectedNut(prevState => !prevState);
      }

      function handleLactosChange() {
        setSelectedLactos(prevState => !prevState);
      }

      function handleSearchQueryChange(e){
        setSearchQuery(e.target.value)
        // return filteredBySearchQuery
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

{/* <Search className="search"> */}
        <Input type="text"
          label="Search"
          placeholder='Sök glass'
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="input"
        />
      {/* </Search> */}
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
        <span className="checkmark"></span>
        </Label>
</Allergens>
              <Reset onClick={resetState}>Reset</Reset>



</Form>
          <div className="glassar">
              {filtreradeGlassar.map((glass)=>(
              <div key={glass.id} className="glass">
              <h3>{glass.namn}</h3>
              <p>{glass.smak}</p>
              <p>{glass.recensent}</p>
              <p>{glass.rec}</p>
              {/* <p>{glass.laktos}</p> */}

              </div>
              ))}
              </div>
    </>
  );
}

export default FilterComp;

const FilterHeader = styled.h2`
font-size: 2em;
`
const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #78CDC0;
border: 3px solid white;
border-radius: 5px;
width: 90vw;
height: 15vh;
margin: auto;
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
background-color: white;
height:6vh;
margin-right: 1vw;
border-radius: 5px;
@media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
    max-width:90vw;
    margin-top: 1vh;
margin-bottom: 1vh;
    /* margin: auto; */
    /* padding: 1vh; */
    /* align-items: flex-start; */
  }
`


//Select fields
const Select = styled.select`
position: relative;
/* background-color: white; */
border: solid white;
border-radius: 5px;
/* height: 8vh; */
margin-top: 1vh;
margin-bottom: 1vh;
@media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    /* width: 90%; */
    max-width:90vw;
    font-size: 1.5em;
    /* margin: auto; */
    /* padding: 1vh; */
    /* align-items: flex-start; */
  }


`

//Search bar
const Input = styled.input`
background-color: white;
border: 1px solid white;
border-radius: 5px;
height: 6vh;
width:20%;
font-size: 1.5vw;
margin-right: 1vw;
margin-top: 1vh;
margin-bottom: 1vh;

@media (max-width: 1000px) {
    flex-direction: column;
    height: 5vh;
    width: 86%;
    max-width:90vw;
    font-size: 2em;
    /* margin: auto; */
    padding: 1vh;
    /* align-items: flex-start; */
  }
`


const Allergens = styled.div`
display: flex;
flex-direction: column;
padding-left: 1vw;
`
const Label = styled.label`
font-size: 1.5vw;
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
background-color: #EA97A9;
border: 1px solid #EA97A9;
border-radius: 5px;
height: 5vh;
font-size: 1.5vw;
margin: 2vw;
@media (max-width: 1000px) {
font-size: 1.5em;
  }
`
