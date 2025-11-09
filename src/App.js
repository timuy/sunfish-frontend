import logo from './logo.svg';
import './App.css';

import React, { useRef} from 'react';
import axios from 'axios';

function App() {
  const ageInputRef = useRef(null);
  const weightInputRef = useRef(null);
  const feetInputRef = useRef(null);
  const inchesInputRef = useRef(null);
  const liveBirthsInputRef = useRef(null);
  const priorPregnanciesInputRef = useRef(null);
  const useOwnEggsInputRef = useRef(null);
  const usedIvfInPastInputRef = useRef(null);
  const knownReasonForInfertilityInputRef = useRef(null);
  const maleFactorInfertiltyInputRef = useRef(null);
  const endometriosisInputRef = useRef(null);
  const tubalFactorInputRef = useRef(null);
  const ovulatoryDisorderInputRef = useRef(null);
  const diminishedOvarianReserveInputRef = useRef(null);
  const uterineFactorInputRef = useRef(null);
  const otherReasonUnexplainedInputRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();

    const usedIvfInPast = usedIvfInPastInputRef.current.value
    var usedIvfInPastValue = null;

    if (usedIvfInPast === "True"){
      usedIvfInPastValue = true;
    }
    else if (usedIvfInPast === "False"){
      usedIvfInPastValue = false;
    }

    const postData = {
      "background_history": {
        "height_feet": feetInputRef.current.value,
        "height_inches": inchesInputRef.current.value,
        "weight": weightInputRef.current.value,
        "age": ageInputRef.current.value,
        "use_own_eggs": useOwnEggsInputRef.current.value === "True"? true : false,
        "used_ivf_in_past": usedIvfInPastValue,
        "know_reason_for_infertility": knownReasonForInfertilityInputRef.current.value === "True"? true: false,
        "number_of_live_births": liveBirthsInputRef.current.value === "True"? true: false,
        "number_of_prior_pregnancies": priorPregnanciesInputRef.current.value === "True"? true: false
    },
    "diagnosis_and_plan": {
        "male_factor_infertility": maleFactorInfertiltyInputRef.current.value === "True"? true: false,
        "endometriosis": endometriosisInputRef.current.value === "True"? true: false,
        "tubal_factor": tubalFactorInputRef.current.value === "True"? true: false,
        "ovulatory_disorder": ovulatoryDisorderInputRef.current.value === "True" ? true: false,
        "diminished_ovarian_reserve": diminishedOvarianReserveInputRef.current.value === "True"? true: false,
        "uterine_factor": uterineFactorInputRef.current.value === "True"? true: false,
        "other_reason_unexplained": otherReasonUnexplainedInputRef.current.value === "True"? true: false
      }
    }
    axios.post('http://localhost:8080/ivf/estimator', postData)
        .then(response => {
          console.log('Post created successfully:', response.data);
          alert(response.data.success_rate);
        })
        .catch(error => {
          console.error('Error creating post:', error);
        }); 
  };

  return (
    <div className="form-container">
      <h2>Background and History</h2>
      <form onSubmit={handleClick}>
        <label htmlFor="age">How old are you?</label>
        <input type="number" ref={ageInputRef} id="age" name="age" placeholder="Enter age between 20 and 50 years" />
        <br />
        <label htmlFor="weight">How much do you weigh?</label>
        <input type="number" ref={weightInputRef} id="weight" name="weight" placeholder="Enter weight between 80 and 300 lbs" />
        <br />
        <label htmlFor="feet">How tall are you?</label>
        <input type="number" ref={feetInputRef} id="feet" name="feet" placeholder="feet" />
        <input type="number" ref={inchesInputRef} id="inches" name="inches" placeholder="inches" />
        <br />
        <label> Number of live births
          <select ref={liveBirthsInputRef} id="live_births" name="live_births">
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2 or more</option>
          </select>
        </label>
        <br/>
        <label> Number of prior preganancies
          <select ref={priorPregnanciesInputRef} id="prior_pregnancies" name="prior_pregnancies">
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2 or more</option>
          </select>
        </label>
        <br/>
        <label>Use your own eggs?
        <select ref={useOwnEggsInputRef} id="use_own_eggs" name="use_own_eggs">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </label>
        <br/>            
        <label>How many times have you used IVF in the past?
        <select ref={usedIvfInPastInputRef} id="used_ivf_in_past" name="used_ivf_in_past">
            <option value="N/A">N/A</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </label>
        <br/>
        <label>Known reason for infertility?
        <select ref={knownReasonForInfertilityInputRef} id="known_reason_for_infertility" name="known_reason_for_infertility">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </label>
        <br/>
      <h2>Diagnosis and Plan</h2>
        <label>Male Factor Infertility
        <select ref={maleFactorInfertiltyInputRef} id="male_factor_infertility" name="male_factor_infertility">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </label>
        <br/>
        <label>Endometriosis
        <select ref={endometriosisInputRef} id="endometriosis" name="endometriosis">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>          
        </label>
        <br/>
        <label>Tubal Factor
        <select ref={tubalFactorInputRef} id="tubal_factor" name="tubal_factor">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>           
        </label> 
        <br/> 
        <label>Ovulatory Disorder
        <select ref={ovulatoryDisorderInputRef} id="ovulatory_disorder" name="ovulatory_disorder">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>            
        </label>
        <br/>
        <label>Diminished Ovarian Reserve
        <select ref={diminishedOvarianReserveInputRef} id="diminished_ovarian_reserve" name="diminished_ovarian_reserve">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>            
        </label>
        <br/>
        <label>Uterine Factor
        <select ref={uterineFactorInputRef} id="uterine_factor" name="uterine_factor">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>            
        </label>
        <br/>
        <label>Other Reason Unexplained (Went to the doctor but doctor can not give reason why infertile)
        <select ref={otherReasonUnexplainedInputRef} id="other_reason_unexplained" name="other_reason_unexplained">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>           
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
