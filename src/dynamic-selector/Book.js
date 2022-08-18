export default function Book(props) {
  return (
    <>
      <label className="mt-3">Weight</label>
      <input
        type="number"
        min={1}
        id="weight"
        value={props.weight}
        onChange={(e) => props.handleChange(e)}
        name="weight"
        className="form-control"
        placeholder="Weight (KG)"
        required
      ></input>
      <p className="text-info">Please provide weight</p>
    </>
  );
}
