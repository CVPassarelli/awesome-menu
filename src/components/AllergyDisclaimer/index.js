import "./index.css";

export function AllergyDisclaimer(props) {
  return (
    <>
      <input type="checkbox" name="allergy" id="allergy" />
      <div className="disclaimer">
        <div className="wrapper-disclaimer">
          <h1>Allergy Alert at Restaurants</h1>
          <p>
            When dining out, be aware of container allergies. Containers may
            retain traces of allergens from previous use, posing a risk of
            cross-contamination. Restaurants should use separate containers for
            allergen-free ingredients and ensure thorough cleaning protocols.
            Communicate your allergy concerns to staff for a safer dining
            experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default AllergyDisclaimer;
